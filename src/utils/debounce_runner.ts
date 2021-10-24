import { AsyncAction } from "../hex/AsyncAction";
import { AsyncActionRunner } from "../hex/AsyncActionRunner";

/* This looks overly complicated for performance reasons.
   You can achieve a simpler version like so.

  const debounce = (func, delay) => {
    let inDebounce
    return function() {
      const context = this
      const args = arguments
      clearTimeout(inDebounce)
      inDebounce = setTimeout(() => func.apply(context, args), delay)
    }
  }

  However this clearTimeout churn is real and can cause a large performance issue.
  Especially if there are many components using this hook. This reduces the amount of
  timeouts made. What this does is tracks the time of the last hit and then only extends
  the timeout with the remaining time before the it checks again. This means instead of having
  thousands of timeouts made and garbage collection you will only have as many as the time
  divided by the delay. For example if the user resizes the element within 400 milliseconds
  you would make 4 timeouts. If this was done without this technique it would make as many
  timeouts as how often the resize was triggered, which could be hundreds or thousands.
*/
export class DebounceRunner<T> {
  private lastHit = 0;
  private delay: number;
  private timeoutId = -1;
  private resolve: (value: T) => void = () => {};
  private value: T;
  runner: AsyncActionRunner<T>;

  constructor(defaultValue: T, delay: number) {
    this.value = defaultValue;
    this.delay = delay;
    this.hit = this.hit.bind(this);
    this.check = this.check.bind(this);
    this.runner = new AsyncActionRunner(defaultValue);
  }

  hit(value: T, delay?: number) {
    delay = typeof delay === "number" ? delay : this.delay;
    if (this.timeoutId === -1) {
      const action = new AsyncAction(
        () =>
          new Promise<T>((resolve) => {
            this.resolve = resolve;
          })
      );
      this.runner.execute(action);
      this.timeoutId = window.setTimeout(this.check, delay);
    }

    this.value = value;
    this.lastHit = Date.now();
  }

  private check() {
    const now = Date.now();
    const elapsedTime = now - this.lastHit;

    if (elapsedTime >= this.delay) {
      this.resolve.call(null, this.value);
      this.timeoutId = -1;
    } else {
      const remainingTime = this.delay - elapsedTime;
      this.timeoutId = window.setTimeout(this.check, remainingTime);
      const action = new AsyncAction(
        () =>
          new Promise<T>((resolve) => {
            this.resolve = resolve;
          })
      );
      this.runner.execute(action);
    }
  }

  dispose() {
    window.clearTimeout(this.timeoutId);
    this.runner.dispose();
  }
}

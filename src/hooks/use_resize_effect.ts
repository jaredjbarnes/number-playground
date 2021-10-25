import { Status } from '../hex/AsyncActionRunner';
import { useAsyncStatusEffect } from '../hex//hooks/useAsyncStatusEffect';
import { DebounceRunner } from '../utils/debounce_runner';
import { useCallback, useState, useRef, useEffect } from 'react';

export function useResizeEffect<T extends HTMLElement>(
  callback: (element: HTMLElement) => void,
  delay = 100
) {
  const elementRef = useRef<HTMLElement | null>(null);
  const callbackRef = useRef(callback);

  callbackRef.current = callback;

  const [debouncer] = useState<DebounceRunner<T | null>>(() => {
    const debouncer = new DebounceRunner<T | null>(null, delay);
    debouncer.hit(null);
    return debouncer;
  });

  const [observer]: any = useState(() => {
    return new ResizeObserver(entries => {
      const element = entries[0]?.target;

      if (element != null) {
        debouncer.hit(element as any);
      }
    });
  });

  useAsyncStatusEffect(() => {
    const status = debouncer.runner.status.getValue();
    const value = debouncer.runner.getValue();

    if (
      status === Status.SUCCESS &&
      typeof callbackRef.current === 'function' &&
      value != null
    ) {
      callbackRef.current(value);
    }
  }, debouncer.runner);

  useEffect(
    () => () => {
      observer.disconnect();
      debouncer.dispose();
    },
    [observer, debouncer]
  );

  return useCallback(
    (element: T | null) => {
      if (elementRef.current != null) {
        observer.unobserve(elementRef.current);
      }

      if (element != null) {
        observer.observe(element);
      }

      debouncer.hit(element);
    },
    [observer, debouncer]
  );
}

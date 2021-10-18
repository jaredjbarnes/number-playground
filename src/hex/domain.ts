import {
  AsyncActionRunner,
  ReadonlyAsyncActionRunner,
} from "./AsyncActionRunner";
import ObservableValue, { ReadonlyObservableValue } from "./ObservableValue";

type UnwrapObservable<T> = T extends AsyncActionRunner<
  infer TValue,
  infer TInitial,
  infer TError
>
  ? AsyncActionRunner<TValue, TInitial, TError>
  : T extends ObservableValue<infer TValue, infer TInitial, infer TError>
  ? ObservableValue<TValue, TInitial, TError>
  : T extends ReadonlyObservableValue<
      infer TValue,
      infer TInitial,
      infer TError
    >
  ? ReadonlyObservableValue<TValue, TInitial, TError>
  : ObservableValue<never, never, never>;

type UnwrapProtectedObservable<T> = T extends AsyncActionRunner<
  infer TValue,
  infer TInitial,
  infer TError
>
  ? ReadonlyAsyncActionRunner<TValue, TInitial, TError>
  : T extends ObservableValue<infer TValue, infer TInitial, infer TError>
  ? ReadonlyObservableValue<TValue, TInitial, TError>
  : ReadonlyObservableValue<never, never, never>;

type State<T> = {
  [P in keyof T]: UnwrapObservable<T[P]>;
};

type Broadcasts<T> = {
  [P in keyof T]: UnwrapProtectedObservable<T[P]>;
};

export interface StateLike {
  [key: string]: ObservableValue<any>;
}

export class Domain<T extends StateLike> {
  protected state: State<T>;
  get broadcasts(): Broadcasts<T> {
    return this.state;
  }

  constructor(state: State<T>) {
    this.state = state;
  }

  dispose() {
    Object.keys(this.state).forEach((key) => {
      this.state[key].dispose();
    });
  }
}

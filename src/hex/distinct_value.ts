import { ObservableValue } from './ObservableValue';

const defaultCompareFunction = (o: unknown, n: unknown) => o === n;

export class DistinctValue<T, TInitial, TError> extends ObservableValue<
  T,
  TInitial,
  TError
> {
  private compareFunction: (oldValue: T | TInitial, newValue: T) => boolean;

  constructor(
    initialValue: T | TInitial,
    equalityOperator: (
      oldValue: T | TInitial,
      newValue: T
    ) => boolean = defaultCompareFunction
  ) {
    super(initialValue);
    this.compareFunction = equalityOperator;
  }

  setValue(value: T, key?: string) {
    if (!this.compareFunction(this._value, value)) {
      super.setValue(value, key);
    }
  }
}

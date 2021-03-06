import { useAsyncError } from './useAsyncError';
import ObservableValue from '../ObservableValue';

/**
 * @deprecated Use "useAsyncError" instead.
 * @param observableValue
 */
export function useError<TError>(observableValue: ObservableValue<any, any, TError>) {
  return useAsyncError<TError>(observableValue);
}

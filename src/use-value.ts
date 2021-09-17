import { useState } from "react";

/**
 * Custom hook that provides, for state, a way to set/get
 * similar to {@link https://api.jquery.com/val/ | `.val()` from `jQuery`}.
 *
 * @param {T | (() => T)} initialValue - initial value or a function that lazyly returns the initial value.
 * @return {(arg?: T | ((value: React.SetStateAction<T>) => T)) => void | T}
 */
function useValue<T>(initialValue: T | (() => T)) {
  const [state, setState] = useState(initialValue);

  /**
   *
   * @param  {T | (() => T)} [args] - If setting a new value, accepts same parameters as `React.SetStateAction<T>`
   * @return {T|void} returns `T` if called with no arguments, `void` otherwise.
   */
  function value(arg?: T | ((value: React.SetStateAction<T>) => T)) {
    if (arg === undefined) {
      return state;
    }

    return setState(arg);
  }

  return value;
}

export default useValue;

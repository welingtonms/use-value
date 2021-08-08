import { useState } from "react";

/**
 * Custom hook that provides, for state, a way to set/get
 * similar to {@link https://api.jquery.com/val/ | `.val()` from `jQuery`}.
 *
 * @param {T | (() => T)} initialValue - initial value or a function that lazyly returns the initial value.
 * @return {() => T | ((value: React.SetStateAction<T>) => void)}
 */
function useValue<T>(initialValue: T) {
  const [state, setState] = useState<T>(initialValue);

  /**
   *
   * @param  {...any} args - If setting a new value, accepts same parameters as `React.SetStateAction<T>`
   * @return {T|void} returns `T` if called with no arguments, `void` otherwise.
   */
  function value(...args) {
    if (args.length === 0) {
      return state;
    }

    return setState(args[0]);
  }

  return value;
}

export default useValue;

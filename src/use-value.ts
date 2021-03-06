import { useState, type SetStateAction } from 'react';

/**
 * Custom hook that provides, for state, a way to set/get
 * similar to {@link https://api.jquery.com/val/ | `.val()` from `jQuery`}.
 *
 * @param {T | (() => T)} initialValue - initial value or a function that lazyly returns the initial value.
 * @return {(arg?: T | ((value: SetStateAction<T>) => T)) => void | T}
 */
function useValue< T >( initialValue: T | ( () => T ) ) {
	const [ state, setState ] = useState( initialValue );

	/**
	 * Sets new value, if any is provided, and returns the current value.
	 * @param  {T | (() => T)} [args] - If setting a new value, accepts same parameters as `SetStateAction<T>`
	 * @return {T|void} returns `T` if called with no arguments, `void` otherwise.
	 */
	function value( arg?: T | ( ( value: SetStateAction< T > ) => T ) ) {
		if ( arg !== undefined ) {
			setState( arg );
		}

		return state;
	}

	return value;
}

export default useValue;

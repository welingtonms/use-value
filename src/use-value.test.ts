// @ts-ignore

import { act, renderHook } from '@testing-library/react-hooks';
import ChanceJS from 'chance';

import useValue from './use-value';

export const generator = new ChanceJS();

describe( 'useValue', () => {
	it( 'initializes correctly with a value', () => {
		const initialValue = generator.name();
		const { result } = renderHook( () => useValue( initialValue ) );

		expect( typeof result.current ).toBe( 'function' );
		expect( result.current() ).toBe( initialValue );
	} );

	it( 'initializes correctly with a function', () => {
		const initialValue = [ generator.name() ];
		const { result } = renderHook( () => useValue( () => initialValue ) );

		expect( typeof result.current ).toBe( 'function' );
		expect( result.current() ).toBe( initialValue );
	} );

	it( 'sets correctly with a value', async () => {
		const value = generator.name();
		const { result } = renderHook( () => useValue( value ) );
		expect( result.current() ).toBe( value );

		const newValue = generator.name();

		act( () => {
			result.current( newValue );
		} );

		expect( result.current() ).toBe( newValue );
	} );

	it( 'sets correctly with a function', () => {
		const value = [ generator.name() ];
		const { result } = renderHook( () => useValue( () => value ) );
		expect( result.current() ).toBe( value );

		const newValue = [ generator.name() ];

		act( () => {
			result.current( newValue );
		} );

		expect( result.current() ).toBe( newValue );
	} );
} );

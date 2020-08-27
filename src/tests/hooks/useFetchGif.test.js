import useFetchGif from '../../hooks/useFetchGif';
import '@testing-library/jest-dom';
import '@testing-library/react-hooks';
import { renderHook } from '@testing-library/react-hooks';

describe('Fetch Test', () => {
    
    test('Test 1 - Enzyme: Fetch should be respond', async() => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGif ( 'Friends' ));
        const { data, loading } = result.current;

        await waitForNextUpdate();

        expect( data ).toEqual( [] );
        expect( loading ).toBeTruthy();

    });

    test('Test 2 - Enzyme: Fetch should be render 10 items', async() => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGif ( 'Friends' ));
        await waitForNextUpdate();

        const { data, loading } = result.current;
       

        expect( data.length ).toBe( 10 );
        expect( loading ).toBeFalsy();

    });

});
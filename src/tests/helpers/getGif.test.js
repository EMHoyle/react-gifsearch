import { getGif } from '../../helpers/getGif';

describe('getGif Fetch Test', () => {
    
    test('Test 1 - Enzyme: getGif should render 10 Gifs', async() => {
        
        const gif = await getGif('HIMYM');

        expect( gif.length ).toBe( 10 );

    });

});
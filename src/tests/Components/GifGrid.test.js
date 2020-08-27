import React from 'react';
import '@testing-library/jest-dom';
import GifGrid from '../../Components/GifGrid';
import { shallow } from 'enzyme';
import useFetchGif from '../../hooks/useFetchGif';
jest.mock('../../hooks/useFetchGif');
 
describe('GifGrid Test', () => {
    const category = 'HIMYM';
    // const wrapper = shallow(<GifGrid category={category}/>);
 
    test('Test 1 - Enzyme: GifGrid should be render correctly', () => {
        
        useFetchGif.mockReturnValue({
            data: [],
            loading: true,
        });

        const wrapper = shallow(<GifGrid category={category}/>);
        expect(wrapper).toMatchSnapshot(); 
    });
 
    test('Test 2 - Enzyme: GifGrid should render elements when loading images with Fetch', () => {
        
        const gifs = [{
            id: 'ABC',
            url: 'https://google.com',
            title: 'ABC Title'
            
        }]
        
        useFetchGif.mockReturnValue({
            data: gifs,
            loading: false,
        });
        
        const wrapper = shallow(<GifGrid category={category}/>);
        expect(wrapper).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe(false);
        expect( wrapper.find('GifGridItems').length).toBe( gifs.length );
 
    });
})
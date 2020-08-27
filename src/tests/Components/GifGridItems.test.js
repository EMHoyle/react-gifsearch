import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import GifGridItems from '../../Components/GifGridItems';

describe('GifGrid Test', () => {

    const title = 'A Title';
    const url = 'https://....';
    const wrapper = shallow( <GifGridItems title={title} url={url} /> )
    
    test('Test 1 - Enzyme: GifGrid should be render correctly', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('Test 2 - Enzyme: PropTypes', () => {
        
        expect(wrapper).toMatchSnapshot();

    });

    test('Test 3 - Enzyme: should have a <p> with title', () => {
        
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe(title);

    });

    test('Test 4 - Enzyme: should have a <img> with src and alt', () => {
        
        const img = wrapper.find('img');
            expect( img.prop('src')).toBe(url);
            expect( img.prop('alt')).toBe(title);

    });

});
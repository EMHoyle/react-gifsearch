import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import GifSearchApp from '../GifSearchApp';



describe('GifSearchApp Test', () => {
    
    test('Test 1 - Enzyme: GifSearchApp should be render correctly ', () => {
        
        const wrapper = shallow( <GifSearchApp /> );

        expect(wrapper).toMatchSnapshot();

    });

    test('Test 2 - Enzyme: GifSearchApp shoukd be render categories list', () => {
        
        const categories = ['Friends', 'Umbrella Academy'];
        const wrapper = shallow( <GifSearchApp defaultCategories= {categories} /> );

        expect(wrapper).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );

    });

});
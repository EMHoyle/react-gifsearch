import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import AddCategory from '../../Components/AddCategory';


describe('AddCategory Test', () => {

    const setCategories = jest.fn();
    let wrapper = shallow ( <AddCategory setCategories={setCategories}/> );

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow ( <AddCategory setCategories={setCategories}/> );
    });
    
    test('Test 1 - Enzyme: AddCategory should be render correctly', () => {
        
        expect( wrapper ).toMatchSnapshot();

    });

    test('Test 2 - Enzyme: AddCategory handleChange simulation', () => {
        
        const input = wrapper.find('input');
        const value = 'Hello World';
        
        input.simulate('change', { target: { value }});

        expect( wrapper.find('p').text().trim() ).toBe( value );

    });

    test('Test 3 - Enzyme: AddCategory should NOT post the information with void submit', () => {
        
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategories ).not.toHaveBeenCalled();

    });

    test('Test 4 - Enzyme: AddCategory should call setCategory and clean the input', () => {
        
        const value = 'hello world';

        wrapper.find('input').simulate('change', { target: { value } });
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledTimes(1);
        expect( wrapper.find('input').prop('value') ).toBe('');

    });

});
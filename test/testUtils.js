import checkPropTypes from 'check-prop-types';

/**
 * Returns node(s) with the given data-test attribute.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrpapper.
 * @param {string} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name
  );
  expect(propError).toBeUndefined();
};

///////////////////////
//for testing the Input component which is connected to the Store:
//generates a fresh Store every time:

import rootReducer from '../src/reducers';
import { createStore } from 'redux';

/**
 * Create a tsting store with imported reducers, middleware and initial state.
 * globals: rootReducer
 * @param {obj} initialState - Initial state for store.
 * @function storeFactory
 * @returns {Store} - Redux store.
 */

export const storeFactory = (initialState) => {
  createStore(rootReducer, initialState);
};

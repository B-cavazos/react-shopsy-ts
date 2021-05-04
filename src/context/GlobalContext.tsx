import React, { createContext, useState, useReducer } from 'react';
import instance from '../api/apiConfig';

// Initialize a default state for our app
const initialState = {
  products: [],
  cart: [],
  product: undefined,
  getProducts: () => {},
  getSingleProduct: () => {},
  RoundDecimal:()=>{},
};

// Create our global reducer
// reducer is a function that allows us to handle and update state
/*
 - reducer will take an initial state
 - will receive an action declaration
 - will look to update our state based on the desired action
 - will return our updated state
 - our reducer takes two parameters. 
    - the first is our initialState so that we can update it accordingly
    - the second param is the action object that gets 
    - passed into dispatch({type:'some_action', payload:'some data'})
*/
const appReducer = (state: any, action: any) => {
  //   debugger;
  switch (action.type) {
    case 'GET_PRODUCTS':
      // when a case matches, the return will update the state for us
      return { ...state, products: action.payload };
    case 'GET_SINGLE_PRODUCT':
      // when case matches, bind the payload to the product property in state
      return { ...state, product: action.payload };
    default:
      return state;
  }
};

// Create Context from react
export const GlobalContext = createContext<InitialStateType>(initialState);

// Create Global provider which will feed state to our components
export const GlobalProvider: React.FC = ({ children }) => {
  // useReducer is a react hook, to access and
  // update our state in our reducer function
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Actions = methods that run tasks for our app
  const getProducts = async () => {
    try {
      let { data } = await instance.get('/products');
      dispatch({ type: 'GET_PRODUCTS', payload: data });
    } catch (e) {
      console.log(e);
    }
  };

  const getSingleProduct = async (productId: number) => {
    try {
      let { data } = await instance.get(`/products/${productId}`);
      console.log(data);
      dispatch({ type: 'GET_SINGLE_PRODUCT', payload: data });
    } catch (e) {
      console.log(e);
    }
  };

  // Functiion to round decimals
  const RoundDecimal = (price:string)=>{
    let num = +price;
    let rounded = num.toFixed(2);
    return rounded;
  }

  return (
    <GlobalContext.Provider
      value={{
        products: state.products,
        cart: state.cart,
        product: state.product,
        getProducts,
        getSingleProduct,
        RoundDecimal,
      }}>
      {children} {/* <AppRouter/> */}
    </GlobalContext.Provider>
  );
};
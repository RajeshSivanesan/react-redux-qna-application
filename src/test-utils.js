// test-utils.jsx
import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { applyMiddleware, configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
// Import your own reducer
import questionReducer from './store/questions'

function render(
  ui,
  {
    preloadedState,
    store = configureStore({ reducer: { questions: questionReducer }, preloadedState }, applyMiddleware([thunk])),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }
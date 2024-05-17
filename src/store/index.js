import { configureStore }  from '@reduxjs/toolkit';
import systemReducer from './features/system'

const store = configureStore({
  reducer:{
    system:systemReducer
  }
})

export default store;
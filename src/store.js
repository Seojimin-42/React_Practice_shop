import { configureStore, createSlice  } from '@reduxjs/toolkit'
import user from './store/userSlice.js'

let stock = createSlice({
    name : 'stock',
    initialState : [10, 11, 12]
})

let cart = createSlice({
    name : 'cart',
    initialState : 
    [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
    ],
    reducers : {
      addCount(state, action) {
        let found = state.find(x => x.id === Number(action.payload.id));
        if (found) {
          found.count += 1;
        } else{
          state.push({ ...action.payload, count:1 });
        }
      }
    }
})

export let { addCount } = cart.actions

export default configureStore({
  reducer: { 
    user : user.reducer,
    stock : stock.reducer,
    cart : cart.reducer
  }
})
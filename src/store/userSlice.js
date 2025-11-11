import { createSlice  } from '@reduxjs/toolkit'

let user = createSlice({
    name : 'user',
    initialState : { name : 'seo', age : 22 },
    reducers : {
      changeName(state){
        // return { name : 'kim', age: 22 }
        state.name = 'kim'
      },
      increase(state, action){
        state.age += action.payload
      },
    }
})

export let { changeName, increase } = user.actions

export default user
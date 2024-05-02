import {createSlice} from "@reduxjs/toolkit"

const userSlice = createSlice({
    name:"users",
    initialState: {
        userDetails:null,
    },
    reducers: {
        saveUserDetails: (state,action) =>{
            const {confirm_password, ...userData} = action.payload;
            state.userDetails = userData;
        }
    }
})

export const{saveUserDetails} = userSlice.actions;
export default userSlice.reducer;
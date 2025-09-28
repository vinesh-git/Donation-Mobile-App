import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    firstName: 'Vinesh',
    LastName: 'Chawan',
    profileImage: 'https://cdn.dribbble.com/users/1577045/screenshots/4914645/media/028d394ffb00cb7a4b2ef9915a384fd9.png?compress=1&resize=400x300&vertical=top'
}

const User = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateFirstName: (state, action) => {
            state.firstName = action.payload;
        },
        resetInitialState: () => {
            return initialState;
        }
    }
})

export const { updateFirstName, resetInitialState } = User.actions;
export default User.reducer;
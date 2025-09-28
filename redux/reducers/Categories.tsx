import { createSlice } from "@reduxjs/toolkit"
import categoriesData from "../../data/categories";

const initialState = {
    categories : categoriesData,
    selectedId : 1
}

const categoriesSlice  = createSlice({
    name : 'categories',
    initialState :initialState,
    reducers : {
        resetCategories : () => { 
            return initialState;
        },
        updateSelectedCategoryId : (state,action)=>{
            state.selectedId = action.payload;
        }
    }
})

export const {resetCategories,updateSelectedCategoryId} = categoriesSlice.actions;
export default categoriesSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import Student from "../Data";

function updateElementById(arr, idToUpdate, updatedData) {
    const indexToUpdate = arr.findIndex((element) => element.id === idToUpdate);
    if (indexToUpdate !== -1) {
      // If the element with the specified id is found
      arr[indexToUpdate] = { ...arr[indexToUpdate], ...updatedData };
    }
  }

export const StudentSlice = createSlice({
    name: "Students",
    initialState: Student,
    reducers: {
        AddStudent: (state, action)=>{
            state.push(action.payload)
        },
        EditStudent: (state, action)=>{
            // state[action.payload.id] = action.payload
            updateElementById(state, action.payload.id, action.payload)
        },
        RemoveStudent: (state, action)=>{
            const indexToRemove = state.findIndex((element) => element.id === action.payload.id);
            state.splice(indexToRemove, 1)
        }
    }
})

export default StudentSlice.reducer
export const {AddStudent, EditStudent, RemoveStudent} = StudentSlice.actions
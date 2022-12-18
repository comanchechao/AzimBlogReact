// import { createSlice } from "@reduxjs/toolkit";
// import { supabase } from "../../supabaseClient";
// import { useSelector } from "react-redux";

// // const genders = useSelector((state) => state.selectedFilters.gender);

// export const productManagement = createSlice({
//   name: "product management",
//   initialState: {
//     products: [],
//     genders : useSelector((state) => state.)
//   },
//   reducers: {
//     getProducts: async (state, action) => {
//       try {
//         const { data, error } = await supabase
//           .from("Products")
//           .select()
//           .in("Gender", genders);
//         if (error) throw error;
//         console.log(data);
//       } catch (error) {
//         alert(error.message);
//       }
//     },
//   },
// });

// export const productManagementActions = productManagement.actions;
// export const productManagementReducer = productManagement.reducer;

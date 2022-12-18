import { createSlice } from "@reduxjs/toolkit";

export const selectedFilters = createSlice({
  name: "selectedFilters",
  initialState: {
    brand: [""],
    rim: [""],
    shape: [""],
    material: [""],
    gender: [],
    maxPrice: 99999,
    minPrice: 0,
    size: [""],
  },
  reducers: {
    getProducts: async (state, action) => {
      try {
        const { data, error } = await supabase
          .from("Products")
          .select()
          .in("Gender", state.gender);
        if (error) throw error;
      } catch (error) {
        alert(error.message);
      }
    },
    setBrand: (state, action) => {
      if (state.brand.length > 11) {
        state.brand = [];
        if (state.brand.indexOf(action.payload) === -1) {
          state.brand.push(action.payload);
        } else {
          state.brand.splice(state.brand.indexOf(action.payload), 1);
        }
      } else {
        if (state.brand.indexOf(action.payload) === -1) {
          state.brand.push(action.payload);
        } else {
          state.brand.splice(state.brand.indexOf(action.payload), 1);
        }
      }
    },
    getBrands: (state, action) => {
      state.brand = action.payload;
    },
    removeBrand: (state, action) => {
      state.brand.splice(state.brand.indexOf(action.payload), 1);
    },

    setRim: (state, action) => {
      if (state.rim.length > 2) {
        state.rim = [];
        if (state.rim.indexOf(action.payload) === -1) {
          state.rim.push(action.payload);
        } else {
          state.rim.splice(state.rim.indexOf(action.payload), 1);
        }
      } else {
        if (state.rim.indexOf(action.payload) === -1) {
          state.rim.push(action.payload);
        } else {
          state.rim.splice(state.rim.indexOf(action.payload), 1);
        }
      }
    },
    getRims: (state, action) => {
      state.rim = action.payload;
    },
    removeRim: (state, action) => {
      state.rim.splice(state.rim.indexOf(action.payload), 1);
    },
    setShape: (state, action) => {
      if (state.shape.length > 7) {
        state.shape = [];
        if (state.shape.indexOf(action.payload) === -1) {
          state.shape.push(action.payload);
        } else {
          state.shape.splice(state.shape.indexOf(action.payload), 1);
        }
      } else {
        if (state.shape.indexOf(action.payload) === -1) {
          state.shape.push(action.payload);
        } else {
          state.shape.splice(state.shape.indexOf(action.payload), 1);
        }
      }
    },
    getShapes: (state, action) => {
      state.shape = action.payload;
    },
    removeShape: (state, action) => {
      state.shape.splice(state.shape.indexOf(action.payload), 1);
    },
    setMaterial: (state, action) => {
      if (state.material.length > 8) {
        state.material = [];
        if (state.shape.indexOf(action.payload) === -1) {
          state.material.push(action.payload);
        } else {
          state.material.splice(state.material.indexOf(action.payload), 1);
        }
      } else {
        if (state.shape.indexOf(action.payload) === -1) {
          state.material.push(action.payload);
        } else {
          state.material.splice(state.material.indexOf(action.payload), 1);
        }
      }
    },
    getMaterials: (state, action) => {
      state.material = action.payload;
    },
    removeMaterial: (state, action) => {
      state.material.splice(state.material.indexOf(action.payload), 1);
    },
    setGender: (state, action) => {
      if (state.gender.length > 3) {
        state.gender = [];
        state.gender.push(action.payload);
      } else {
        state.gender.push(action.payload);
      }
    },
    getGenders: (state, action) => {
      state.gender = action.payload;
    },
    removeGender: (state, action) => {
      state.gender.splice(state.gender.indexOf(action.payload), 1);
    },
    setMinPrice: (state, action) => {
      state.minPrice = action.payload;
    },
    setMaxPrice: (state, action) => {
      state.maxPrice = action.payload;
    },
    clearPrices: (state) => {
      state.maxPrice = 99999;
      state.minPrice = 0;
    },
    removeSize: (state, action) => {
      state.size.splice(state.size.indexOf(action.payload), 1);
    },
    setSize: (state, action) => {
      if (state.size.length > 2) {
        state.size = [];
        if (state.size.indexOf(action.payload) === -1) {
          state.size.push(action.payload);
        } else {
          state.size.splice(state.size.indexOf(action.payload), 1);
        }
      } else {
        if (state.size.indexOf(action.payload) === -1) {
          state.size.push(action.payload);
        } else {
          state.size.splice(state.size.indexOf(action.payload), 1);
        }
      }
    },
    getSizes: (state, action) => {
      state.size = action.payload;
    },
  },
});

export const selectedFiltersActions = selectedFilters.actions;
export const selectedFiltersReducer = selectedFilters.reducer;

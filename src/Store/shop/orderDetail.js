import { createSlice } from "@reduxjs/toolkit";

export const size = createSlice({
  name: "sizeSection",
  initialState: {
    size: "size",
  },
  reducers: {
    setSize: (state, action) => {
      state.size = action.payload;
    },
  },
});

export const color = createSlice({
  name: "colorSection",
  initialState: {
    color: "color",
  },
  reducers: {
    setColor: (state, action) => {
      state.color = action.payload;
    },
  },
});

export const glassType = createSlice({
  name: "glassTypeSection",
  initialState: {
    type: "type",
  },
  reducers: {
    setType: (state, action) => {
      state.type = action.payload;
    },
  },
});

export const lensDetail = createSlice({
  name: "lensDetail",
  initialState: {
    sphere: {
      OD: "right",
      OS: "left",
    },
    cylinder: {
      OD: "right",
      OS: "left",
    },
    axis: {
      OD: "right",
      OS: "left",
    },
  },
  reducers: {
    setSphereOD: (state, action) => {
      state.sphere.OD = action.payload;
    },
    setSphereOS: (state, action) => {
      state.sphere.OS = action.payload;
    },
    setCylinderOD: (state, action) => {
      state.cylinder.OD = action.payload;
    },
    setCylinderOS: (state, action) => {
      state.cylinder.OS = action.payload;
    },
    setAxisOD: (state, action) => {
      state.axis.OD = action.payload;
    },
    setAxisOS: (state, action) => {
      state.axis.OS = action.payload;
    },
  },
});

export const lensType = createSlice({
  name: "lensType",
  initialState: {
    lens: "lens type",
  },
  reducers: {
    setLensType: (state, action) => {
      state.lens = action.payload;
    },
  },
});

export const lensWidth = createSlice({
  name: "lensWidth",
  initialState: {
    width: "lens width",
  },
  reducers: {
    setLensWidth: (state, action) => {
      state.width = action.payload;
    },
  },
});

export const lensWidthActions = lensWidth.actions;
export const lensWidthReducer = lensWidth.reducer;
export const lensTypeActions = lensType.actions;
export const lensTypeReducer = lensType.reducer;
export const lensActions = lensDetail.actions;
export const lensReducer = lensDetail.reducer;
export const glassTypeActions = glassType.actions;
export const glassTypeReducer = glassType.reducer;
export const colorActions = color.actions;
export const colorReducer = color.reducer;
export const sizeActions = size.actions;
export const sizeReducer = size.reducer;

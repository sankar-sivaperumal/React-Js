import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface ImageItem {
  name: string;
  image: string;
  descr: string;
}

interface GalleryState {
  defaultImages: ImageItem[];
  userImages: ImageItem[];
}

const loadFromLocal = () => {
  const saved = localStorage.getItem("userGalleryData");
  return saved ? JSON.parse(saved) : [];
};

const initialState: GalleryState = {
  defaultImages: [],     
  userImages: loadFromLocal(),
};

const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    setDefaultImages: (state, action: PayloadAction<ImageItem[]>) => {
      state.defaultImages = action.payload;
    },

    addImage: (state, action: PayloadAction<ImageItem>) => {
      state.userImages.push(action.payload);
      localStorage.setItem("userGalleryData", JSON.stringify(state.userImages));
    },

    editImage: (state, action: PayloadAction<{ index: number; updated: ImageItem }>) => {
      state.userImages[action.payload.index] = action.payload.updated;
      localStorage.setItem("userGalleryData", JSON.stringify(state.userImages));
    },

    deleteImage: (state, action: PayloadAction<number>) => {
      state.userImages.splice(action.payload, 1);
      localStorage.setItem("userGalleryData", JSON.stringify(state.userImages));
    },
  },
});

export const { addImage, editImage, deleteImage, setDefaultImages } = gallerySlice.actions;

export default gallerySlice.reducer;


import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface Image {
  [x: string]: string;
  id: string;
  name: string;
  description: string;
  fileName: string;
}

interface ImageState {
  images: Image[];
}

const loadImagesFromStorage = (): Image[] => {
  try {
    const savedImages = localStorage.getItem('images');
    return savedImages ? JSON.parse(savedImages) : [];
  } catch (error) {
    console.error('Failed to load images from localStorage:', error);
    return [];
  }
};

const saveImagesToStorage = (images: Image[]) => {
  try {
    const dataString = JSON.stringify(images);
    const dataSize = new Blob([dataString]).size;
    console.log('Data Size:', dataSize); 

    if (dataSize < 5000000) { 
      localStorage.setItem('images', dataString);
    } else {
      console.warn('Data size exceeds the localStorage limit of ~5MB');
      trimStoredData();
    }
  } catch (error) {
    if (error instanceof DOMException && error.code === 22) {
      console.error('QuotaExceededError: localStorage is full. Trimming data...');
      trimStoredData();
    } else {
      console.error('Failed to save images to localStorage:', error);
    }
  }
};

const trimStoredData = () => {
  try {
    const savedImages = localStorage.getItem('images');
    if (savedImages) {
      const images: Image[] = JSON.parse(savedImages);
      images.shift();
      localStorage.setItem('images', JSON.stringify(images));
      console.log('Trimmed old image from localStorage');
    }
  } catch (error) {
    console.error('Failed to trim stored data:', error);
  }
};

const initialState: ImageState = {
  images: loadImagesFromStorage(),
};

const imageSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    addImage: (state, action: PayloadAction<Image>) => {
      state.images.push(action.payload);
    },

    deleteImage: (state, action: PayloadAction<string>) => {
      state.images = state.images.filter((image) => image.id !== action.payload);
      saveImagesToStorage(state.images);
    },

    updateImage: (state, action: PayloadAction<Image>) => {
      const index = state.images.findIndex((image) => image.id === action.payload.id);
      if (index !== -1) {
        state.images[index] = action.payload;
        saveImagesToStorage(state.images);
      }
    },

    editImage: (state, action: PayloadAction<Image>) => {
      const index = state.images.findIndex((image) => image.id === action.payload.id);
      if (index !== -1) {
        state.images[index] = action.payload;
        saveImagesToStorage(state.images);
      }
    },
  },
});

export const { addImage, deleteImage, updateImage, editImage } = imageSlice.actions;

export default imageSlice.reducer;

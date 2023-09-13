/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { catalogProducts } from '../../api/catalog';
import { ProductState } from './productsType';
import preparProducts from './helpers/prepareProducts';
import { getCategoryById } from '../../api/getProductsByCategory';
import { getCategories } from '../../api/getCategories';

const initialState: ProductState = {
  productsData: [],
  cardData: [],
  categories: [],
  catalogCurrentPage: 1,
};

export const fetchAllCategories = createAsyncThunk(
  'products/fetchAllCategories',
  async (_payload, { dispatch }) => {
    const data = await getCategories();
    dispatch(setCategoriesData(data));
  }
);

export const fetchCategory = createAsyncThunk(
  'products/fetchCategory',
  async (categoryId: string, { dispatch }: any) => {
    const data = await getCategoryById(categoryId);
    const changesData = data.map((element: { masterVariant: any }) => ({
      ...element,
      masterData: { ...element.masterVariant },
    }));
    dispatch(setProductsData(changesData));
  }
);

export const fetchCatalog = createAsyncThunk(
  'products/fetchCatalog',
  async (catalogCurrentPage: number, { dispatch }) => {
    const data = await catalogProducts(catalogCurrentPage);
    dispatch(setProductsData(data));
  }
);

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    resetProducts: (state) => {
      state.catalogCurrentPage = 1;
      state.productsData = [];
      state.categories = [];
    },
    setProductsData: (state, action) => {
      state.productsData = [...action.payload];
      state.cardData = preparProducts([...action.payload]);
    },
    setCategoriesData: (state, action) => {
      state.categories = [...action.payload];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCatalog.fulfilled, (state) => {
      state.catalogCurrentPage += 1;
    });
  },
});

export const { resetProducts, setProductsData, setCategoriesData } =
  productsSlice.actions;

export default productsSlice.reducer;

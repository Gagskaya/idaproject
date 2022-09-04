import axios from "axios";

import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  FETCH_ADD_PRODUCT,
  FETCH_DELETE_PRODUCT,
  FETCH_PRODUCTS,
  SET_PRODUCTS,
} from "@/store/types/products-mutations";
import { API_URL } from "@/constants/api";

export const actions = {
  async [FETCH_PRODUCTS]({ commit }) {
    try {
      const { data } = await axios.get(`${API_URL}/products`);
      commit(SET_PRODUCTS, data);
    } catch (e) {
      console.log(e);
    }
  },
  async [FETCH_ADD_PRODUCT]({ commit, dispatch }, product) {
    try {
      await axios.post(`${API_URL}/products`, product);
      commit(ADD_PRODUCT, product);
      dispatch(FETCH_PRODUCTS);
    } catch (e) {
      console.log(e);
    }
  },
  async [FETCH_DELETE_PRODUCT]({ commit }, id) {
    try {
      await axios.delete(`${API_URL}/products/${id}`);
      commit(DELETE_PRODUCT, id);
    } catch (e) {
      console.log(e);
    }
  },
};

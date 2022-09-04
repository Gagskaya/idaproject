import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  SET_PRODUCTS,
  SORT_PRODUCTS,
} from "@/store/types/products-mutations";

import orderBy from "lodash/orderBy";

export const mutations = {
  [SET_PRODUCTS](state, payload) {
    state.items = payload;
  },
  [ADD_PRODUCT](state, payload) {
    state.items = [...state.items, payload];
  },
  [DELETE_PRODUCT](state, id) {
    state.items = state.items.filter((item) => item.id !== id);
  },
  [SORT_PRODUCTS](state, payload) {
    state.items = orderBy(state.items, payload.value, payload.sortMethod);
  },
};

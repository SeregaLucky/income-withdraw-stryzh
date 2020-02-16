import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
/* import - reducers */
import balanceReducer from "./balance/balanceReducer";
import categoriesReducer from "./categories/categoriesReducer";

const balancePersistConfig = {
  key: "balance",
  storage,
  blacklist: ["filterByDate"]
};

const categoriesPersistConfig = {
  key: "categories",
  storage
};

export default combineReducers({
  balance: persistReducer(balancePersistConfig, balanceReducer),
  categories: persistReducer(categoriesPersistConfig, categoriesReducer)
});

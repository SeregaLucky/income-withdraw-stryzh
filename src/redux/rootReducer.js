import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
/* import - reducers */
import balanceReducer from "./balance/balanceReducer";
import categoriesReducer from "./categories/categoriesReducer";

const balancePersistConfig = {
  key: "balance",
  storage
  // whitelist: ["incomeMoney", "withdrawMoney"]
};
const categoriesPersistConfig = {
  key: "categories",
  storage
  // whitelist: ["incomeCategory", "withdrawCategory"]
};

// export default combineReducers({
//   balance: balanceReducer,
//   categories: categoriesReducer
// });
export default combineReducers({
  balance: persistReducer(balancePersistConfig, balanceReducer),
  categories: persistReducer(categoriesPersistConfig, categoriesReducer)
});

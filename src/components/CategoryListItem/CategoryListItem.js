import React from "react";
import styles from "./CategoryListItem.module.css";

// ["Спорт", "Девушек", "Развличения"]

// const Gender = {
//   MALE: 'male',
//   FEMALE: 'female',
// };

const CategoryListItem = ({ name, checked = false, onChange }) => (
  <input type="checkbox" name={name} checked={checked} onChange={onChange} />
);

// const CategoryListItem = ({ item }) => {
//   const handleChange = () => {};

//   return (
//     <label>
//       <input
//         type="radio"
//         checked={gender === Gender.FEMALE}
//         name="gender"
//         value={Gender.FEMALE}
//         onChange={handleChange}
//       />
//     </label>
//   );
// };

export default CategoryListItem;

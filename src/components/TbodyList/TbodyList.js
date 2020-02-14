import React from "react";
// import styles from "./TbodyList.module.css";
import TbodyListItem from "../TbodyListItem/TbodyListItem";

const TbodyList = ({ list, type }) => {
  return (
    <tbody>
      {list.map(item => (
        <TbodyListItem key={item.id} id={item.id} type={type} />
      ))}
    </tbody>
  );
};

export default TbodyList;

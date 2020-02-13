import React from "react";
import { connect } from "react-redux";
// import styles from "./TbodyList.module.css";
import balanceSelectors from "../../redux/balance/balanceSelectors";
import TbodyListItem from "../TbodyListItem/TbodyListItem";

const TbodyList = ({ list, changeItem, deleteItem }) => {
  return (
    <tbody>
      {list.map(item => (
        // <TbodyListItem key={item.id} id={item.id} />
        <TbodyListItem
          key={item.id}
          item={item}
          changeItem={changeItem}
          deleteItem={deleteItem}
        />
      ))}
    </tbody>
  );
};

// const mapStateToProps = state => ({
//   list: balanceSelectors.getIncomeMoney(state)
// });

export default TbodyList;
// export default connect(mapStateToProps)(TbodyList);

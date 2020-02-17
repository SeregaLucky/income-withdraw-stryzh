import React from 'react';
import T from 'prop-types';
// import styles from "./TbodyList.module.css";
import TbodyListItem from '../TbodyListItem/TbodyListItem';

const TbodyList = ({ list, type }) => {
  return (
    <tbody>
      {list.map(item => (
        <TbodyListItem key={item.id} id={item.id} type={type} />
      ))}
    </tbody>
  );
};

TbodyList.propTypes = {
  list: T.arrayOf(
    T.shape({
      id: T.string.isRequired,
      amount: T.number.isRequired,
      direction: T.string.isRequired,
      type: T.string.isRequired,
    }),
  ).isRequired,
  type: T.string.isRequired,
};

export default TbodyList;

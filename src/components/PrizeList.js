import React from 'react';

import styles from './PrizeList.module.css';

const PrizeList = ({ result }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>일치 갯수</th>
          <th>당첨금</th>
          <th>당첨 갯수</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>6개</td>
          <td>2,000,000,000</td>
          <td>{result[0]}개</td>
        </tr>
        <tr>
          <td>5개 + 보너스볼</td>
          <td>30,000,000</td>
          <td>{result[1]}개</td>
        </tr>
        <tr>
          <td>5개</td>
          <td>1,500,000</td>
          <td>{result[2]}개</td>
        </tr>
        <tr>
          <td>4개</td>
          <td>30,000,000</td>
          <td>{result[3]}개</td>
        </tr>
        <tr>
          <td>3개</td>
          <td>5,000</td>
          <td>{result[4]}개</td>
        </tr>
      </tbody>
    </table>
  );
};

export default PrizeList;

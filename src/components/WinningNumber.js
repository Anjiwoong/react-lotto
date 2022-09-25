import React from 'react';

import styles from './WinningNumber.module.css';

const WinningNumber = () => {
  const lottoNumberArr = new Array(45)
    .fill()
    .map((_, i) => <li key={i}>{i + 1}</li>);

  return (
    <div className={styles['winning-number']}>
      <h2>당첨번호 입력하기</h2>
      <p>당첨 번호 6개를 선택하고, 보너스 번호를 입력해주세요</p>
      <ul>{lottoNumberArr}</ul>
      <p>보너스 번호</p>
      <input type="text" maxLength="2" />
      <button>결과 확인하기</button>
    </div>
  );
};

export default WinningNumber;

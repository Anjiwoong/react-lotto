import React, { useState } from 'react';

import styles from './PurchasedLotto.module.css';

const PurchasedLotto = () => {
  const [showNumber, setShowNumber] = useState(false);

  const showNumberHandler = () => {
    setShowNumber(prev => !prev);
  };

  const isActive = showNumber ? styles.active : '';

  return (
    <>
      <div className={styles['purchased-title']}>
        <p>총 1개를 구매하였습니다.</p>
        <div>
          <span>번호보기</span>
          <button
            className={`${styles.toggle} ${isActive}`}
            onClick={showNumberHandler}
          >
            toggle button
          </button>
        </div>
      </div>
      <ul className={`${styles['purchased-numbers']} ${isActive}`}>
        <li>
          <span>🎟️</span>
          {showNumber && '10 30 10 20 20 20'}
        </li>
        <li>
          <span>🎟️</span>
          {showNumber && '10 30 10 20 20 20'}
        </li>
      </ul>
    </>
  );
};

export default PurchasedLotto;

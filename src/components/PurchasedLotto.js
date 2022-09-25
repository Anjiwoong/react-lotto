import React, { useContext, useState } from 'react';

import styles from './PurchasedLotto.module.css';
import LottoContext from './store/lotto-context';

const PurchasedLotto = () => {
  const [showNumber, setShowNumber] = useState(false);

  const ctx = useContext(LottoContext);

  const showNumberHandler = () => setShowNumber(prev => !prev);

  const isActive = showNumber ? styles.active : '';

  return (
    <>
      <div className={styles['purchased-title']}>
        <p>총 {ctx.lottoCount}개를 구매하였습니다.</p>
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
        {ctx.lottos.lottoNumbers.map(lotto => (
          <li key={lotto.id}>
            <span>🎟️</span>
            {showNumber && lotto.number.join(' ')}
          </li>
        ))}
      </ul>
    </>
  );
};

export default PurchasedLotto;

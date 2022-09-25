import React from 'react';

import styles from './LottoInfo.module.css';
import PurchasedLotto from './PurchasedLotto';
import WinningNumber from './WinningNumber';

const LottoInfo = () => {
  return (
    <div className={styles['lotto-info']}>
      <PurchasedLotto />
      <WinningNumber />
    </div>
  );
};

export default LottoInfo;

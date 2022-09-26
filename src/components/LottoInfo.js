import React, { useState } from 'react';

import styles from './LottoInfo.module.css';
import PurchasedLotto from './PurchasedLotto';
import Modal from './UI/Modal';
import WinningNumber from './WinningNumber';

const LottoInfo = props => {
  const [showResult, setShowResult] = useState(false);

  const showResultHandler = state => {
    setShowResult(state);
  };

  return (
    <>
      {showResult && (
        <Modal onClose={showResultHandler} reset={props.onShowLottoInfo} />
      )}
      <div className={styles['lotto-info']}>
        <PurchasedLotto />
        <WinningNumber onShow={showResultHandler} />
      </div>
    </>
  );
};

export default LottoInfo;

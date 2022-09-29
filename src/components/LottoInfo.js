import React, { useState, useContext } from 'react';

import styles from './LottoInfo.module.css';
import PurchasedLotto from './PurchasedLotto';
import Modal from './UI/Modal';
import WinningNumber from './WinningNumber';
import PrizeList from './PrizeList';
import LottoContext from './store/lotto-context';

const LottoInfo = props => {
  const [showResult, setShowResult] = useState(false);
  const ctx = useContext(LottoContext);

  const onShowResult = () => setShowResult(true);
  const onHideResult = () => setShowResult(false);

  let result = [0, 0, 0, 0, 0];

  const { lottoNumbers, selectedNumbers, bonusNumber } = ctx.lottos;

  lottoNumbers.forEach(({ number }) => {
    let count = 0;
    let bonus = 0;

    number.forEach(num => {
      if (selectedNumbers.includes(num)) {
        count += 1;
      }
    });

    if (number.includes(bonusNumber)) bonus += 1;

    switch (count) {
      case 6:
        result[0] += 1;
        break;
      case 5:
        if (bonus === 1) result[1] += 1;
        else result[2] += 1;
        break;
      case 4:
        result[3] += 1;
        break;
      case 3:
        result[4] += 1;
        break;
      default:
        break;
    }
  });

  const resetLotto = () => ctx.resetLotto();

  return (
    <>
      {showResult && (
        <Modal onClose={onHideResult} reset={props.onShowLottoInfo}>
          <h1>당첨 통계</h1>
          <PrizeList result={result} />
          <button className={styles.replay} onClick={resetLotto}>
            다시 시작하기
          </button>
          <button onClick={onHideResult} className={styles.close}>
            x
          </button>
        </Modal>
      )}
      <div className={styles['lotto-info']}>
        <PurchasedLotto />
        <WinningNumber onShow={onShowResult} />
      </div>
    </>
  );
};

export default LottoInfo;

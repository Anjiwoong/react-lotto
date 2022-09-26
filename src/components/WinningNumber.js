import React, { useContext, useRef } from 'react';
import LottoContext from './store/lotto-context';

import styles from './WinningNumber.module.css';
import WinningNumberItem from './WinningNumberItem';

const WinningNumber = props => {
  const inputRef = useRef();
  const ctx = useContext(LottoContext);

  const lottoNumberArr = new Array(45)
    .fill()
    .map((_, i) => <WinningNumberItem key={i} item={i} />);

  const confirmResultHandler = e => {
    e.preventDefault();

    ctx.addBonusNumber(+inputRef.current.value);

    if (ctx.lottos.selectedNumbers.length < 6) {
      alert('6개의 번호를 선택해주세요');
      return;
    } else if (inputRef.current.value === '') return;
    else props.onShow(true);
  };

  return (
    <form className={styles['winning-number']} onSubmit={confirmResultHandler}>
      <h2>당첨번호 입력하기</h2>
      <p>당첨 번호 6개를 선택하고, 보너스 번호를 입력해주세요</p>
      <ul>{lottoNumberArr}</ul>
      <p>보너스 번호</p>
      <input ref={inputRef} type="number" min="1" max="45" required />
      <button>결과 확인하기</button>
    </form>
  );
};

export default WinningNumber;

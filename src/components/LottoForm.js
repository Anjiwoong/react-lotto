import React, { useState, useContext, useRef } from 'react';

import styles from './LottoForm.module.css';
import LottoContext from './store/lotto-context';

const LottoForm = props => {
  const [isSubmit, setIsSubmit] = useState(false);
  const inputRef = useRef();

  const ctx = useContext(LottoContext);

  const setCountHandler = e => ctx.setCount(e.target.value);

  if (ctx.reset) inputRef.current.value = '';

  const createLottos = () => {
    for (let i = 0; i < ctx.lottoCount; i++) {
      let randomNumberArr = [];
      for (let i = 0; i < 6; i++) {
        const randomNumber = Math.floor(Math.random() * 45 + 1);
        if (randomNumberArr.indexOf(randomNumber) === -1) {
          randomNumberArr.push(randomNumber);
        } else {
          i--;
        }
      }

      ctx.addLotto({
        id: Math.random().toString(),
        number: randomNumberArr,
      });
    }
  };

  const submitHandler = e => {
    e.preventDefault();

    ctx.setReset(false);
    setIsSubmit(true);
    props.onShowLottoInfo(true);
    createLottos();
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <label>구입할 금액을 입력해주세요.</label>
      <input
        ref={inputRef}
        type="number"
        min="1000"
        step="1000"
        max="100000"
        placeholder="1,000원 단위로 입력해주세요."
        required
        disabled={isSubmit && !ctx.reset}
        onChange={setCountHandler}
        // value={inputValue}
      />
      <button disabled={isSubmit && !ctx.reset}>확인</button>
    </form>
  );
};

export default LottoForm;

import React, { useState, useContext } from 'react';
import LottoContext from './store/lotto-context';

import styles from './WinningNumberItem.module.css';

const WinningNumberItem = props => {
  const [toggle, setToggle] = useState(false);

  const ctx = useContext(LottoContext);

  const selectNumberHandler = e => {
    ctx.selectedLotto(+e.target.textContent);

    if (
      ctx.lottos.selectedNumbers.length === 6 &&
      ctx.lottos.selectedNumbers.includes(+e.target.textContent)
    )
      setToggle(prev => !prev);
    else if (
      ctx.lottos.selectedNumbers.length === 6 &&
      !ctx.lottos.selectedNumbers.includes(+e.target.textContent)
    )
      return;
    else setToggle(prev => !prev);
  };

  return (
    <li
      onClick={selectNumberHandler}
      className={`${styles['winning-number']} ${toggle ? styles.selected : ''}`}
    >
      {props.item + 1}
    </li>
  );
};

export default WinningNumberItem;

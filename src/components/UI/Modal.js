import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import LottoContext from '../store/lotto-context';

import styles from './Modal.module.css';

const Backdrop = props => {
  const closeHandler = () => props.onClose(false);

  return <div className={styles.backdrop} onClick={closeHandler} />;
};

const ModalOverlay = props => {
  const ctx = useContext(LottoContext);

  let result = [0, 0, 0, 0, 0];
  ctx.lottos.lottoNumbers.forEach(({ number }) => {
    let count = 0;
    let bonus = 0;

    number.forEach(num => {
      if (ctx.lottos.selectedNumbers.includes(num)) {
        count += 1;
      }
    });

    if (number.includes(ctx.lottos.bonusNumber)) bonus += 1;

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
  console.log(result);

  const resetLotto = () => {
    // ctx.lottos.lottoNumbers = [];
    // ctx.lottos.selectedNumbers = [];
    // ctx.lottos.bonusNumber = 0;
    result = [0, 0, 0, 0, 0];
    props.reset();
    ctx.resetLotto();

    // closeHandler();
  };

  return (
    <>
      <div className={styles.modal}>
        <h1>당첨 통계</h1>
        <table>
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
        <button className={styles.replay} onClick={resetLotto}>
          다시 시작하기
        </button>
        <button className={styles.close}>x</button>
      </div>
      ;
    </>
  );
};

const Modal = props => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onClose={props.onClose} reset={props.reset} />,
        document.getElementById('overlay-root')
      )}
    </>
  );
};

export default Modal;

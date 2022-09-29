import { useReducer, useState } from 'react';
import LottoContext from './lotto-context';

const defaultLottoState = {
  lottoNumbers: [],
  selectedNumbers: [],
  bonusNumber: 0,
};

const lottoReducer = (state, action) => {
  if (action.type === 'ADD') {
    state.lottoNumbers.push(action.item);
    return {
      lottoNumbers: state.lottoNumbers,
      selectedNumbers: state.selectedNumbers,
      bonusNumber: state.bonusNumber,
    };
  }

  if (action.type === 'SELECT') {
    if (state.selectedNumbers.includes(action.item)) {
      const existingCartItemIdex = state.selectedNumbers.indexOf(action.item);
      state.selectedNumbers.splice(existingCartItemIdex, 1);
    } else if (state.selectedNumbers.length >= 6) {
      alert('이미 6개의 숫자를 선택하였습니다.');
    } else {
      state.selectedNumbers.push(action.item);
    }

    return {
      lottoNumbers: state.lottoNumbers,
      selectedNumbers: state.selectedNumbers,
      bonusNumber: state.bonusNumber,
    };
  }

  if (action.type === 'BONUS') {
    state.bonusNumber = action.item;

    return {
      lottoNumbers: state.lottoNumbers,
      selectedNumbers: state.selectedNumbers,
      bonusNumber: state.bonusNumber,
    };
  }

  if (action.type === 'RESET') {
    return {
      lottoNumbers: [],
      selectedNumbers: [],
      bonusNumber: 0,
    };
  }

  return defaultLottoState;
};

const LottoProvider = props => {
  const [reset, setReset] = useState(false);
  const [lottoCount, setLottoCount] = useState(0);

  const [lottos, dispatchLottos] = useReducer(lottoReducer, defaultLottoState);

  const setCount = value => setLottoCount(value / 1000);

  const addLotto = arr => dispatchLottos({ type: 'ADD', item: arr });

  const selectedLotto = num => dispatchLottos({ type: 'SELECT', item: num });

  const addBonusNumber = num => dispatchLottos({ type: 'BONUS', item: num });

  const resetLotto = () => {
    setReset(true);
    dispatchLottos({ type: 'RESET' });
  };

  return (
    <LottoContext.Provider
      value={{
        lottos: lottos,
        lottoCount: lottoCount,
        reset: reset,
        setCount: setCount,
        addLotto: addLotto,
        setReset: setReset,
        selectedLotto: selectedLotto,
        addBonusNumber: addBonusNumber,
        resetLotto: resetLotto,
      }}
    >
      {props.children}
    </LottoContext.Provider>
  );
};

export default LottoProvider;

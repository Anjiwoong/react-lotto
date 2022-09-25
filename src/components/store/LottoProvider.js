import { useReducer, useState } from 'react';
import LottoContext from './lotto-context';

const defaultLottoState = {
  lottoNumbers: [],
};

const lottoReducer = (state, action) => {
  if (action.type === 'ADD') {
    state.lottoNumbers.push(action.item);
    return {
      lottoNumbers: state.lottoNumbers,
    };
  }

  return defaultLottoState;
};

const LottoProvider = props => {
  const [lottoCount, setLottoCount] = useState(0);
  const [lottos, dispatchLottos] = useReducer(lottoReducer, defaultLottoState);

  const setCount = value => setLottoCount(value / 1000);

  const addLotto = arr => dispatchLottos({ type: 'ADD', item: arr });

  return (
    <LottoContext.Provider
      value={{
        lottos: lottos,
        lottoCount: lottoCount,
        setCount: setCount,
        addLotto: addLotto,
      }}
    >
      {props.children}
    </LottoContext.Provider>
  );
};

export default LottoProvider;

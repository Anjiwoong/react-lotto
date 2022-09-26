import React from 'react';

const LottoContext = React.createContext({
  lottos: [],
  lottoCount: 0,
  setCount: state => {},
  addLotto: state => {},
  selectedLotto: state => {},
  addBonusNumber: state => {},
});

export default LottoContext;

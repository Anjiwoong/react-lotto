import React from 'react';

const LottoContext = React.createContext({
  lottos: [],
  lottoCount: 0,
  setCount: state => {},
  addLotto: state => {},
});

export default LottoContext;

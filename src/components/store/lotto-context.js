import React, { useState } from 'react';

const LottoContext = React.createContext({
  lottos: [],
  setCount: 0,
  createLottos: () => {},
});

export const LottoContextProvider = props => {
  const [lottoCount, setLottoCount] = useState(0);
  const [lottos, setLottos] = useState([]);

  const setCount = value => setLottoCount(value / 1000);

  const createLottos = () => {
    // const lottoArray = new Array(lottoCount).fill();

    const randomNumberArr = [];
    for (let i = 0; i < lottoCount; i++) {
      for (let i = 0; i < 6; i++) {
        const randomNumber = Math.floor(Math.random() * 45 + 1);
        if (randomNumberArr.indexOf(randomNumber) === -1) {
          randomNumberArr.push(randomNumber);
        } else {
          i--;
        }
      }
      setLottos([123]);
      // [[1,2,3,4,5,6]]
    }
    console.log(lottos);

    // lottoArray.map(_ => {
    //   const randomNumberArr = [];
    //   for (let i = 0; i < 6; i++) {
    //     const randomNumber = Math.floor(Math.random() * 45 + 1);
    //     if (randomNumberArr.indexOf(randomNumber) === -1)
    //       randomNumberArr.push(randomNumber);
    //     else i--;
    //   }

    //   setLottos(prev => [...prev, randomNumberArr]);
    //   return lottos
    // });
    // return newArr;
  };

  return (
    <LottoContext.Provider
      value={{
        setCount: setCount,
        createLottos: createLottos,
        lottos: lottos,
      }}
    >
      {props.children}
    </LottoContext.Provider>
  );
};

export default LottoContext;

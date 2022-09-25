import { useState } from 'react';
import LottoForm from './components/LottoForm';
import LottoInfo from './components/LottoInfo';

const App = () => {
  const [showLottoInfo, setShowLottoInfo] = useState(false);

  const showLottoInfoHandler = state => {
    setShowLottoInfo(state);
  };

  return (
    <>
      <h1>🎱 행운의 로또</h1>
      <LottoForm onShowLottoInfo={showLottoInfoHandler} />
      {showLottoInfo && <LottoInfo />}
    </>
  );
};

export default App;

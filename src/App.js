import { useContext, useState } from 'react';
import LottoForm from './components/LottoForm';
import LottoInfo from './components/LottoInfo';
import LottoContext from './components/store/lotto-context';

const App = () => {
  const [showLottoInfo, setShowLottoInfo] = useState(false);
  const ctx = useContext(LottoContext);

  const showLottoInfoHandler = state => setShowLottoInfo(state);

  return (
    <>
      <h1>🎱 행운의 로또</h1>
      <LottoForm onShowLottoInfo={showLottoInfoHandler} />
      {showLottoInfo && !ctx.reset && (
        <LottoInfo onShowLottoInfo={showLottoInfoHandler} />
      )}
    </>
  );
};

export default App;

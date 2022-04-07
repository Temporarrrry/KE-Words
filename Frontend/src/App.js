import Header from 'components/Header/Header';
import GlobalStyles from 'lib/styles/globalStyles';
import { BrowserRouter } from 'react-router-dom';
import Routing from 'routes/Routing';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Routing />
    </BrowserRouter>
  );
}

export default App;

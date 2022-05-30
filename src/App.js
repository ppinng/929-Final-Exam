
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './components/MainComponent';
import 'font-awesome/css/font-awesome.min.css';
function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}

export default App;

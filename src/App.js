import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner';
import Fotter from './components/Fotter';
import Trello from './components/Trello';

function App() {
  return (
    <div>
      <Banner></Banner>
      <Trello></Trello>
      <Fotter></Fotter>
    </div>
  );
}

export default App;

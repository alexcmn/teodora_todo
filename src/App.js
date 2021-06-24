import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Input from './components/Input';
import List from './components/List';

function App() {
  return (
    <div className="app">
      <div className="wrapp">
        <Input/>
        <List/>
      </div>
    </div>
  );
}

export default App;

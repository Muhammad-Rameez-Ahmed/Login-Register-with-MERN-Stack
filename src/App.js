import logo from './logo.svg';
import './App.css';
import Homepage from './components/homepage/Homepage';
import Login from './components/login/Login';
import Register from './components/register/Register';
function App() {
  return (
    <div className="App">
      hello world
      <Homepage/>
      <Login/>
      <Register/>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
      <Greet name="abc">
        <p>this is a children</p>
      </Greet>
      <Greet name="def"/>
      <Greet name="ghi"/>
      <Welcome name="abc"/>
      <Welcome name="def"/>
      {/* <Hello /> */}
    </div>
  );
}

export default App;

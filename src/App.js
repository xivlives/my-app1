import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Hello from './components/Hello'
import Welcome from './components/Welcome'
import Message  from './components/Message';

function App() {
  return (
    <div className="App">
      <Greet name ="Favour" heroName="Bat-man">
        <p> this is children props </p>
      </Greet>
      <Greet name="Bashir" heroName="Cyborg">
        <button>Action</button>
      </Greet>
      <Greet name="Aisha" heroName="Wonder-woman" />
      <Message /> 
      <Hello />                                                                      b
      <Welcome name ="Favour" heroName="Bat-man"></Welcome>
      <Welcome name ="Bashir" heroName="Cyborg"></Welcome>
      <Welcome name ="Aisha" heroName="Wonder-Woman"></Welcome>
    </div>
  );
}

export default App;

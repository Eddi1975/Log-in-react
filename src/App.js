import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
    
    <form>
    Usuario
    </form>
        <form>
  <label>
  
    <input type="text" name="name" />
  </label>
  
</form>
<form>
  contraseña:
  </form>
  <form>
  <input type="password" name="password" />
</form>
<form>
<input type="submit" value="Log In" />
</form>
      </header>
      
    </div>
  );
}

export default App;

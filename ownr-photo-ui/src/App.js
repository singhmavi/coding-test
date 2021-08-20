import logo from "./logo.svg";
import "./App.css";
import PhotoCarousal from "./containers/PhotoCarousal/PhotoCarousal";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
      </header>
      <PhotoCarousal></PhotoCarousal>
    </div>
  );
}

export default App;

import './App.css';
// import From from './components/form';
// import ListCar from './components/carList';
import Menu from './components/menu';
import ColorPicker from './components/colorPicker';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/* <ListCar/> */}
      {/* <From/> */}
      <Menu/>
      <ColorPicker/>  
      </header>
    </div>
  );
}

export default App;

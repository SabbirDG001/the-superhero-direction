import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Workers from './Components/Workers/Workers';
function App() {
  return (
    <div className="App">
    <Header></Header>
    <hr />
    <Workers></Workers>
    </div>
  );
}

export default App;

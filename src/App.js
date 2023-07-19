import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';

function App() {
  return (
    <>
    <Navbar title="Text" about="About Us"/>
    <div className="container mt-3 w-75">
    <Textform heading="Enter Your Details Here"/>
    </div>
    </>
    
  );
}

export default App;

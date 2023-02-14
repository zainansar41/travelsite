import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import About from './pages/About';
import Home from './pages/Home';
import Service from './pages/Service';
import Tours from './pages/Tours';

function App() {

  return (
    <>
      <Router>
        <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/service' element={<Service />} />
        <Route exact path='/tour' element={<Tours />} />

        </Routes>
      </Router>
    </>

  );
}

export default App;

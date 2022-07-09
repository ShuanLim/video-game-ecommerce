
// import 'semantic-ui-css/semantic.min.css'
import './App.css';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Body from './Components/Body';
import Footer from './Components/Footer';
import Sale from './Components/Sale';
import {
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
       
      <Routes>
        <Route path="/login" element={<div>Login</div>} exact />
        <Route path="/" element={<div><Header/><Body/></div>} exact />
        <Route path="/signup" element={<div>Signup</div>} exact />
        <Route path="/curated" element={<div>Curated</div>} exact />
        <Route path="/sale" element={<div>Sale</div>} exact />
        
      </Routes>
      <sale></sale>
      <Footer></Footer>
    </div>
  );
}

export default App;
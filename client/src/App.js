
// import 'semantic-ui-css/semantic.min.css'
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Body from './components/Body';
import Footer from './components/Footer';
import Sale from './components/Sale';
import { StoreProvider } from './utils/GlobalState';
import Cart  from "./components/Cart";
import {
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
   
      
    <div className="App">
      <Nav></Nav>
      <sale></sale>
      <StoreProvider>
      <Routes>      
        <Route path="/login" element={<div>Login</div>} exact />
        <Route path="/" element={<div><Header/><Body/><Cart></Cart></div>} exact />
        <Route path="/signup" element={<div>Signup</div>} exact />
        <Route path="/curated" element={<div>Curated</div>} exact />
        <Route path="/sale" element={<div><Header/><Sale/></div>} exact />
      
      </Routes>
      </StoreProvider>
      <sale></sale>
      <Footer></Footer>
    </div>
     
  );
}

export default App;
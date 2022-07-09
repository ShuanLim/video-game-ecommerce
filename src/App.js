
// import 'semantic-ui-css/semantic.min.css'
import Header from './Components/Header';
import Nav from './Components/Nav';
import './App.css';
import Body from './Components/Body';
import Footer from './Components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";


function App() {
  return (

    <div className="App">
      <div className="ui secondary pointing menu">

<Link className='link' to="/">Games</Link>
<Link className='link' to="/dashboard">Login</Link>
<Link className='link' to="/createAccount">Create Account</Link>
<Link className='link' to="/sale">Sale</Link>
<Link className='link' to="/curated">Curated</Link>

</div>
      {/* <Nav></Nav> */}
      <Routes>
       
        <Route path="/dashboard" element={Header} exact />
        <Route path="/" element={Body} exact />
      </Routes>
      {/* <Footer></Footer> */}
    </div>
   
  );
}

export default App;

// import 'semantic-ui-css/semantic.min.css'
import Header from './Components/Header';
import Nav from './Components/Nav';
import './App.css';
import Body from './Components/Body';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Body></Body>
       {/* root.render({Body}); */}

    <Footer></Footer>
    </div>
    
  );
}


export default App;
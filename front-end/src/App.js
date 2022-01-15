import { Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Out from './components/Out';
import Songs from './components/Songs';
import "./components/main.css"
//import Main from './components/Main';

function App() {
  return (
    <div className="App">
    <Navbar/>
     <Route exact path="/">
     <Out/>
      </Route>
      <Route exact path="/Songs/:id">
       <Songs/>
      </Route>
    </div>
  );
}

export default App;

import { Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Out from './components/Out';
import Songs from './components/Songs';
import "./components/main.css"
import Login from './components/Login';
import Search from './components/Search';
import Edit from './components/Edit';
//import Main from './components/Main';

function App() {
  return (
    <div className="App">
   
     <Route exact path="/">
      <Navbar/>
     <Out/>
      </Route>
      <Route exact path="/Songs/:Artist">
       <Songs/>
      </Route>
       <Route exact path="/Login">
       <Login/>
      </Route>
        <Route exact path="/albums/:Artist">
       <Search/>
      </Route>
       <Route exact path="/edit/:Artist">
      <Edit/>
        </Route>
    </div>
  );
}

export default App;

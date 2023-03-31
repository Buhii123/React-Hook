import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState } from 'react';
import Todo from './views/Todo';
import Covid from './views/Covid';
import { CountDown, NewCountDown } from './views/Cowndown';
import Blog from './views/Blog';
import DetailBlog from './views/DetailBlog';
import YoutubeSearch from './views/YoutubeSearch';
import NotFound from './views/NotFound';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {


  let [name, setName] = useState("");
  let [todos, setTodos] = useState([
    { id: "todo1", title: "xem video1" },
    { id: "todo2", title: "xem video2" },
    { id: "todo3", title: "xem video3" },
  ])



  let handleOnchane = (e) => {
    setName(e.target.value)
  }
  let handleOnclick = () => {
    let id = Math.floor((Math.random() * 1000) + 1)
    if (!name) {
      alert("nhap name")
      return;
    }
    let todo = { id: id, title: name }
    setTodos([...todos, todo])
    setName("")
  }

  let deleteDataTodo = (id) => {
    let currents = todos;
    currents = todos.filter(item => item.id !== id);
    setTodos(currents);
  }
  return (
    <Router>
      <div className="App">
        <Nav />
        <header className="App-header">

          <img src={logo} className="App-logo" alt="logo" />

        </header>
        <Switch>
          <Route path="/" exact>
            <Covid />
          </Route>
          <Route path="/timer">
            <CountDown />
            <span>-------------------------</span>
            <NewCountDown />
          </Route>
          <Route path="/Todos"> <Todo todos={todos}
            deleteDataTodo={deleteDataTodo} />
            <input type="text" value={name} onChange={(e) => { handleOnchane(e) }} />
            <button onClick={() => { handleOnclick() }}> Click Me!</button>
          </Route>
          <Route path="/blog" exact>
            <Blog></Blog>
          </Route>
          <Route path="/blog/:id" exact>
            <DetailBlog></DetailBlog>
          </Route>
          <Route path="/Secrect" exact>
            <YoutubeSearch />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>

        </Switch>
      </div>

    </Router>



    // <Router>
    //   <div className="App">
    //     <Nav />
    //     <header className="App-header">

    //       <img src={logo} className="App-logo" alt="logo" />
    //     </header>

    //     {/* A <Switch> looks through its children <Route>s and
    //       renders the first one that matches the current URL. */}
    //     <Switch>
    //       <Route path="/" exact>
    //         <Covid />
    //       </Route>
    //       <Route path="/timer">
    //         <CountDown />
    //         <span>---------------------</span>
    //         <NewCountDown />
    //       </Route>



    //     </Switch>
    //   </div>
    // </Router>



  );
}

export default App;

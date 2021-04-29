import logo from './logo.svg';
import React, {useState, useEffect} from 'react'
import './App.css';
import { FaBeer } from 'react-icons/fa';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { UserComponent } from './Components/Users/UserComponent';
import { UserDataComponent } from './Components/Users/UserDataComponent';
import { PostsComponent } from './Components/Posts/PostsComponent';
import { PostsCommentsComponent } from './Components/Posts/PostsCommentsComponent';

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route path="/users/:id" children={<UserDataComponent />} />
        <Route path="/users" component={UserComponent} />
        <Route path="/posts/:id/comments" children={<PostsCommentsComponent />} />
        <Route path="/posts" component={PostsComponent} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
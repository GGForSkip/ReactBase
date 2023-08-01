import logo from './logo.svg';
import React , { useState} from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import { CounterButtonPage, HomePage, PeopleListPage,NotFoundPage, ProtectedPage, ControlledFormPage,UncontrolledFormPage, UserProfilePage } from './pages';
import './App.css';
import { NavBar } from './Navbar';
import { FormsNavbar } from './FormsNavbar';
import { UserDataLoaded } from './UserDataLoaded';
import { ThemeContext } from './ThemeContext';
const people=[
  {
    name: 'John',
    age: 21,
    hairColor: 'blonde'
  },
  {
    name: 'Jinan',
    age: 25,
    hairColor: 'blonde'
  },
  {
    name: 'Pino',
    age: 27,
    hairColor: 'brown'
  }
]

function App() {


  return (
    <ThemeContext.Provider value='light'>
       <div className="App">
          <div className="App-header">
              <Router>
                  <NavBar></NavBar>
                  <Routes>        
                      <Route path="/" exact element={<HomePage />}></Route>
                      <Route path="/counter" exact element={<CounterButtonPage />}></Route>
                      <Route path="/people-list" exact element={<PeopleListPage />}></Route>
                      <Route path="*" element={<NotFoundPage />}></Route>
                      <Route path="/protected" element={<ProtectedPage />}></Route>
                      <Route path="/userProfile" element={<UserDataLoaded children={<UserProfilePage/>}/>}></Route>
                      <Route path="/forms" element={<FormsNavbar/>}>
                          <Route path="/forms/controlledForm" element={<ControlledFormPage />}></Route>
                          <Route path="/forms/uncontrolledForm" element={<UncontrolledFormPage />}></Route>
                      </Route>
                  </Routes>
              </Router>
          </div>
        </div>
    </ThemeContext.Provider>
   
  );
}

export default App;

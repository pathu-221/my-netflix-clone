import React, { Component } from 'react';
import './App.css';


import { Route, Routes, } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import SignIn from './pages/sign-in/Sign-in.component';
import SignUp from './pages/signup/sign-up.component';
import HomePage from './pages/Home/Home.component.jsx';
import { auth, addUserToDatabase } from './firebase/firebase.utils';
import NavBar from './component/nav-bar/nav-bar.component';


import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

class App extends Component {



  componentDidMount() {
    const { setCurrentUser } = this.props;
    auth.onAuthStateChanged(userAuth => {

      setCurrentUser(userAuth);

      addUserToDatabase(userAuth);
    })
    //console.log(this.props);
  }


  render() {
    return (
      <div className='app'>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route exact path='/signin' element ={ <SignIn />}></Route>
          <Route exact path='/signup' element ={<SignUp />}></Route>
        </Routes>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
import React from 'react';
import netflixLogo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';

import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

import './nav-bar.styles.scss';
import { Link } from 'react-router-dom';

function NavBar({ currentUser }) {
    const navigate = useNavigate();
  return (
    <div className={`nav`}>
      <div className="netflix-logo">
        <img src={ netflixLogo} className='nav-logo' onClick={() => navigate('/')}/>
        <Link to='/' className='sign-out'>My list</Link>
      </div>
      <div className="user-profile">
        {
          currentUser ? <a className='sign-out'>Hi, {currentUser.displayName} </a> : <a className='sign-out'>Hi, Guest</a>
        }

        {
         currentUser ?  <a className='sign-out' onClick={() => auth.signOut()}>Sign Out</a> : <Link to={'/signin'}>Sign in</Link>
        }
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(NavBar);
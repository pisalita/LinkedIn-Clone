import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import logo from './linkedin.png';
import avatar from './CatPicture.jpg'
import HeaderOption from './HeaderOption';
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useDispatch } from 'react-redux';
import { signOut } from 'firebase/auth';
import { auth } from './firebase';
import { logout } from './features/userSlice';

function Header() {

  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    signOut(auth);
  }

  return (
    <div className='header'>

      <div className="header__left">
        <img 
          src={logo} 
          alt="" 
        />

        <div className="header__search">
          <SearchIcon />
          <input placeholder='Search' type="text"/>
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title='home'/>
        <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption avatar={true} title='me' onClick={logoutOfApp}/>

      </div>
    </div>
  )
}

export default Header

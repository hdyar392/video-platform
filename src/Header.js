import React from 'react'
import './Header.css';
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import PlayCircleOutlineTwoToneIcon from '@material-ui/icons/PlayCircleOutlineTwoTone';
import ViewComfyRoundedIcon from '@material-ui/icons/ViewComfyRounded';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import Avatar from '@material-ui/core/Avatar';

function Header() {
    return (
        <div className="header"> 
          <div className="header__left">
            <MenuIcon />
            <img 
                className="header__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" 
                alt=""
            />
          </div>    

          <div className="header__input">
            <input placeholder="Search" type="text" />
            <SearchIcon className="header__inputButton"/>
          </div>

          <div className="header__icons">
            <PlayCircleOutlineTwoToneIcon className="header__icon"/>
            <ViewComfyRoundedIcon className="header__icon"/>
            <NotificationsNoneOutlinedIcon className="header__icon"/>
            <Avatar 
                alt="Cody Dyar"
                src=""
            />
          </div>

        </div>
    );
}

export default Header;

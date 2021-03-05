import React from 'react'
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import PlayCircleOutlineTwoToneIcon from '@material-ui/icons/PlayCircleOutlineTwoTone';
import ViewComfyRoundedIcon from '@material-ui/icons/ViewComfyRounded';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';

function Header() {
    return (
        <div className="header">
         <h1>I am a header</h1>   
         <MenuIcon />
         <img 
         className="header__logo"
         src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" 
         alt=""
         />
         <input type="text" />
         <SearchIcon />
         <PlayCircleOutlineTwoToneIcon />
         <ViewComfyRoundedIcon />
         <NotificationsNoneOutlinedIcon />
        </div>
    );
}

export default Header;

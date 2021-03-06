import React from 'react';
import SidebarRow from './SidebarRow';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import HomeIcon from '@material-ui/icons/Home';
import './App.css';

function Sidebar() {
    return (
        <div className="sidebar">
           
          <SidebarRow selected Icon={HomeIcon} title="Home"/>
          <SidebarRow Icon={WhatshotIcon} title="Trending"/>
          <SidebarRow Icon={SubscriptionsIcon} title="Subscription"/>
         
        </div>
    );
}

export default Sidebar;


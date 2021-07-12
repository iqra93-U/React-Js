import React from 'react';
import {Link} from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";


class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="logo">
                <Avatar 
                    className="avatar-logo"
                    src={"https://pbs.twimg.com/profile_images/1214384116/twitty_400x400.jpg" }
                />
                  <h1>Touiteur</h1>
                 <ul>
                    <li> <Link  to="/">home</Link> </li> 
                    <li> <Link  to="/TouitContainer"> tuites </Link></li>
                    </ul>
                </div>
              
                <p>You don't write because you want to say something,
                     you write because you have something to say. !</p>
            </header>
        );
    }
}

export default Header;
import React from 'react';
import Like from './Like';
import Avatar from "@material-ui/core/Avatar";

class Touit extends React.Component {
    render() {

        const {name, message, id, likes} = this.props;
        return (
   
            <article>
                <p>
                <Avatar 
                    className="avatar"
                    src={"http://touiteur.cefim-formation.org/avatar/get?username=" + name}
                />
                    <strong>{name} : </strong>
                    {message}
                    <Like id={id} like={likes}/>
                </p>
            </article>
        );
    }
}

export default Touit;
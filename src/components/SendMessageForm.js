import React from 'react';
import TouitAPI from "../Api/TouitAPI";


class SendMessageForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "username": ""
        }
    }


    formSubmit = ev => {
        ev.preventDefault();
        TouitAPI.sendTouit(
            ev.target.username.value,
            ev.target.message.value,
            () => {
                alert("Votre message a bien été envoyé !");
            },
            msg => {
                alert("Une erreur est survenue : " + msg + " !");
            }
        );
    };
    inputChange = ev => {
        this.setState({
            [ev.target.name]: ev.target.value
        });
    };

    render() {
        const {username, message } = this.state;
        return (
            <form className="container-form" onSubmit={this.formSubmit}>
                <label htmlFor="username">Name  </label>
                <input type="text" id="username" name="username" value={username} onChange={this.inputChange}/>
                <br/>
                <label htmlFor="message">Message  </label>
                <input type="text" id="message" name="message" value={message} onChange={this.inputChange}/>
                <br/>
                <input type="submit"/>
            </form>
        )
    }
}

export default SendMessageForm;
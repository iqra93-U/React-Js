import React from 'react';
import Touit from "./Touit";
import TouitAPI from "../Api/TouitAPI";


/*
    1) Est-ce que ma variable doit être défini par le composant parent ? Oui -> props 
    props we use to getting data from components i-e data coming from parents could not be changed by the child
    2) Sinon, est-ce que ma variable à un impact direct ou indirect sur le rendu ? Oui -> state
    3) Sinon, si c'est aucun de ces 2 cas -> propriété classique
*/

class TouitContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "touits": []
        };
        this.lastTimestamp = 0;
        this.intervalID = false;
    }

    refresh = () => {
        TouitAPI.getTouits(this.lastTimestamp, resp => {
            if (resp.messages.length > 0) {
                this.setState({
                    "touits": [...this.state.touits, ...resp.messages]
                });
            }
            this.lastTimestamp = resp.ts;
        });
    };

    componentDidMount() {
        this.intervalID = setInterval(this.refresh, 1000);
    }

    componentWillUnmount() {
        if (this.intervalID !== false) {
            clearInterval(this.intervalID);
        }
    }

    render() {
        const {touits} = this.state;
        return (
           

           
            <main className="container">
            
                {
                    touits
                        .sort((a, b) => b.ts - a.ts)
                        .map(t => <Touit key={t.id} {...t} />)
                }
            </main>
         
        );
    }
}

export default TouitContainer;
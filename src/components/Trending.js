import React from 'react';
import TouitAPI from "../Api/TouitAPI";

class Trending extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "words": []
        }
    }

    componentDidMount() {
        TouitAPI.getTrending(resp => {
            this.setState({
                "words": Object.entries(resp)
                    .map(([k, v]) => ({"key": k, "value": v}))
                    .sort((a, b) => b.value - a.value)
            });
        });
    }

    render() {
        const {words} = this.state;
        return (
        
            <section className="trending-handing">
                <h2> Most trending Words...</h2> 
                <div className="trending">
                {
                    words.map(word => <span key={word.key}>{word.key}</span>)
                }

                </div>
               
            </section>
        );
    }
}

export default Trending;
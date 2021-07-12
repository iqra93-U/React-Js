import React from 'react';
import SendMessageForm from "./SendMessageForm";
import Trending from "./Trending";

class Home extends React.Component{
    render(){
        return (
            <div>
          
            <SendMessageForm />
            <Trending />
            </div>
          

        );
    }
}
export default Home;
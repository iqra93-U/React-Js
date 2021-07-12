import React from 'react';
import TouitAPI from '../Api/TouitAPI'


class Like extends React.Component{
 // to define properties of  state we use constructor 
    constructor(props) {
        super(props); // super() will calls the constructor of its parent class. 
                        // This is required when you need to access some variables from the parent class
        this.state = { // to define particular property if we use the state it will update the render by its own 
            
         likes :[]
        }
    }

    getValue = ()=>{
        TouitAPI.sendLikes(this.props.id, resp =>{ // callback function that connects our function with API 
                                                    // for this we will use name of component with the function we have created to fetch aPI 
         this.setState({likes:resp.data.likes}) // name of key and value to store the value in the table above 
                                                // that we have given in constructor 
       

    })

    }
  

    
    render(){
        const {like} = this.props;
        // console.log(like)
        return(
            <div>
            <button onClick ={this.getValue}> likeB </button>
            <p> {this.state.likes} </p>  {/* replace the current state value */}
           

            </div>
         
        );
    }
}
export default Like;
import React , { Component } from 'react'

class Form extends Component{
    initialState = {
        name: " ",
        job: " "
    }
    state =this.initialState;
    handleChange = eventt => {
        const { name, value } = eventt.target      
        this.setState({
          [name]: value,
        })
      }

    submitKarou = () =>{
        this.props.handle(this.state);
        this.setState(this.initialState); 
    }

    render(){ 

        const {name,job} =this.state;
        return(
            <form>
                <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={this.handleChange} />
               <input
                type="text"
                name="job"
                id="job"
                value={job}
                onChange={this.handleChange} />
                <input type="button" value="Submit" onClick={this.submitKarou} />
            </form>
        );
    }x
}
export default Form
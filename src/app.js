import React, { Component } from 'react'
import Happy from './Happy.js'
import './App.css'

export default class App extends Component {
    constructor(){
        super()
        this.state = {
            nameEntry: '',
            names: ["d3h4n", "burgers"]
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleChange(event){
        let {name, value} = event.target;
        this.setState((state)=>{
            state[name] = value;
            return state;
        })
    }

    handleSubmit(event){
        event.preventDefault()

        if(this.state.nameEntry !== ''){
            this.setState((prevState)=>{
                return{
                    nameEntry: '',
                    names: [...prevState.names, prevState.nameEntry]
                }
            })
        }
    }

    handleDelete(oldName){
        this.setState((prevState)=>{
            return{
                names: prevState.names.filter((name) => name !== oldName)
            }
        })
    }

    render() {
        let happies = this.state.names.map((name, id) => <Happy key={id} name={name} handleDelete = {this.handleDelete}/>)

        return (
            <div className="app-container">
                <div className="form">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" 
                            name="nameEntry" 
                            placeholder="Enter Name" 
                            value={this.state.nameEntry} 
                            onChange={this.handleChange}
                        />

                        <button type="submit" className="sub-btn-big">Submit</button>
                        <button type="submit" className="sub-btn-small">✔</button>
                    </form>
                </div>
                <br />
                { happies }
            </div>
        )
    }
}

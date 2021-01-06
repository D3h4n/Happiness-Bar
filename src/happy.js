import React, { Component } from 'react'

export default class Happy extends Component {
    constructor(){
        super()
        this.state = {
            seratonin: 0
        }
        this.handleIncrease = this.handleIncrease.bind(this)
        this.handleDecrease = this.handleDecrease.bind(this)
        this.handleReset = this.handleReset.bind(this)
    }

    handleIncrease(){
        this.setState((prevstate)=>{
            return {
                seratonin: (prevstate.seratonin < 10 ? prevstate.seratonin + 1 : 10)
            }
        })
    }

    handleDecrease(){
        this.setState((prevstate)=>{
            return{
                seratonin: (prevstate.seratonin > -10 ? prevstate.seratonin - 1 : -10)
            }
        })
    }

    handleReset(){
        this.setState({
            seratonin: 0
        })
    }

    render() {
        let boxes = [];

        for(let i = 0; i < Math.abs(this.state.seratonin); i++){
            boxes.push(<span className="box" key={i} style={{backgroundColor: (this.state.seratonin > 0 ? "green" : "red")}}></span>)
        }

        let emotion = ""

        if(this.state.seratonin < -5){
            emotion = "Depressed"
        }
        else if(this.state.seratonin < 0){
            emotion = "Sad"
        }
        else if(this.state.seratonin === 0){
            emotion = "Numb"
        }
        else if(this.state.seratonin < 5){
            emotion = "Happy"
        }
        else{
            emotion = "Elated"
        }

        return (
            <div className="happy-container">
                <label className = "name">Name: { this.props.name }</label>
                
                <label>Emotion: { emotion } </label>

                <span className = "seratonin-container">
                    <label>Seratonin: </label>
                    <span className = "box-container">
                        { boxes.length > 0 ? boxes : <span className="box" style={{backgroundColor: "gray"}}></span> }
                    </span>
                </span>

                <span className="btns-container">
                    <button onClick={this.handleIncrease} className="btn">+</button>
                    <button onClick={this.handleDecrease} className="btn">-</button>
                    <button onClick={this.handleReset} className="btn">R</button>
                    <button onClick={()=>this.props.handleDelete(this.props.name)} className="btn del-btn">X</button>
                </span>
            </div>
        )
    }
}

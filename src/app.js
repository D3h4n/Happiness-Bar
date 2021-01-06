import React, { Component } from 'react'
import Happy from './Happy.js'
import './App.css'

export default class App extends Component {
    render() {
        const names = ["Dehan", "Alik", "Adonai", "Jason", "Josh"]
        let happies = names.map((name, id) => <Happy key={id} name={name}/>)

        return (
            <div className="app-container">
                { happies }
            </div>
        )
    }
}

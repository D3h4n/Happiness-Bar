import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class app extends Component {
    static propTypes = {
        prop: PropTypes
    }

    constructor(){
        super()
        this.state = {
            names: []
        }
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

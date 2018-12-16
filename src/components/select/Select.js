import React, { Component } from 'react';

import Option from './Option';

class Select extends Component {
    constructor(props){
        super(props);
        this.state = {
            options: []
        }
    }

    componentDidMount(){
        this.setState({
            options: ['david', 'carlos', 'mama', 'papa']
        })
    }

    render(){
        return(
            <select>
                <Option fffff={this.state.options} />
            </select>
        )
    }
}

export default Select;
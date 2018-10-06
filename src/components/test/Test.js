import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Test extends Component {
    constructor(props) {
        super(props)

    }

    // componentWillMount() {
    //     console.log('componentWillMount');
    // }

    // componentDidMount() {
    //     console.log('componentDidMount');
    // }

    // componentWillReceiveProps(nextProps) {
    //     console.log('componentWillReceiveProps');
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
    }

    // componentWillUpdate(nextProps, nextState) {
    //     console.log('componentWillUpdate');
    // }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
    }

    render() {
        console.log('render');
        return (
            <div>

            </div>
        )
    }
}



export default Test
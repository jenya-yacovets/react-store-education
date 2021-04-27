import React, { Component } from "react";
import ErrorIndicator from '../error-indicator'

export default class ErrorBoundry extends Component {

    state = {
        hasError: false
    }

    // элемент жизненого цикла компонента
    // вызывается когда в компоненте ниже по иерархии возникнет ошибка и в нем не будет componentDidCatch
    componentDidCatch() {
        this.setState({hasError: true})
    }

    render() {
        if(this.state.hasError) {
            return <ErrorIndicator />
        } else {
            // если ошибки нет, то отрисуем дочерние компоненты
            return this.props.children
        }
    }
}
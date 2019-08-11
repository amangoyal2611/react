import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { catchClause } from '@babel/types';


export class TodoItem extends Component {
    getStyle = () => {
       return{
           background: '#f4f4f4',
           padding: '10px',
           borderBottom: '1px #ccc dotted',
           textDecoration: this.props.todo.completed ? 
           'line-through' : 'none'
       }
    }
    render() {
        console.log(this.props.todo)
        return (
            <div style = {this.getStyle()}>
               <p>{ this.props.todo.title }</p>
            </div>
        )
    }
}

 //Prop Types
 TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem

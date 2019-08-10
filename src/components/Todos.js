import React from 'react';

class Todos extends React.Component {
 render(){
     console.log(this.props.todos)
    return this.props.todos.map((todo) => (
        <h1>{todo.id}</h1>
    ))
  }
 }

export default Todos;

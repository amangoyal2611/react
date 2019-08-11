import React, { Component } from 'react'
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos: [{
      id: 1,
      title: 'Complete React Crash Course',
      completed: false
    },
    {
      id: 2,
      title: 'Create a React project',
      completed: true
    },
    {
      id: 3,
      title: 'Learn React Native',
      completed: false
    }]
  }

  render(){
  return (
    <div className="App">
     <Todos todos={this.state.todos}/> 
    </div>
  );
  }
}

export default App;

import React from 'react';
import Todos from './components/Todos';

class App extends React.Component {
  state = {
    todos: [{
      id: 1,
      title: 'Hello item 1',
      completed: false
    },
    {
      id: 2,
      title: 'Hello item 2',
      completed: false
    },
    {
      id: 3,
      title: 'Hello item 3',
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

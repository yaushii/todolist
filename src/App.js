import React from 'react';
import './App.css';




class App extends React.Component{
  state = {
    tasks : [
    
  ],
  newTask:""
};

taskDelete = id =>{
const tasks = this.state.tasks.slice();
const index = tasks.findIndex(task=> task.id === id);

tasks.splice(index,1);

this.setState({ tasks });
};



handlesubmit =(event)=> {
  event.preventDefault();//empeche la page de se recharger

  //Crée un nouvelle id avec la date et l'heure et le nom grace a new task
  const id = new Date().getTime();
  const nom = this.state.newTask;

  const task = {id, nom};

  const tasks = this.state.tasks.slice();
  tasks.push(task);

  this.setState({ tasks });
  this.setState({newTask : ''});

}


//permet de modifier le champ du formulaire (via le state)
handleChange = (event)=>{
  const value = event.currentTarget.value;
  this.setState ({ newTask : value });
  

}


  render(){
    return(
    <div>
    <h1>liste de tâches</h1>

    <ul>
      {this.state.tasks.map(tasks => (
        <li>
          {tasks.nom} <button onClick={() => this.taskDelete(tasks.id)}>x</button>
        </li>
        ))}
    </ul>
    <form onSubmit={this.handlesubmit}>
    <input type="text" 
    onChange={this.handleChange}
    value={this.state.newTask}
    placeholder="Ajouter une tâches">
    </input>
    <button onClick={this.taskAdd}>fait</button>
</form>
</div>
  )
    
  };
}

export default App;

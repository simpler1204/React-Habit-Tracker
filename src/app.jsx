
import React, { Component } from 'react';
import './app.css';
import HabitAddForm from './components/habitAddForm';
import Habits from './components/habits';
import Navbar from './components/navbar';


class App extends Component {
  state = {
    habits : [
      {id:  1, name:  'Reading', count: 0},
      {id:  2, name:  'Running', count: 1},
      {id:  3, name:  'Coding', count: 2},
    ]  
  }

  handleIncrement = (habit)=>{
    const habits = this.state.habits.map((item)=>{
      if(item.id === habit.id){
        return {...habit, count:habit.count + 1}
      }
      return item;
    }    
    )    
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // habits[index].count++;
    this.setState({habits});
  }

  handleDecrement = (habit)=>{
    const habits = this.state.habits.map(item=> 
      {
        const count = habit.count -1;
        if(item.id === habit.id){
          return {...habit, count:count < 0? 0 : count}
        }
        return item;
      }
    )
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // habits[index].count = habits[index].count===0 ? 0 : --habits[index].count;
    this.setState({habits});
  }

  handleDelete = (habit)=>{
    const habits = this.state.habits.filter(item=>
        item.id !== habit.id
      )
    this.setState({habits});
  }

  handleAdd = (name)=>{
    const habits = [...this.state.habits, {id:Date.now(), name:name, count:0}]
    this.setState({habits});
  }
  
  handleReset = ()=>{
    const habits = this.state.habits.map(habit=>{
      if(habit.count > 0){
        return {...habit, count:0}
      }else{
        return habit;
      }

      
    });

    this.setState({habits});       
    
  }

  render() {
    return (
      <>
      <Navbar 
        totalCount={this.state.habits.filter(item=>item.count>0).length} 
        />      
      <Habits habits={this.state.habits}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
        onDelete={this.handleDelete}
        onAdd={this.handleAdd}
        onReset={this.handleReset}
        />
      </>
       
    );
  }
}


export default App;

import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import AddTodo from './components/AddTodo.js'
import TodoList from './components/TodoList.js'
import { addTodo } from './actions/actions'
import { connect } from 'react-redux'
import React, { Component } from 'react';


class App extends Component {
  render() {
     const { dispatch, visibleTodos } = this.props
     
     return (
        <div>
           <AddTodo onAddClick = {text =>dispatch(addTodo(text))} />
           <TodoList todos = {visibleTodos}/>
        </div>
     )
  }
}
function select(state) {
  return {
     visibleTodos: state.todos
  }
}
export default connect(select)(App);
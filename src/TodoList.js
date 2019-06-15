import React, { Component, Fragment } from "react";

//serve para conectar alguma informação de algum redurcer dentro do redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux"; //Aplica o dispatch em cada função
import * as TodoActions from "./store/actions/todos";

import Header from "./Header";

//const TodoList = ({ todos, addTodo, removeTodo }) => {
//};

import { Container, Button } from "./styles";

class TodoList extends Component {
  state = { text: "" };

  render() {
    const { addTodo, removeTodo, todos } = this.props;
    return (
      <Container>
        <form>
          <input
            placeholder="Digite um todo"
            type="text"
            value={this.state.text}
            onChange={e => this.setState({ text: e.target.value })}
          />
          <Button
            onClick={e => {
              e.preventDefault();
              addTodo(this.state.text);
              this.setState({ text: "" });
            }}
          >
            Add todo
          </Button>
        </form>
        {/* onCLick, coloca a chamada de função dentro de outra, para quando
        renderizar não chamar a função add todo */}
        <Header />
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              <button onClick={() => removeTodo(todo.id)}>Remover</button>
              {todo.text}
            </li>
          ))}
        </ul>
      </Container>
    );
  }
}

//transforma as informações do estado do redux em propriedades para o componente
const mapStateToProps = state => ({
  //do um nome de uma propriedade para o meu componente
  todos: state.todos
  //state apresenta todas as informações dentro do redux
});
//cada reducer apresenta um tipo de informação

//transforma as actions em propriedades do componente
const mapDispatchToProps = dispatch =>
  bindActionCreators(TodoActions, dispatch);
//retorna um objeto, que contem as actions.
//addTodo: text => dispatch({ type: "ADD_TODO", payload: { text } })
// tudo que estiver dentro do dispatch os reducers vão ouvir

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList); //sintaxe de high order component/function

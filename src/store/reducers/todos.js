const INITIAL_STATE = [
  { id: 1, text: "lala" },
  { id: 2, text: "la1la" },
  { id: 3, text: "lolo88" }
];

//Reducer com nome todos que irá armazenar alguns dados

export default function todos(state = INITIAL_STATE, action) {
  //action seria o aviso de que alguma alteração está acontecendo.
  //type é o ID da action

  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: Math.random(), text: action.payload.text }];

    case "REMOVE_TODO":
      return state.filter(todo => todo.id !== action.payload.id); //retorna apenas os que respeita a condição

    default:
      return state;
  }
}

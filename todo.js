let todos = [{
    text: 'Buy Groceries',
    completed: false
}, {
    text: 'Watch Tutorials',
    completed: true
}, {
    text: 'Play Videogames',
    completed: true
},{
    text: 'Do Work',
    completed: true
}, {
    text: 'Find Job',
    completed: false
}];

let getThingsTodo = function (todos) {
    return todos.filter(function (todo, index) {
        return !todo.completed;
    });
};

console.log(getThingsTodo(todos));

// let findTodos = function (todos, query) {
//     return todos.filter(function (todo, index) {
//         let isTextMatch = todo.text.toLowerCase().includes(query.toLowerCase());
//         let isCompleted = !todo.completed;
//          return isTextMatch || isCompleted;
//     });
// };

// let deleteTodo = function (todos, todoText) {
//   let index = todos.findIndex(function (todo, index) {
//     return todo.text.toLowerCase() === todoText.toLowerCase();
//   });

//  if (index > -1) {
//      todos.splice(index, 1);
//      return true;
//  } else {
//      return false;
//  }
// };
// console.log( deleteTodo(todos,  'Buy Groceries') );
// console.log(todos);

// let findTodo = function (todos, todoText) {
//     return todos.find( function(todo, index) {
//         return todo.text.toLowerCase() === todoText.toLowerCase();
//     } );
// }

// const todos = ['Buy Groceries', 'Watch Tutorials', 'Play Videogames', 'Eat', 'Walk'];
// todos.splice(2, 1);
// console.log(todos);
// todos.push(6);
// console.log(todos);
// todos.shift();
// console.log(todos);

//console.log(`You have ${todos.length} todos`);
//console.log(`Todo: ${ todos[0] }, ${ todos[todos.length - 2] }`);

// todos.forEach( function(item, index) {
//     console.log(`${index + 1}. ${item}`);
// } );

// for (let count = 0; count < todos.length; count++ ) {
//     console.log(`${count + 1}. ${todos[count]}`);
// }
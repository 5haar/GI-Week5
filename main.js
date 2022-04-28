// EASY: Write a function that would allow you to do this:
// var run = exercise('running');
// console.log(run()); // prints "Today's exercise: running"
// var swim = exercise('swimming');
// console.log(swim()); // prints "Today's exercise: swimming"

let run = exercise("running");
let swim = exercise("swimming");

function exercise(x) {
  function place() {
    return `Today's Exercise: ${x}`;
  }
  return place;
}

console.log(run());
console.log(swim());

// MEDIUM: Write a function that would allow you to do this:
// var sharePizza = cutPizzaSlices(8);
// console.log(sharePizza(2));
// // prints "Each person gets 4.00 slices of pizza"
// console.log(sharePizza(3));
// // prints "Each person gets 2.67 slices of pizza"

let sharePizza = cutPizzaSlices(8);

function cutPizzaSlices(x) {
  function divide(y) {
    return `Each person gets ${Number(x) / Number(y)} slices of pizza.`;
  }
  return divide;
}

console.log(sharePizza(2));
console.log(sharePizza(3));

// HARD: Data security exercise. Inside of a closure, create an object called pii (Personally Identifiable
//   Information)that cannot be accessed directly. The object should have at least two properties: name and
//   ssn. Only the name property should be accessible, and it should be called through a public function.
//   The ssn property should not be accessible at all.
//   Creating private objects and private properties helps you control who has access to what data and
//   helps you prevent people who shouldn't see important info like social security numbers from getting
//   access to the data.
//   You can use 'getName' or other get methods to access data that people might need. For example,
//   people addressing a package or email may need a customer's name, but they definitely shouldn't have
//   access to their ssn.

let user = function () {
  let pii = {
    name: "Shaar",
    ssn: "123456789",
  };
  return pii.name;
};

console.log(user());
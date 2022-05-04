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

// VERY HARD: Object prototype chain and prototypal inheritance exercise.
// 1. Create a Person constructor that has three properties: name, job, and age.
// 2. Give the Person an 'exercise' method that console logs whatever you want, e.g. "Running is
// fun! - said no one ever".
// 3. Give the Person a 'fetchJob' method that console logs the person's name and job, e.g. "Brad
// is a back-end developer".
// See next page...
// 4. Create a Programmer constructor that inherits all the members from Person with an additional
// 'languages' property that is passed in and a busy property that is NOT passed in and is set to
// true by default.
// 5. Give the Programmer a 'completeTask' method that updates the busy property on that
// programmer to be false. Also give the Programmer an 'acceptNewTask' method that updates the
// busy property on that programmer to be true.
// 6. Give the Programmer an 'offerNewTask' method that console logs one thing if the
// programmer is busy and another if the programmer is not, e.g. should initially log out "Mark can't
// accept any new tasks right now." and "Mark would love to take on a new responsibility." if the
// programmer is not busy.
// 7. Give the Programmer 'learnLanguage' and 'listLanguages' methods that add new languages
// to the programmer and list off all languages the programmer knows.
// 8. Test it out - can you create different programmers and run all the methods on them? Does
// each programmer maintain their own properties properly and independently of the other
// programmers?
// Bonus - ES6 Syntax: Use ES6 Syntax in your answer. Feel free to add on new methods or
// properties to incorporate the syntax.
// function Person(name, job, age) { }
// function Programmer(name, job, age, languages) { }

function Person(name, job, age) {
  this.name = name;
  this.job = job;
  this.age = age;
  this.exercise = function () {
    return console.log("I am a Pirate");
  };
  this.fetchJob = function () {
    return console.log(`${this.name} is a ${this.job}`);
  };
}

class Programmer extends Person {
  constructor(name, job, age, languages) {
    super(name, job, age);
    this.languages = languages;
    this.busy = true;
  }

  completeTask = function () {
    this.busy = false;
    return console.log(`${this.name} completed his task.`);
  };

  acceptTask = function () {
    this.busy = true;
    return console.log(`${this.name} accepted a new task.`);
  };

  offerNewTask = function () {
    return this.busy
      ? console.log(`${this.name} can't accept any new tasks right now.`)
      : console.log(
          `${this.name} would love to take on a new responsibilty right now.`
        );
  };

  listLanguages = function () {
    return console.log(this.languages);
  };

  learnLanguages = function (x) {
    return this.languages.push(`${x}`);
  };
}

let person1 = new Person("Eustace", "Pirate", "23");
let person2 = new Person("Luffy", "Pirate King", "22");

// person1.fetchJob();

let person3 = new Programmer("Jackson", "Back-End", "22", [
  "JS",
  "HTML",
  "CSS",
]);

// person3.fetchJob();
// person3.acceptNewTask();
person3.completeTask();
// person3.acceptNewTask();

// person3.listLanguages();
// person3.learnLanguages("Python");
// person3.listLanguages();
// person3.learnLanguages("React");
// person3.listLanguages();

// let batman = new Programmer("Bruce Wayne", "Vigilante", "32", ["HTML"]);

// batman.listLanguages();
// batman.learnLanguages("CSS");
// batman.listLanguages();
// batman.learnLanguages("React");
// batman.learnLanguages("Python");
// batman.learnLanguages("Java");
// batman.listLanguages();

// batman.fetchJob();

// Constructors: A way to create a blueprint of an object and then we can create instances of that object.

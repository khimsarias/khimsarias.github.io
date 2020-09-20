# ReactJS

# Introdcution

## What
React is a component-based javascript library used to build user interfacess.

## Why
- Since react runs in the browser, you do not have to wait for a server response and is hence very fast.
- Components can be written once and utilised throughout the project.
- Code is maintainable and mangeable.
- UI State Management is very easy.

## How
The most basic react app.
```
// HTML

<div id="app"></div>
```

```
// JS

// Function with return as the HTML

function Person(props){
  return (
  <div class="person">
  <h1>{props.name}</h1>
  <p>Your Age: {props.age}</p>
</div>
  );
}

// Var that has all the elements that you want to render

var app = (
<div>
  <Person name="SK" age="20"/>
  <Person name="PK" age="27"/>
</div>
);

// A call to ReactDOM  to render them.

ReactDOM.render(app,document.querySelector('#app'));

```

## Two Kinds of Applications

### Single Page App (More Popular)
- Only 1 HTML file is rendered.
- Everything after this is managed by React
- Typically only 1 ReactDOM.render() call.

### Multi Page Application
- Multiple pages are returned.
- Only sompe components/Widgets are managed by react, not the entire page.
- ReactDOM.render() is called more often.

## Net-Gen JS

const = var whose valuee does not change.

let = essentially the nre var.

### Arrwow Functions

Solves the traditional issues with _this.x_

```
// Function with only 1 argument

const myFunc() = arg => {
    ...
}

// Function with multiple arguments or NO arguments

const myFunc() = (arg1,arg2,arg3) => {
    ...
}

// Function with only return

const myFunc() = arg => arg

```

### Import and Export

```
\\Person.js (Default Export)
const person = {
    name:'Max';
}
export default person ---> default keyword means this is the default export from this file
```

```
\\Utility.js (Named Exports)

export const clean = () => {...} 
export const baseData = 10;
```

```
\\app.js

import person from './Person.js' ---> for importing default exports
import bob from './Person.js' ---> Since it is a default export, we can name it whatever we want.

import {baseData} from './Utility.js' ---> for importing consts/lets (aka Named Exports)
import {clean as cln} from './Utility.js' ---> Using an alias as we have to keep the implrt name same

OR

import {baseData,clean} from './Utility.js' ---> Both can be combined into 1 import statement

OR

import * as bunble from '.\Utility.js' ---> Import all as a bundle and use _bundle.x_ as a selector.
```

### Classes (Similar to C++)
```
\\ Definition

class Person{
    name = 'Max' ---> Property
    call = () => {...} ---> Method
}

\\Instantiation
const myPerson = new Person();

\\Usage

myPerson.call();
console.log(myPerson.name);
```

Example (Old Syntax)

```

class Human {
    constructor() {
        this.gender = 'Male';
    }

    printGender() {
        console.log(this.gender));
    }
}

class Person extends Human { ---> Inherits from Human class
    constructor() {
        super(); ---> Instnatiates the Parent Class
        this.name = 'Sam'.
        this.gender = 'Female';
    }

    printName() {
        console.log(this.name));
    }
}


const person = new Person();
person.printName();
person.printGender();
```

Example (New Syntax)

```

class Human {
    gender = 'Male';

    printGender = () => {
        console.log(this.gender));
    }
}

class Person extends Human {
    name = 'Max';
    gender = 'female';
    
    printName = () => {
        console.log(this.name));
    }
}


const person = new Person();
person.printName();
person.printGender();
```

### Spread / Rest Operator

Spread - Used to split up an array or object property

```
const newArray = [...oldArray,1,2];
const newObject = {...oldObject,newProp:5} ---> Owerwrites old property with same name
```

Rest - Used to merge a list of all function arguments into an array

```
function sortArgs(...args){
    return args.sort();
}
```

Example

```
\\ Spread

const numbers = [1,2,3];
const newNumbers = [...numbers,4]; ---> This has 4 elemets with elemets of original array becoming the elements of the new array.

const newNUmbers = [numbers,4]; ---> This has 2 elements with the olf array being a single element of the new array

const person = {
    name: 'Max'
}

const newPerson
{
    ...person,
    age: 28
}
```

```
\\ Rest

const filter = (...args) => {
    return args.filter(el => el === 1);
}
```

### Destructuring

Allows us to easily extract array elements or object properties and store them in variables.

```
\\ Array Destructuring

[a,b] = [1,2]
sonsole.log(a) //1
sonsole.log(b) //2

\\ Object Destructuring

[name] = {name: 'Max' , age: 20}
console.log(name) //Max
console.log(age) // Undefuned
```
Example

```
\\ Array Destructuring

const numbers = [1,2,3];
[n1 , , n3] = numbers;
console.log(n1,n3) // 1 3
```

Primitive Datatypes are copied.
Arrays, Objects, etc are referred.

Some Array Functions-

- map()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

- find()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

- findIndex()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex

- filter()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

- reduce()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b

- concat()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b

- slice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
s
- plice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

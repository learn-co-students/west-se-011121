## SWBATs 
- Create a class using both ES5 and ES6 syntaxes. In both syntaxes, students should be able to:
- Write a constructor
- Instantiate a new object
- Write instance methods for JS classes
- Write 'class' methods for JS classes

|                         | Factory Functions  | Constructor Functions | Class Syntax |
| ----------------------- | ------------------ | --------------------- | ------------ |
| Syntactically Appealing |   Y                 |    N**                   |   Y           |
| Performant              |   N*                 |   Y                    |    Y          |
| Compatible              |   Y                 |    Y                  |      N***        |

* No Prototype, we recreate the method every time we create a character, even though they're the same
** Constructor functions force us to separate our data and behavour, making it comparatively harder to read
*** ES6 isn't compatible with all browsers, but we can use tools like Babel to transpile our ES6 into earlier versions of Javascript

[Bable repl](https://bablejs.io/in/repl)
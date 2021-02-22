# Intro to the DOM 📜

## SWBATs
- Defind the DOM and DOM nodes
- Query the DOM using selectors
- Manipulate the DOM by adding, removing, and editing the properties of DOM elements
- Use developer tools to debug

### The Document Object Model Overview
- What is the DOM?
  - The DOM (Document Object Model) is a representation of an HTML document as a **tree** that can be manipulated with JavaScript
  - Javascript is a language created to manipulate the DOM
  - "[JavaScript] DOM methods allow programmatic access to the tree; with them you can change the document's structure, style or content." - [MDN DOM Reference](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model). In other words, JavaScript allows us to **C**reate, **R**ead (find), **U**pdate, and **D**elete DOM nodes and _dynamically_ manipulate web pages.


## The DOM is a Tree 🎄

- What is a tree in computer science? A data structure that represents some hierarchical structure; parent nodes (elements), child nodes, sibling nodes. These structures are called trees because they look like inverted trees:

![tree](https://webdocs.cs.ualberta.ca/~aixplore/learning/DecisionTrees/InterArticle/graphics/inverted-tree.gif)

- Here is another representation of a tree with a root node and several children or branches:

![tree data structure](https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Binary_tree.svg/300px-Binary_tree.svg.png)

- Here is a representation of our HTML as a tree. This is the DOM:

![tree structure via tutorial republic](https://www.tutorialrepublic.com/lib/images/html-dom-tree.gif)

---

- DOM (Document Object Model)
  - The DOM is a tree structure with several child `nodes`. All of the elements in the tree are related to each other. Some elements may have children:

```html
<!-- document.body gives us the body node -->
<body>

    <div id="outer-node"><!-- div is a child of body -->
      <div><!-- this div is a child of outer-node -->
        <div>
          <h1>Internet Memes</h1>
        </div>
      </div>
    </div>
</body>
```

---
## Brief tour of Developer Tools

- Open the Dev Tools by right-clicking on the page and selecting ‘View Page Source’ from the context menu
- View DOM in the ‘Elements’ tab
- Show that HTML is directly editable in the main panel
- Show ‘Styles’ tab to view and manipulate CSS
- Show pointer feature to find elements by hovering over the DOM
- JS Console
- If they haven’t seen it already, show them how the console works

## CSS Selectors 

- Individual selectors
    - Class `.class`
    - ID `#id`
    - Tag `div`
- Combining Selectors
    - Space between `#parent .child`
    - Chain `div.image.highlighted`

## Selecting DOM Nodes 

- Understand types that are returned form selecting a DOM node with JavaScript
 -Understand how to use CSS selectors
- Methods
```javascript
  node.querySelector('#unique-element')
  node.querySelectorAll('.some-shared-class')
  node.getElementsByTagName('body')[0]
  node.getElementById('unique-element')
  node.getElementsByClassName('some-shared-class')
```
- Mention that NodeList is array-like, but does not have iterators built on it. Can be borrowed from Array.prototype
- Chain CSS selectors to get greater specificity

## Modifying DOM Nodes 

- Storing node in a variable `let body = document.querySelector('body')`
- Changing attributes `body.style.backgroundColor = "red"`
- `innerText` and `textContent` vs. `innerHTML`
- Removing elements `document.removeChild(body)`

## Creating DOM Objects 

Instantiating new elements `let element = document.createElement('img')`
Adding attributes to elements `element.src = 'http://www.coooolimage.com'`
Appending to node `document.body.appendChild(element)`


### Removing Nodes
- `node.removeChild(childNode)` will remove a particular child
- `node.remove()` will remove the node on which it was called:

```html
<div id="outer-node">
  <div>
    <div>
      <h1>Internet Memes</h1>
    </div>
  </div>
</div>

<div id="container">
  <p>Add Images Here</p>
  <!-- <img src=""> -->
</div>
```

```js
const innerH1 = document.querySelector('#outer-node h1')

innerH1.remove() //removes the node from the page

//OR

const container = document.querySelector('#container')

const containerPTag = document.querySelector('#container p')

container.removeChild(containerPTag) //removes the child p tag
```


# Activity (15 minutes) 

Go to your favorite websites and modify the DOM programmatically. Wikipedia and Twitter are good examples. 

- Select elements and save them to variables
- Delete at least 2 elements
- Modify elements (e.g., replace image url, change text, change CSS)
- Create new elements and add to page

- Think programmatically about the DOM; use iteration and multiple CSS selectors

    - Change all instances of one word
    - Replace all images on only a certain portion of the DOM
    - Change every other header
    - Bonus (Hard): replace all elements of one tag to another (e.g., p to h1)

---

  - A note about the choice to use `forEach` instead of `map`. Since we do not care about the return value of our iterator, `forEach` is fine here. If the return value––**mapped** or transformed array––mattered, then we could have mapped over the array.

---

## Manipulating the DOM with JavaScript Chart

| Selector name                      | Return shape   | Return type    | Live? | Reference             | can i call forEach? |
| ---------------------------------- | -------------- | -------------- | ----- | --------------------- | -------- |
| `document.getElementById()`        | Single element | Element        | N/A   | https://goo.gl/8cHGoy | N/A      |
| `element.getElementsByClassName()` | Collection     | HTMLCollection | Yes   | https://goo.gl/qcAhcp | No       |
| `element.getElementsByTagName()`   | Collection     | HTMLCollection | Yes   | https://goo.gl/QHozSh | No       |
| `element.querySelector()`          | Single element | Element        | N/A   | https://goo.gl/6Pqbcc | N/A      |
| `element.querySelectorAll()`       | Collection     | NodeList       | No    | https://goo.gl/vTfXza | Yes      |

---

## External Resources:

- [MDN Article on the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- [MDN Article on CSS Class Selectors][mdn-css-class]
- [MDN Article on CSS ID Selectors][mdn-css-id]
- [MDN Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)
- [MDN NodeList reference](https://developer.mozilla.org/en-US/docs/Web/API/NodeList)
- [MDN HTMLCollection reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection)
- [CSS Selectors Cheatsheet](https://guide.freecodecamp.org/css/tutorials/css-selectors-cheat-sheet/)
- [MDN Document.createElement()](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
- [MDN Document.createElement()](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
- [MDN Element.innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)
- [When are Selected HTML Elements Live](https://stackoverflow.com/questions/28163033/when-is-nodelist-live-and-when-is-it-static)
- [Difference Between the DOM and the BOM](https://stackoverflow.com/questions/4416317/what-is-the-dom-and-bom-in-javascript)


[mdn-css-class]: https://developer.mozilla.org/en-US/docs/Web/CSS/Class_selectors
[mdn-css-id]: https://developer.mozilla.org/en-US/docs/Web/CSS/ID_selectors

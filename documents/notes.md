- What's the difference between Element and HTMLElement?
https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement
HTMLElement refers explicitly to an HTML element whereas Element may refer to an XML element. However, HTMLElement is technically a subset of Element.

- insertAdjacentHTML vs insertAdjacentElement
insert positions:beforebegin, afterbegin, beforeend, afterend
https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML
https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement
insertAdjacentElement() is used to insert an element which is already in the Dom. You can get this element with getElementById() for example. https://www.w3schools.com/jsref/met_node_insertadjacentelement.asp
insertAdjacentHtml() is used to insert html code. https://www.w3schools.com/jsref/met_node_insertadjacenthtml.asp

- Add keyboard listener
```
class GameControl {
    constructor() {
        this.init();        
    }

    // add keyboard listener
    init = () => {
        document.addEventListener('keydown', this.keydownHandler.bind(this));
    }

    keydownHandler = (event: KeyboardEvent) => {
        this.direction = event.key;
    }
}
```

- About bind()
```
document.addEventListener('keydown', this.keydownHandler.bind(this));
```
this refers to document instead of the class, because the its document.addEventListener's call back function, so the this refers to document. If we want this refers to the class, we have to use bind(). It actually creates a new function with the same name, and let this refers to the class.


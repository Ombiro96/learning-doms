//DOM manipulation

//Traverse the DOM

//Parent Node Traversal

let ul=document.querySelector("ul")

//console.log(ul.parentElement.parentElement)
//console.log(ul.parentNode)

/*const html=document.documentElement;
console.log(html.parentNode)
console.log(html.parentElement)*/

//Child Node Traversal

//console.log(ul.childNodes);
//console.log(ul.firstChild);
//console.log(ul.lastChild);

//ul.childNodes[1].style.backgroundColor="blue"

//console.log(ul.children);


//Sibling Node Traversal

const div=document.querySelector("div")
console.log(div.childNodes)
console.log(ul.previousElementSibling)
console.log(ul.nextSibling)

ul.previousElementSibling.style.backgroundColor="green"
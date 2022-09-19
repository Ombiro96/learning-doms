//DOM manipulation

//GetElementById()
//const title=document.getElementById("main-heading");
//console.log(title);

//GetElementByClassName()
//const listItems=document.getElementsByClassName("list-items");
//console.log(listItems);

//GetElementByTagName()
//const listItems=document.getElementsByTagName("li");
//console.log(listItems);

//querySelector()
//const container=document.querySelector('div');
//console.log(container);

//querySelectorAll()
//const container1=document.querySelectorAll('div');
//console.log(container1);

//const listItems= document.querySelectorAll('.list-items');


//for(let i=0; i< listItems.length; i++){
 //   listItems[i].style.fontSize = '3rem';
//}

//const title=document.querySelector("#main-heading");

//title.style.color = 'red';

const ul = document.querySelector('ul');
const li = document.querySelector('li');

//adding elements
ul.append(li)
//modify the text

li.innerText='X-men';

//Modifying attributes and classes

li.setAttribute('id', 'main-heading');
li.removeAttribute('id');

const title= document.querySelector('#main-heading');
console.log(title.getAttribute('id'));
//const firstListItem= document.querySelector('.list-items');
//diff between innerText, innerHTML, textContent
//console.log(firstListItem.innerText);
//console.log(firstListItem.innerHTML);
//console.log(firstListItem.textContent);
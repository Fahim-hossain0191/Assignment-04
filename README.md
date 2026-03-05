

## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

### 2. How do you create and insert a new element into the DOM?

### 3. What is Event Bubbling? And how does it work?

### 4. What is Event Delegation in JavaScript? Why is it useful?

### 5. What is the difference between preventDefault() and stopPropagation() methods?


1. Ans:
--->> getElementById is used to get a element from html with a id that means suppose a element such as div has an id ,if we want to get the element in javascript we should call element using id, 
--->>  getElementsByClassName is used to get a element or number of elements from html with class name that means suppose a element or bunch of element has same class,if we want to get those elements in javascript we should call element using class. 
--->>  querySelector is basically target all kind of css selector such as (html tags, id ,class) etc but return the first matching element.  
--->>  querySelector is basically target all kind of css selector such as (html tags, id ,class) etc but return all elements matching with the selector.


2. Ans:

 //Creating a element 
  
   //Finding the parent element first where we have to insert a new element
   const container=document.getElementById('container);

  const element=document.createElement('div');

  element.innerHTML=`<p>Hello from new element.</p>`;

  container.appendChild(element);

3. Ans: 
 
 Using event bubbles in javascript we can find parentNode, childNode. Suppose when an event occurs ,it triggers the element and then we can go up to its parent.

4. Ans:
 
 Adding event listeners to every single element is very messy ,so add a event listener to a parent element and then handle the child elements using the parent element event listener is Event delegation.

 --->> It is useful because: 
        1. Can read the code comparatively easier
		2. Code takes lasser sapace and memory
		3. We can dynamicaaly access all the child elements

5. Ans: 

--->> PreventDefault() is used for stop form submission or default browser action
 
--->> stopPropagation() is used for , prevent event triggers to go beyond trigers area, it restrict the event between trigers area.


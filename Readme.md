### Front-end Technologies

- HTML
- CSS
- JavaScript
- Bootstrap framework
- Angular framework
- ReactJs

### Back-end Technologies

- Node.js
	- express.js
	- nodemoon
	- cors
	- dotenv
- PHP
- C#
- Java
- Python

### Databases
- MongoDb
- Mysql
- SQLite
- Firebase
- Postgressql
- Oracle

### VCS or Source Code Management
	
	- Distributed VCS
		- Git, Mercurial
	- Remote (Central) VCS
		- Github,Bitbucket
	
### Git

- git init
- git add filename
- git add filename1 fiename5 filename100(Add specified files)
- add . or git add --all(to add all files)
- git status (shows files added or not added)
- commit data with commit message
- trying to add new data

### HTML

- Hyper Text Markup Language
- Latest version of html is html5
- Sematic elements
	- describes the developer
		- some of them are :
			- header
			- article
			- section 
			- asider 
			- fooder 
			- table
- Block level elements
	- occupy entire width of browser
	- some of them are
		- h1 to h6 (headings)
		- paragraphs
		- div
		- all sematic elements
		- text will start from new line
- Inline elements
	- span
	- img
	- a
	- nav
	- form 
	- input
	- textarea
	- legend
	- sup
	- sub

### REFERENCE LINKS

- flaticon.com

### TASK

- audio 
- video
- canvas
- progress
- meter
- data list 
- select



### CSS

+ Cascading Style Sheets
+ Types of CSS
	- Inline CSS
	- Internal CSS
	- External CSS

+ syntax for CSS  //for intetrnal and external CSS

...
selector {
	css properties
}
...

### selectors
+ Simple selectors
	- universal selectors(*)
	- By element name
	- Grouping selector (,)
	- Class selector(.)
	- Id selector(#)
+ Combibnators
	+ Descendant selector ( )
	+ Child selector (>)
	+ Adjacent sibling selector (+)
	+ General sibling selector(~)
+ Pseudo class selector
+ Pseudo element selector
+ Attribute selector

### Box Model
  + margin
  + border
  + padding

### Tasks

- index.html
- login.html
- registration.html

### Flex Box

+ display
+ position
	- static
	- relative
	- absolute
	- fixed 
	- sticky
+ align-content
+ align-items
### responsive web design
### Flex-Box
- display 
	- flex
		- flex wrap
		- justify - content
		- flex-direction
		- flex-flow

### Media Queries
- we write css code to display same content in different smiles
- Extra small devices (Mobiles)
	- max-width: 600px
- Small devices (Large phones)
	- min-width: 600px
- Medium (Small Laptops)
	- min-width: 768px
- Large (Large laptops or desktops)
	- min-width: 992px
- Extra large devices
	- min-width: 1200px
 ...
 - syntax :
	@media only screen(max-width:320px) and
	(max-width:500px{
		CSS code
	}
...
### Bootstrap4.6
- It is a CSS Framework
-  type of modes
  - offline
  - online
	- CDN links
+ background color - bg
+ text-white(for color of text)
+ margin in bootstrap (m-*(0.5))
	- 0 --> 0rem
	- 1 --> 0.25rem (4px)
	- 2 --> 0.50rem (8px)
	- 3 --> 1.00rem (16px)
	- 4 --> 1.50rem (24px)
	- 5 --> 3.00rem (48px)
	- ml-8 (margin-left)
	- m ( margin in all directions)
	- mt (margin-top)
	- mr (margin-right)
	- mb ( margin-bottom)
+ Padding (padding-left --> p1-5)

+ colors 
	- primary
	- secondary
	- info
	- success
	- warning
	- danger
	- light
	- dark
	- white
+ We can use color classes for 
	- Buttons (btn btn-primary)
	- text (text-white)
	- background (bg-secondary)
	- alerts (alert alert-primary)
 + grid system
	- 	col-sm-12
	- sm (small devices)
	- md (medium devices)
	- lg(large devices)
	- xl (extra large devices)
	- modal
	- table

### Java Script

- text based programming language
- provided OOPS concepts
- we can run in client-side and server side for dynamic web applications
- to apply dynamic behaviour of the website we use javascript
- introduced in 1995
- java script is loosely couple and dynamic language
	- no need to mention data type hence called loosely coupled
+ by 'BRENDEN EICH' NAMED THEN AS (ES262)
- ECMA (European Country Manufacture Association) (ES-4)
- we will use ES-6
	- let & const
	- keyword to create variable   "var"
	- map()
	- arrow function
	- classes
	- spread operator
	- rest operator
+ variables and data types
+ Data types
	- number (digits)
	- BigInt ( number greater than 2^53-1)
	- string 
	- Boolean
	- undefine
	- null
	- Object  ****
	- Arrays  ****
+ variables
	- var, let & const
	- scope
		 - function level --> var
		 - block level --> let & const 
	- Redefine  - let and var but not const
	- Redeclare - only using var

** Hoisting :
    first print statement
	and then declaration statement
	undefined error will be output

+ objects 
	- object is a pair of key and value
	- erntity that has state and behaviour

	- syntyax :
	...
		name : "Kalyan";
	...


+ arrays
	let employees = ["ram","chsch","saufcgiugf"]


### Alerts

+ to generate notifications
	- alert
	- prompt (to take input from the user)
	- confirm

### Alerts 
	- alert("Regestration is completed successfully")

### Prompt(to take input)
	- let number1= prompt("enter a number********")

### Confirm
	- confirm("syafgwieg")



### console statements

- console.log()
- console.info()
- console.warn()
- console.error()


### Spread Operator

- Syntax :
...
   ...variablename   
...

- to change array elements from one array to another[swamp]

### Rest Parameter

+ to handle function parameters

- syntax :
...
   ...parameter
...

# De-structuring of array

- let employees=["sun","moon","star"]
 let [sun,moon,start,...data]=employees

### Functions

- function with function name

syntax :
...
   function demo(x,y)
   {
	   return x+y
   }
   demo()
...

- anonymous ( functions without function name)

syntax :
...
 let demo= function(x,y)
{
    return x+y
}
console.log(demo(3,4))
    
...

- Arrow function
...
let demo=(x,y) => {
	return x*y
} 
console.log(demo(x,y))

- time laps in functions

setTimeout(function(){
    console.log("welcome")
},3000)

- for loop

let employees=["ram","ravi","rashi"]
for (let i=0; i<employees.length;i++)
{
    console.log(employees[i])
}

- for loop using "in".......for-in
let employees=["ram","ravi","rashi"]
for(let i in employees){
    console.log(i)
}

- for loop using "of".......for-of
let employees=["ram","ravi","rashi"]
for(let i of employees)
{
    console.log(i)
}

+ forEach() --> (ES-5)
+ map() --> (ES-6)

- example for map
let employees=["ram","ravi","rashi"]
let result=employees.map(function(element,index){
    return element+"k"+index
})
console.log(employees)
console.log(result)

- example for forEach
et employees=["ram","ravi","rashi"]
employees.forEach(function(element){
    console.log(element+"OK")
})

- example for map using arrow


let employees=["ram","ravi","rashi"]
let result= employees.map((element,index) =>{
    return element+"K"+index
})
console.log(result)

### DOM

- Document Object Model
- document
- history 
- window 
- navigator
	+ DOM methods
		- getElementsbyId()
		- getElementsByClassname


### imp****

- `querySelector`
- `inner text`
- `textContent`
- `append`
- `appendChild`
- `innerHTML`
- `setAttribute()`
- `classList `
- `style`
- `src`

### JSON

+ JavaScript Object Notation
	- to exchange information between application and server

Syntax :
...
{
	"name": "Kalyan",
	"salary": "36 LPA",
	"designation": "MERN DEVELOPER",
	"mobile" :9807654321
}
...

+ Ajax call or Promises (fetch API) or axios












	
 




























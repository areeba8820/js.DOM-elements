//  document.getElementById('demo').innerHTML = "Typically efficient, especially when dealing with"

//  const element = document.getElementById("intro");

//  document.getElementById("demo").innerHTML = 
//  "The text from the intro paragraph is: " + element.innerHTML;

//  const element = document.getElementsByTagName("p");

//  document.getElementById("demo").innerHTML = 'The text in first paragraph is: ' + element[0].innerHTML;

// const x = document.getElementById("main");
// const y = x.getElementsByTagName("p");
// document.getElementById("demo").innerHTML = 
// 'The first paragraph (index 0) inside "main" is: '
// + y[0].innerHTML;

// const x = document.getElementsByClassName("intro");
// document.getElementById("demo").innerHTML = 
// 'The first paragraph (index 0) with class="intro" is: ' + x[0].innerHTML;

// const x = document.querySelectorAll("p.intro");
// document.getElementById("demo").innerHTML = 
// 'The first paragraph (index 0) with class="intro" is: ' + x[0].innerHTML;

// const x = document.forms["frm1"];
// let text = "";
// for (let i = 0; i < x.length ;i++) {
//   text += x.elements[i].value + "<br>";
// }
// document.getElementById("demo").innerHTML = text;

alert("Hello World");
setTimeout(() => {
   alert("I am inside set time out")
} ,3000);
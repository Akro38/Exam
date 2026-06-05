let currentTask = 0;
let completed = [];

// ================= SHOW TASK =================
function showTask(n){
currentTask = n;

document.getElementById("result").innerText = "";

// базовый UI всегда очищаем
document.getElementById("taskContent").innerHTML = "";

switch(n){

case 1:
document.getElementById("taskTitle").innerText="Reverse String";
document.getElementById("taskDesc").innerText="Reverse a string";
document.getElementById("taskContent").innerHTML=
`<input id="i1">`;
break;

case 2:
document.getElementById("taskTitle").innerText="Extract Characters";
document.getElementById("taskDesc").innerText="3rd and 4th characters";
document.getElementById("taskContent").innerHTML=
`<input id="i2">`;
break;

case 3:
document.getElementById("taskTitle").innerText="Longest Word";
document.getElementById("taskDesc").innerText="Find longest word";
document.getElementById("taskContent").innerHTML=
`<input id="i3">`;
break;

case 4:
document.getElementById("taskTitle").innerText="Toggle Case";
document.getElementById("taskDesc").innerText="Upper ↔ Lower";
document.getElementById("taskContent").innerHTML=
`<input id="i4">`;
break;

case 5:
document.getElementById("taskTitle").innerText="Substring Index";
document.getElementById("taskDesc").innerText="Find index of substring";
document.getElementById("taskContent").innerHTML=
`<input id="a5"><input id="b5">`;
break;

case 6:
document.getElementById("taskTitle").innerText="Count Text";
document.getElementById("taskDesc").innerText="Words, chars, spaces, symbols";
document.getElementById("taskContent").innerHTML=
`<input id="i6">`;
break;

case 7:
document.getElementById("taskTitle").innerText="Fruits Array";
document.getElementById("taskDesc").innerText="Show 3rd element";
document.getElementById("taskContent").innerHTML=
`<p>Apple, Banana, Orange, Mango</p>`;
break;

case 8:
document.getElementById("taskTitle").innerText="Last Element";
document.getElementById("taskDesc").innerText="Popup input array";
document.getElementById("taskContent").innerHTML=
`<input id="i8">`;
break;

case 9:
document.getElementById("taskTitle").innerText="10th Character";
document.getElementById("taskDesc").innerText="Find 10th character";
document.getElementById("taskContent").innerHTML=
`<input id="i9">`;
break;

case 10:
document.getElementById("taskTitle").innerText="Array Display";
document.getElementById("taskDesc").innerText="Loop array output";
break;

case 11:
document.getElementById("taskTitle").innerText="Map Double";
document.getElementById("taskDesc").innerText="Double array values";
break;

case 12:
document.getElementById("taskTitle").innerText="Remove Duplicates";
document.getElementById("taskDesc").innerText="Unique array";
break;

case 13:
document.getElementById("taskTitle").innerText="Splice Delete";
document.getElementById("taskDesc").innerText="Delete elements";
break;

case 14:
document.getElementById("taskTitle").innerText="Splice Insert";
document.getElementById("taskDesc").innerText="Insert elements";
break;

case 15:
document.getElementById("taskTitle").innerText="Calculator";
document.getElementById("taskDesc").innerText="+ - * / operations";
document.getElementById("taskContent").innerHTML=
`<input id="n1"><input id="n2"><input id="op">`;
break;

case 16:
document.getElementById("taskTitle").innerText="Add Numbers";
document.getElementById("taskDesc").innerText="Addition function";
document.getElementById("taskContent").innerHTML=
`<input id="a16"><input id="b16">`;
break;

case 17:
document.getElementById("taskTitle").innerText="Subtract Numbers";
document.getElementById("taskDesc").innerText="Subtraction function";
document.getElementById("taskContent").innerHTML=
`<input id="a17"><input id="b17">`;
break;

case 18:
document.getElementById("taskTitle").innerText="Multiply Numbers";
document.getElementById("taskDesc").innerText="Multiplication function";
document.getElementById("taskContent").innerHTML=
`<input id="a18"><input id="b18">`;
break;

case 19:
document.getElementById("taskTitle").innerText="Divide Numbers";
document.getElementById("taskDesc").innerText="Division function";
document.getElementById("taskContent").innerHTML=
`<input id="a19"><input id="b19">`;
break;

case 20:
document.getElementById("taskTitle").innerText="10 Digit Validation";
document.getElementById("taskContent").innerHTML=
`<input id="i20">`;
break;

case 21:
document.getElementById("taskTitle").innerText="Type Check";
document.getElementById("taskContent").innerHTML=
`<input id="i21">`;
break;

case 22:
document.getElementById("taskTitle").innerText="Numbers Only";
document.getElementById("taskContent").innerHTML=
`<input id="i22">`;
break;

case 23:
document.getElementById("taskTitle").innerText="Letters Only";
document.getElementById("taskContent").innerHTML=
`<input id="i23">`;
break;

case 24:
document.getElementById("taskTitle").innerText="Signup Form";
document.getElementById("taskContent").innerHTML=
`<input id="i24">`;
break;

case 25:
document.getElementById("taskTitle").innerText="Display Data";
document.getElementById("taskContent").innerHTML=
`<input id="i25">`;
break;

case 26:
document.getElementById("taskTitle").innerText="Email Validation";
document.getElementById("taskContent").innerHTML=
`<input id="i26">`;
break;

case 27:
document.getElementById("taskTitle").innerText="Person Object";
break;

case 28:
document.getElementById("taskTitle").innerText="Display Person";
break;

case 29:
document.getElementById("taskTitle").innerText="Stopwatch";
break;

case 30:
document.getElementById("taskTitle").innerText="Change Background";
break;

}

}

// ================= RUN TASK =================
function runTask(){

let res = "";

switch(currentTask){

case 1:
res = i1.value.split("").reverse().join("");
break;

case 2:
res = i2.value[2]+" "+i2.value[3];
break;

case 3:
res = i3.value.split(" ").reduce((a,b)=>a.length>b.length?a:b);
break;

case 4:
res = [...i4.value].map(c=>c===c.toUpperCase()?c.toLowerCase():c.toUpperCase()).join("");
break;

case 5:
res = a5.value.indexOf(b5.value);
break;

case 6:
res =
"chars:"+i6.value.length+
" words:"+i6.value.split(" ").length;
break;

case 7:
res = ["Apple","Banana","Orange"][2];
break;

case 8:
res = i8.value.split(",").pop();
break;

case 9:
res = i9.value[9] || "Invalid";
break;

case 10:
res = ["A","B","C"].join(" ");
break;

case 11:
res = [1,2,3].map(x=>x*2);
break;

case 12:
res = [...new Set([1,1,2,3])];
break;

case 13:
let d13=[1,2,3,4]; d13.splice(1,1);
res=d13;
break;

case 14:
let d14=[1,3]; d14.splice(1,0,2);
res=d14;
break;

case 15:
let x=+n1.value,y=+n2.value;
res = op.value=="+"?x+y:op.value=="-"?x-y:op.value=="*"?x*y:x/y;
break;

case 16:
res = +a16.value + +b16.value;
break;

case 17:
res = +a17.value - +b17.value;
break;

case 18:
res = +a18.value * +b18.value;
break;

case 19:
res = +a19.value / +b19.value;
break;

case 20:
res = /^\d{10}$/.test(i20.value)?"Valid":"Invalid";
break;

case 21:
res = isNaN(i21.value)?"String":"Number";
break;

case 22:
res = /^\d+$/.test(i22.value);
break;

case 23:
res = /^[a-zA-Z]+$/.test(i23.value);
break;

case 24:
res = "Signup Done";
break;

case 25:
res = i25.value;
break;

case 26:
res = i26.value.includes("@");
break;

case 27:
res = {name:"John",age:20,gender:"M"};
break;

case 28:
res = "John | 20 | M";
break;

case 29:
res = "Stopwatch Running";
break;

case 30:
document.body.style.background =
"#"+Math.floor(Math.random()*999999);
res = "Background Changed";
break;

}

// output
document.getElementById("result").innerText =
JSON.stringify(res);

// completed list
completed.push("Task "+currentTask);

document.getElementById("completed").innerHTML =
completed.map(t=>`<div class="item">${t}</div>`).join("");
}

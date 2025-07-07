// ...Outputs...

// alert("Hello World");
// console.log("what's about you");
// document.write("hello dear");
// prompt("Whats your name");



// let a=prompt("Enter your first name");
// let b=prompt("Enter your last name");
// console.log(a,b);


// .....SINGLE....

// var a ="syeda ansa sherazi";
//  document.write( "my name is");
//  document.write(a);
// console.log(a)



// .......Multiple Time......

// var a="syeda shayan sherazi";
// document.write("my name is")
// document.write(a)

// document.write("my name is")
// document.write(a)
// document.write("my name is")
// document.write(a)
// document.write("my name is")
// document.write(a)


// ...variable phly define kar sakty han value bad ma asign kar sakty han ...

// var firstname, lastname, age;
// firstname="ansa";
// lastname="sherazi";
// age=19;
// document.write("my first name is")
// document.write(firstname);


// ...Multiple Time....

// var firstname, lastname, age;
// firstname="ansa";
// lastname="sherazi";
// age=19;

// document.write("my first name is ")
// document.write(firstname);

// document.write("<br>my last name is ")
// document.write(lastname);

// document.write("<br>I am ")
// document.write(age);
// document.write("year old")


// ...3 way to declare variable...

// ...var concept...

// var myname="ansa sherazi" ; 
// var myname="shayan";
// var myname;
// myname="rehan";
// document.write(myname);

// ...let concept...

// let myname;
// myname="ansa sherazi";
// document.write(myname);

// ...const concept...
// const myname="shayan";
// document.write(myname);
















// ...Array...
//   let a=prompt("enter your class");
//let name=['maths','bio','physics'];
//name[2]='urdu';  //updating
// console.log(a)
//document.write(name)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById("demo").innerHTML = fruits.toString();


       //Book page number 338
       //Declaration using Array object and then Initialization 
       //var marital_status =newArray(3);
       //marital_status[0]='single';
       //marital_status[1]='Married';
       //marital_status[2]='Divorced';
       //Declaration and Initialization
       //var marital_status=newArray('single','Married','Divorced');
       //Declaration and Initialization without Array
       //var marital_status=['single','Married','Divorced'];




        //     ARRAY METHOD

    // let a=[3,7,6,7,7,0];
//     end insert value "push"
//   a.push(88989);
//      start insert value "unshift"
// a.unshift(78);
//     start value delete "shift"
// a.shift()
//    last value delete "pop"
// a.pop()
// koi bhi hata sakty ho"splice"
// a.splice(2,1)
//    index number likhain gan tu value delete ho jay gi "delete"
// delete a[3]
//  value change
// a[4]=45
//     length pata karni ho tu "length"
// console.log(a.length)

//   console.log(a)



//    first item ka index number pata karny ka liya "indexOf"

// let cars=['City','Alto','Mehran','Vitz','Ciaz','Alto','Mehran']
// let a=cars.indexOf('Mehran')
// console.log(a)

     
//    last item ka index number pata karny ka liya "lastIndexOf" 

// let cars=['City','Alto','Mehran','Vitz','Ciaz','Alto','Mehran']
// let a=cars.lastIndexOf('Vitz')
// console.log(a)
    

//  agr hamay pata karna ha ya cheez hamary arry ma ha ya nhi tu "includes" 

// let cars=['City','Alto','Mehran','Vitz','Ciaz','Alto','Mehran']
// console.log(cars.includes('ferari'));


//   dono arry ko aps ma join karna ha tu "concat"

// let a=['Apple','mango','banana','orange','grapes'];
// let b=['pencile','pen','bag','book','copy'];
// let d=b .concat(a);
// console.log(d)

//   agr join karna chah rahy han tu bich ma kic cheez join karna chahty han wo cheez "join"
    
// let a=['pencile','pen','bag','book','copy'];
// let b=a.join(' ');
// console.log(b)










// ...Arithmetic Operators...
// var a=6;
// var b=7;
// var c=a%b;
// document.write(c)


// ...Increment...
// let a=7;
// ..pre increment..
// let y=++a;
// ..pre increment ma A or Y dono ki value same rahy gi 8 hi rahy gi..
// ..post increment ..
// let y=a++;
// .. post increment ma A ki value  8 ho gi lykin y ki value 7 hi rahy gi ..
// document.write(a);


// ...Decrement...
// let a=7;
// ..pre decrement..
// let y=--a;
// ..pre decrement ma A or Y dono ki value same rahy gi 6 hi rahy gi..
// ..post decrement ..
// let y=a--;
// .. post decrement ma  A ki value  6 ho gi lykin Y ki value 7 hi rahy gi ..
// document.write(a);


// ...condition if ...

// let tem=prompt("enter the temp degree");
// let tem=35;
// if (tem>35)
// if (tem<35)
// if (tem<=35)
// if (tem==35)
// {
//     console.log("too soo much hote");
// }


// ...else...

// let a=prompt("enter your value");
// let b=20;

// if(a==b)
// {
//     console.log("wow");
// }
//  else{
//     console.log("nhi bhai baraber nhi ha tari sari hoi value");
//  }



// ...else if...

// let temp = prompt("Enter your Temperature");
// if(temp >= 34)
// {
//     console.log("Today weather is too Hot!")
// }
// else if(temp < 18)
// {
//     console.log("Today weather is too Cold!")
// }
// else if(temp < 34)
// {
//     console.log("Today weather is too Sunny!")
// }
// else
// {
//     console.log("You entered incorrect value")
// }



// ...logical operator...
//     ...And...

// let gift=prompt("Enter your age");

// if(gift >=20 && gift <=40)
// {
//     console.log("congratulations🎉");
// }
// else if(gift < 20)
// {
//     console.log("sorry");
// }
// else if(gift > 40)
// {
//     console.log("matlb kia ha free tumhy gift chahy");
// }
// else{
//     console.log("sorry you enterd incorrect value");
// }


// ...logical operator...
//     ...And...
// let gift=prompt("Enter your age");
// a=20;
// b=40;
// if(gift==a || gift==b)
// {
//     console.log("congratulations🎉");
// }
// else if(gift < 20)
// {
//     console.log("sorry");
// }
// else if(gift > 40)
// {
//     console.log("matlb kia ha free tumhy gift chahy");
// }
// else{
//     console.log("sorry you enterd incorrect value");
// }

// ...logical operator...
//         Not
// let isgift=prompt("enter value")
// if(!isgift ==="yes")
// {
//     console.log("congratulations🎉");
// }
// else{
//     console.log("sorry");
// }


// let a=prompt("enter value");
// let x = 6;
// let y = 3;


// if(!is(x === y) );
// {
//     console.log();
// }

// !(x > y);



// ... see book page number 327..

// let username=prompt("enter username");
// let password=prompt("enter password");
// if(username!="" && password !=""){
//     if(username=="admin" && password=="admin123"){
//         alert('login successful')
//     }
//     else{
//         alert('login falid')
//     }
// }


    //   Switch Case
    // let day = parseInt(prompt("Enter day"));
    // switch(day)
    // {
    //     case 1:
    //     console.log("saturday");
    //     break;
    //     case 2:
    //     console.log("sunday");
    //     break;
    //     case 3:
    //     console.log("monday");
    //     break;
    //     case 4:
    //     console.log("tuesday");
    //     break;
    //     case 5:
    //     console.log("wednesday");
    //     break;
    //     case 6:
    //     console.log("thursday");
    //     break;
    //     case 7:
    //     console.log("friday");
    //     break;
    //     default:
    //         console.log("sorry");
    //         break;
    // }


// ...LOOP...
//      For Loop

// for( let i=11; i<=10; i++)
// {
//     console.log(i);
// }


// for( let i=0; i<=10; i++)
// {
//     console.log(i);
// }

//      Even Number 
//     for( let i=1; i<=10; i++)
// {
//     if(i % 2 === 0)
//     console.log(i);
// }



    //  For Loop Book Page Number 332 Table

    //   var inputNum=prompt("enter any number");
    //   var result=0;
    //   document.write('multiples' +inputNum+ '<br/>');
    //   for (var i=1; i<=10; i++)
    //     {
    //         result=inputNum*i;
    //         document.write(inputNum+ '*' +i+ '=' +result+ '<br/>');
    //     }    



//       Odd Number 
//    for( let i=1; i<=10; i++)
//    {
//      if(i % 2 !== 0)
//      console.log(i);
//    }


// ...ghalti sa bhi is code ko mat chlana warna barbad ho jaou ga ...

// for(let i=0; 0<=10; i++)
// {
//     console.log(0);
// }

//        While Loop
//     let i=0;
//     while(i<=10){
//         i++;
// console.log(i);
//     }

    //   Do While Loop
    // let i=0;
    // do{
    //     console.log(i);
    //     i++;
    // }while(i<=5);



//       FUNCTIONS
//    function name(a,b){
//     console.log(a+b);
//    }
//        Calling Function
//    name(50,50);





     // FUNCTION SCOPE

//      SUBTRACT
// function subtract()
// {
// let a = prompt("Enter first number")
// let b = prompt("Enter second number")

//     console sirf value print kary ga return nhi karta
 
//     console.log(a - b);
// }
// subtract();
// console.log("This is from function",'a');
     



//     GLOBAL SCOPE
//        ADDITION

// let a = prompt("Enter first number")
// let b = prompt("Enter second number")
// function add(){
//     console.log(a + b);
//     console.log("Vaue")
// }
// add();

//            RETURN

// function sum (a,b)
// {
//     console.log("This is the result of sum:")
//     console.log(a + b)
//     console.log("what")
//     return sum;
// }
// sum(10,10);


//           second example
// function square(a) { return a**2};

// console.log(square(2))



//      FUNCTION EXPRESSION
// let sum = function(a,b)
// {
//     console.log("this is" + (a+b) + "your value")
// }
// sum(30,40)



//  ARROW FUNCTION
// let subtract=(a,b)=>{
 //     console.log(a-b);
 // }
// subtract(30,20);


//       DATE METHOD

//      let a=new Date()
//      console.log(a)  
// console.log(a.getDate());
// console.log(a.getDay());
// console.log(a.getFullYear());
// console.log(a.getHours());
// console.log(a.getSeconds());
// console.log(a.getMilliseconds());
// console.log(a.getMinutes());
// console.log(a.getMonth() + 1);
// console.log(a.getTime());


//       NUMBER METHOD

// let num = 25;
// let num1 = "45";

// console.log(Number.isFinite(num))
// console.log(Number.isFinite(num1))


// let num = 2.36344334344334;

// console.log(num)
// console.log(num.toFixed(2))
// console.log(num.toPrecision(2))


//      MATH METHOD

// let a=Math.max(10,20,15,17,16,18,27,28,494,759);
// let a=Math.min(2,3,4,5,6,2,73,43,21)
// let a=Math.sqrt(16)
// let a=Math.cbrt(12)
// let a=Math.pow(3,5)
// let a=Math.abs(-10)
// let a=Math.round(5.7)
// let a=Math.floor(3.9)
// let a=Math.ceil(5.7)
// let a=Math.trunc(8.6)
// console.log(a)

  
    // STRING METHOD

    // let a=" what's your name?";
    // let b="how are you";
    // let c=49;
    // console.log(a.length);
    // console.log(b.toUpperCase());
    // console.log(a.toLowerCase());
    // console.log(c+90);
    // console.log(c.toString()+ 80);
    // console.log(a.search('First'));
    // console.log(b.replace('are','it'));



 

//           OBJECTS

//         const person={
//             firstName :'Ansa',
//             lastName :'sherazi',
//             age :19,
//             email:'ansasherazi14@gimal.com'
//         }
//         ...   New adding   ...

//         person.color='brown';

//         ...    Delete karna ha tu  ...

//         delete person.lastName;

//         ...   Or agr koi value single ma pata karni ha console ma    ... 

//         console.log(person.firstName);

// console.log(person);



// sir OWAIS
 
// var x = 5;
// var y = x + ++x + x++ + --x + x-- + x + ++x + --x; 
// //      5 +  6  +  6  +  6  + 6 +   5  +  6  + 5 

// console.log("Expected outcome of x is: ", x);
// console.log("Expected outcome of y is: ", y);
    
 













































//LET



// let firstname="syeda ansa";
// console.log(firstname);

// let city;
// city = "Lahore";
// console.log(city); 

// let country="lahore";
// country="islamabad";
// console.log(country);

// let a=10, b=38, c=89;
// console.log(a+b+c);

//  let d=10;
//  let f=67;
//  let z= d+f;
//  console.log(z);

//  let g=6;
//  let h=g+7;
//  console.log(h);

//   let  i=39;
//   let n=i*67;
//   console.log(i);

//   let s=89;
//   let v=67;
//   console.log("added",s+v);

  
// let first=89;
// let sec=67;
// let sum=first+sec;

// console.log("added",sum);
// console.log("added",sum*2);




//variables for Boolean

// let isstudent=true;
// console.log(isstudents)



   // double quotes space

// console.log("ansa"+ " " +"sherazi")





 //null undefined nan  difference

//  let a=null;           //Null
//  console.log(a);


//  let b;
//  console.log(b);          // undefined

  
//    let c="hello"/7;              //NAN   
//    console.log(c)





// Primitive Data type


// // String
// let myName = "Areeba";
// console.log( myName);             // Output: string

// // Number
// let age = 20;
// console.log(age);                 // Output: number

// // Boolean
// let isStudent = true;
// console.log( isStudent);              // Output: boolean

// // Undefined
// let city;
// console.log( city);                 // Output: undefined

// // Null
// let marks = null;
// console.log( marks);                  // Output: object (JavaScript ka bug)

// // BigInt
// let bigNumber = 12345678901234567890n;
// console.log(bigNumber);                  // Output: bigint

// // Symbol
// let uniqueId = Symbol("id");
// console.log( uniqueId);                  // Output: symbol










//composite Data type


// let person={name:"ansa",age:20};     //boject
// console.log(person);


// let person=["ansa", 20 ,"aptech"];            //array
// console.log(person);


//   function ansa(){
//     console.log("hello dear")             //function
//   }
//   ansa()








//bulit in function



//Alert
// let a="hai ansa"
// alert(a);



//Confirm
// let isconfirmed=confirm("are you sure you want to proceed?");

// if(isconfirmed){
//     alert("you confirmed")
// }
// else{
// alert("you cancelled")
// }



//ParseInt

// let c="6776";
//  let d=parseInt(c);
//  console.log(d);

  
//ParseFloat

//  let e="677.6";
//  let f=parseFloat(e);
//  console.log(f);
 

// isNaN() - Check karta hai ki value number hai ya nahi


// let value = "Hello";
// let isNumber = isNaN(value);    
// console.log(isNumber);     //true

//Prompt

// let userName = prompt("What's your name?");
// alert("Hello, " + userName + "!");

// var country = prompt("Enter your country name?","Pakistan")

// console.log("Your country name is " + country);






//Basic Operator


//unary operator

// let a=2;
// b=-a;
// console.log(b);

//book page number 310

let number=3;
alert('number after increment='+ ++number);
alert('number after decrement='+ number--);


// //binary operator

// let c=4;
// let d=89;
// let e=c+d;
// console.log(e);




//Arithmetic Operators

// let num1=76;
// let num2=68;

// //addition

// let a=num1+num2;
// console.log(a);

// //subtraction

// let b=num1-num2;
// console.log(b);

// //division
// let c=num1/num2;
// console.log(c);

// //modulo
// let d=num1%num2;
// console.log(d);

// //multiplication

// let e=num1*num2;
// console.log(e);

// //Exponention
// let f=num1**num2;
// console.log(f);


//increment

// var x = 2;

// var y = x + ++x + x + x++ + x;
// //      2 +  3  + 3 + 3 +  4 = 15

// console.log("Expected outcome of x is: ", x);
// console.log("Expected outcome of y is: ", y);




// var x = 5;
// var y = x + ++x + x++ + --x + x-- + x + ++x + --x; 
// //      5 +  6  +  6  +  6  + 6 +   5  +  6  + 5 

// console.log("Expected outcome of x is: ", x);
// console.log("Expected outcome of y is: ", y);


//decrement

// var  p= 15;
// var result = --p + p-- - --p + p++ - --p;
// //14 + 14 - 12 + 12 - 12


// console.log("Expected outcome of p is: ", p);
// console.log("Expected outcome of result is: ", result);



//arthimetic operator book page 309

// let loanamount=7882;
// let interest=6;
// let interestamount,totalamount;
// interestamount=loanamount*(interest/100);
// totalamount=loanamount+interestamount;
// document.write("<b>total amount to be paid($):</b>"+totalamount);














// //Concatenate
// let first=2;
// let second=34;
// console.log(first+second);     //36


// let one="2";
// let two="34";
// console.log(one+two);     //234



// let o=2;
// let t="hello";
// console.log(o+t); //2hello



// let z=2;
// let x="hello";
// console.log(z+" "+x); //2 hello


// let m=2;
// console.log(m+" "+"hello");  //2 hello
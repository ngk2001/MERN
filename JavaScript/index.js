// var b;
// b = 10;

// var b = "hello";

// let a;
// a = 30;
// a = 40;
// //let a=40;

// const c = 30;

// // const c;
// // c=10;
// const obj = {
//     rno: 12345,
//     name: "Kavin",
//     grade: 'c',
//     pass: true,
//     subjects: ["tamil", "english", "maths", "science", "social"]
// };


// const arr = ["run", "jump", 4, true, { a: 1, b: 3 }, [1, 4, 56]];

// console.log(obj, arr);

// const x =1;
// const y=3;

// console.log("added:",x+y);
// console.log("substract",x-y);
// console.log("multiply:",x*y);
// console.log("divide",x/y);
// console.log("reminder",x%y);

// console.log(4>3)
// console.log(4<3)
// console.log(4<=7)
// console.log(5>=5)
// console.log(5==5)

// const res1= true;
// const res2=false;

// console.log(res1 && res2);
// console.log(res1 || res2);

// console.log(x>y && x<y);
// console.log(x>y || x<y);

// const txt = "   Hello, Everyone";

// console.log(txt.toUpperCase());
// console.log(txt.toLowerCase());
// console.log(txt.charAt(9));
// console.log(txt.length);
// console.log(txt.split(','));
// console.log(txt.includes("Hello"));
// console.log(txt.concat(" iam ngk "));

// let str1 ="thunder, rolex, love";
// console.log(str1.split(","));
// console.log(str1.trim());

// const details = {
//     name: {
//         firstName: "Niranjan",
//         lastName: "Sai",
//     },
//     address: {
//         hno: "12/10",
//         street: "5th lane",
//         city: "HYD",
//         state: "TG",
//         pin: 50001,
//         landmark: ["near post office", "near play ground"],
//         urban: true,
//     },
//     role: "Full Stack Developer",
//     companyDeatils: {
//         companyName: "Smartbridge",
//         address: {
//             city: "Hyderabad",
//             state: "TG",
//         },
//     },
// };

// console.log(details.role);
// console.log(details.address.city);
// console.log(details.companyDeatils.companyName);
// console.log(details.companyDeatils.address.city);

// const fruits =["Apple", "Baanana", "Watermelon", "Orange"];

// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits.indexOf("Apple"));

// const car = {
//   brand: "Tesla",
//   model: "Model S",
//   specs: {
//     engine: {
//       type: "Electric",
//       horsepower: 1020
//     },
//     dimensions: {
//       length: "4970 mm",
//       width: "1964 mm"
//     }
//   },
//   owner: {
//     firstName: "Elon",
//     lastName: "Musk"
//   }
// };

// console.log(car.owner.firstName);
// console.log(car.specs.engine.horsepower)

// const company = {
//   name: "TechCorp Solutions",
//   founded: 2010,
//   isActive: true,
//   employees: [
//     {
//       id: 1,
//       name: "Alice Johnson",
//       role: "Software Engineer",
//       skills: ["JavaScript", "React", "Node.js"],
//       address: {
//         city: "New York",
//         zip: "10001",
//         coordinates: { lat: 40.7128, lng: -74.0060 }
//       }
//     },
//     {
//       id: 2,
//       name: "Bob Smith",
//       role: "Data Scientist",
//       skills: ["Python", "TensorFlow", "SQL"],
//       address: {
//         city: "San Francisco",
//         zip: "94105",
//         coordinates: { lat: 37.7749, lng: -122.4194 }
//       }
//     }
//   ],
//   projects: [
//     {
//       projectId: "P1001",
//       title: "AI Chatbot",
//       budget: 50000,
//       completed: false,
//       team: [1, 2] // employee IDs
//     },
//     {
//       projectId: "P1002",
//       title: "E-commerce Platform",
//       budget: 150000,
//       completed: true,
//       team: [1]
//     }
//   ],
//   contact: {
//     email: "info@techcorp.com",
//     phone: "+1-800-555-1234",
//     locations: ["USA", "UK", "India"]
//   }
// };

// console.log(company.employees[0].address.coordinates.lng);
// console.log(company.employees[0].skills[1]);
// console.log(company.projects[1].title);

// const onlineCourse = {
//   platform: "SkillHub",
//   category: "Web Development",
//   rating: 4.8,
//   isPublished: true,
//   instructor: {
//     id: 101,
//     name: "Dr. Sarah Lee",
//     experience: 12,
//     contact: {
//       email: "sarah.lee@skillhub.com",
//       social: {
//         linkedin: "linkedin.com/in/sarahlee",
//         twitter: "@sarahCodes"
//       }
//     }
//   },
//   students: [
//     {
//       id: 201,
//       name: "John Doe",
//       enrolledDate: new Date("2024-01-15"),
//       progress: { completedLectures: 15, totalLectures: 40 },
//       certificates: []
//     },
//     {
//       id: 202,
//       name: "Emily Clark",
//       enrolledDate: new Date("2024-03-10"),
//       progress: { completedLectures: 40, totalLectures: 40 },
//       certificates: ["Full-Stack Development"]
//     }
//   ],
//   syllabus: [
//     {
//       moduleId: "M1",
//       title: "Introduction to JavaScript",
//       topics: ["Variables", "Operators", "Functions"]
//     },
//     {
//       moduleId: "M2",
//       title: "Frontend Development",
//       topics: ["HTML", "CSS", "React"]
//     },
//     {
//       moduleId: "M3",
//       title: "Backend Development",
//       topics: ["Node.js", "Express", "MongoDB"]
//     }
//   ],
//   reviews: [
//     { user: "Alex", rating: 5, comment: "Excellent course!" },
//     { user: "Maya", rating: 4, comment: "Very helpful but a bit fast-paced." }
//   ]
// };

// console.log(onlineCourse.instructor.contact.social.twitter);
// console.log(onlineCourse.students[1].certificates[0]);
// console.log(onlineCourse.syllabus[1].topics[2]);
// console.log(onlineCourse.reviews[1].comment);


// const companies = [
//   {
//     id: 1,
//     name: "TechCorp",
//     industry: "Software",
//     departments: [
//       {
//         deptId: "D01",
//         name: "Engineering",
//         teams: [
//           {
//             teamId: "T01",
//             name: "Frontend",
//             employees: [
//               {
//                 empId: "E101",
//                 name: "Alice",
//                 role: "React Developer",
//                 projects: [
//                   {
//                     projectId: "P1",
//                     title: "Website Redesign",
//                     status: "Ongoing",
//                   },
//                   {
//                     projectId: "P2",
//                     title: "UI Component Library",
//                     status: "Completed",
//                   },
//                 ],
//               },
//               {
//                 empId: "E102",
//                 name: "Bob",
//                 role: "Vue Developer",
//                 projects: [
//                   {
//                     projectId: "P3",
//                     title: "Admin Dashboard",
//                     status: "Ongoing",
//                   },
//                 ],
//               },
//             ],
//           },
//           {
//             teamId: "T02",
//             name: "Backend",
//             employees: [
//               {
//                 empId: "E201",
//                 name: "Charlie",
//                 role: "Node.js Developer",
//                 projects: [
//                   { projectId: "P4", title: "API Gateway", status: "Ongoing" },
//                   {
//                     projectId: "P5",
//                     title: "Authentication Service",
//                     status: "Planned",
//                   },
//                 ],
//               },
//             ],
//           },
//         ],
//       },
//       {
//         deptId: "D02",
//         name: "Marketing",
//         teams: [
//           {
//             teamId: "T03",
//             name: "Content",
//             employees: [
//               {
//                 empId: "E301",
//                 name: "Diana",
//                 role: "Content Writer",
//                 projects: [
//                   {
//                     projectId: "P6",
//                     title: "SEO Campaign",
//                     status: "Completed",
//                   },
//                 ],
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   },
// ];

// console.log(companies[0].departments[0].teams[1].name);
// console.log(companies[0].departments[0].teams[0].employees[0].projects[1].status);
// console.log(companies[0].departments[1].teams[0].employees[0].projects[0].title);

// const student ={
//   studentName:"kavin",
//   age:15
// }

// const {studentName, age}= student;
// console.log(studentName)
// console.log(age);


// function sample(){
//   console.log("hiiiiiiiiii");
// }
// sample(); 

//function expression
// let func = function math(){
//   const a=10;
//   const b=10;
// return a;
// }
// console.log(func());

// // // Arrow Function
// let func1 = ()=>{
//   const a=10;
//   const b=10;
//   console.log(a/b);
// }
// func1();





// const math = function(){
//   const x =5;
//   const y=5;
//   return [x+y, x-y, x*y, x/y, x%y];

// }
// console.log(math());

// function add(){
//   let x=4;
//   let y=5;
//   console.log("the sum of",x," and ",y," is ", x+y);
//   console.log(`the sum of ${x} and ${y} is ${x+y}`);
// }

// add();

// function sum(x,y,name){
//   console.log(`sum of the ${x} and ${y} is ${x+y}`)
//   console.log(`sub of the ${x} and ${y} is ${x-y}`)
//   console.log(`my name is ${name}`)
// }
// sum(10,20, "Kavin");

// function sayMyName(name){
//   console.log(`hello Everone, my name is ${name()}`)
// }

// function Name(){
//   return ("Thunder 7");
// }
// sayMyName(Name);


// function findBiggest(a,b,c){

//   if(a>=b && a>=c){
//     console.log("A is gretar than B and C")
//   }
//   else if(b >= c){
//     console.log("B is Greater than A and C")
//   }
//   else{
//     console.log("C is greter than B and C")
//   }
// }

// findBiggest(40,20,80);


// let day=15;
// switch(day){
//   case 1:
//     console.log("Sunday")
//     break;
//   case 2:
//     console.log("Monday")
//     break;
//     case 3:
//     console.log("Thuesday")
//     break;
//     case 4:
//     console.log("Wednasday")
//     break;
//     case 5:
//     console.log("Thuresday")
//     break;
//     case 6:
//     console.log("Friday")
//     break;
//     case 7:
//     console.log("Saterday")
//     break;

//     default:
//       console.log("Holidayyyy");
//       break;
// }

// function synchronous(){
//   console.log("start");
//   console.log("procesing...")
//   console.log("the End");

//   }
// synchronous();

//   console.log("-----------------------------------")

// function asynchronous(){
//   console.log("start");
//   setTimeout(()=>{console.log("procesing...")}, 2000);
//   console.log("the End");
//   }
// asynchronous();

//--------------------------------------------------------//

//calback method//
// function step1(callback) {
//   setTimeout(() => {
//     console.log("step 1")
//     callback();
//   }, 8000)
// }
// function step2(callback) {
//   setTimeout(() => {
//     console.log("step 2")
//     callback();
//   }, 3000)
// }
// function step3(callback) {
//   setTimeout(() => {
//     console.log("step 3")
//     callback();
//   }, 5000)
// }
// function step4(callback) {
//   setTimeout(() => {
//     console.log("step 4")
//     callback();
//   }, 10000)
// }
// function step5(callback) {
//   setTimeout(() => {
//     console.log("step 5")
//     callback();
//   }, 8000)
// }
// function step6(callback) {
//   setTimeout(() => {
//     console.log("step 6")
//     callback();
//   }, 7000)
// }
// function step7() {
//   setTimeout(() => {
//     console.log("step 7")
//   }, 1000)
// }


// step1(() => {
//   step2(() => {
//     step3(() => {
//       step4(() => {
//         step5(() => {
//           step6(() => {
//             step7();
//           })
//         })
//       })
//     })
//   })
// });

//-------------------------------------------------------------------------------------------//



// function myPromise(check) {
//   return new Promise((resolve, reject) => {
//     if (check) {
//       resolve("this is resolved")
//     }
//     else {
//       reject("this is rejected")
//     }
//   })
// }

// myPromise(false)
//   .then((result) => {
//     console.log(result)
//   })
//   .catch((error) => {
//     console.log(error)
//   });


//------------------------------------------------------------------------------//

// function step1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("step1");
//       resolve("hello everyone");
//     }, 3000)
//   });
// }

// function step2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//          console.log("step2");
//       resolve();
//     }, 2000);
//   });
// }

// function step3() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("step3");
//       resolve();
//     }, 5000)
//   })
// }

// function step4() {
//   return new Promise((resolve, reject) => {

//     setTimeout(() => {
//         console.log("step4");
//         reject("nothing to say");
//     }, 5000)

//   })
// }

// function step5() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//          console.log("step5");
//       resolve();
//     }, 2000)
//   })
// }

// step1()
//   .then(step2((result) => {
//     console.log(result);
//   }))
//   .then(step3((result) => {
//     console.log(result)
//   }))
//    .then(step5((result) => {
//     console.log(result)
//   }))
//   .catch((err)=>{
//     console.log(err);
//   });

// step1()
//   .then(step2)
//   .then(step3)
//   .then(step4)
//    .then(step5)
//   .catch((err)=>{
//     console.log(err);
//   });

//   async function runAllSteps(){
//     try{
//       await step1((res)=>{
//         console.log(res);
//       });
//       await step2();
//       await step3();
//       await step4();
//       await step5();
//     }
//     catch(error){
//       console.log("the error is:", error);
//     }
//     }

// runAllSteps();

// function makeDough() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Dough is ready");
//       resolve();
//     }, 2000)
//   })
// }
// function addSauce() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Sause is ready");
//       resolve();
//     }, 2000)
//   })
// }

// function addToppings(check) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (check) {
//         console.log("Topping is ready");
//         resolve();
//       } else {
//         reject("Topping i not ready, oreder cancel")
//       }
//     }, 2000)
//   })
// }

// function bakePizza() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("pizza baked");
//       resolve();
//     }, 2000)
//   })
// }

// makeDough()
//   .then(addSauce)
//   .then(addToppings)
//   .then(bakePizza)
//   .then(()=>{
//     console.log("pizza is ready to serve")
//   })
//   .catch((err)=>{
//     console.log(err);
//   })

//   async function orderPizza(){
//     try{
//       await makeDough();
//       await addSauce();
//       await addToppings(true);
//       console.log("pizza is almost ready");
//       await bakePizza();
//       console.log("pizza is ready to serve");

//     }
//     catch(error){
//       console.log(error)
//     }
//   }
// orderPizza();

// function boilWater() {
//   return new Promise((resolve, reject) => {
//     console.log("water boiling.......")
//     setTimeout(() => {
//       console.log("Water boild");
//       resolve();
//     }, 4000)
//   })
// }
// function addCoffeePowder() {
 
//   return new Promise((resolve, reject) => {
//     console.log("coffee powder adding.....")
//     setTimeout(() => {
//       console.log("powder added");
//       resolve();
//     }, 5000)
//   })
// }

// function pourMilk(check) {
//   return new Promise((resolve, reject) => {
//     console.log("checking milk for add milk...... ")
//     setTimeout(() => {
//       if (check=="good") {
//         console.log("Milk poured");
//         resolve();
//       } else {
//         reject("Milk is not good")
//       }
//     }, 6000)
//   })
// }

// async function makeCoffee() {
//   try {
//     await boilWater();
//     await addCoffeePowder();
//     await pourMilk("good");
//     console.log("Coffee is ready to serve");
//   }
//   catch(error){
//     console.log(error," So,order is canceled");
//   }

//   }
//    makeCoffee();


//.....................................................................................//

//Math Functions


// function Game(){
//     let p1 = Math.floor(Math.random()*6)+1 ;
//     console.log(p1)
//     let p2 = Math.floor(Math.random()*6)+1 ;
//     console.log(p2)

//     if(p1>p2){
//         console.log("Player 1 is win")
//     }else if(p2>p1){
//         console.log("Player 2 is win")
//     }
//     else{
//         console.log(Draw)
//     }
// }
// Game();

fruits =["Apple", "Mango","Banana", "Watermelon", "Orange"]

// const fruitss= fruits.map((fruit,i)=>{
//     return `${i+1}st fruit is ${fruit}`
// })

// console.log(fruitss)

// const numbers =[1, 2, 3, 4, 5, 6]

// const doubledNumbers = numbers.map((n,i)=>{
// return n*2; })
// console.log("Doubled Numbers",doubledNumbers);

// const squares = numbers.map((n,i)=>{
//     return n*n;
// })
// console.log("Power of two : ",squares)

// let length1 = fruits.map((fruit,i)=>{
//     return fruit.length;
// })
// console.log(length1)


const details=[
  {
    "name": {
      "title": "Miss",
      "first": "Ece",
      "last": "Dalkıran"
    }
  },
  {
    "name": {
      "title": "Mr",
      "first": "Kenan",
      "last": "Kunter"
    }
  },
  {
    "name": {
      "title": "Mr",
      "first": "Milton",
      "last": "Davidson"
    }
  },
  {
    "name": {
      "title": "Ms",
      "first": "Consuelo",
      "last": "Alonso"
    }
  },
  {
    "name": {
      "title": "Mrs",
      "first": "Sarah",
      "last": "Ross"
    }
  },
  {
    "name": {
      "title": "Ms",
      "first": "Mélissa",
      "last": "Rolland"
    }
  },
  {
    "name": {
      "title": "Mr",
      "first": "Sava",
      "last": "Grujić"
    }
  },
  {
    "name": {
      "title": "Mr",
      "first": "Mitchell",
      "last": "Spencer"
    }
  },]

const names =  details.map((names,i)=>{
    return names.name.first.toUpperCase();
  })
console.log(names)


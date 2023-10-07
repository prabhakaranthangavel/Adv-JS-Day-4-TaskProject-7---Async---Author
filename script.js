//! Task:Given below ===> line.no 130 to 161

// const res = fetch("https://jsonplaceholder.typicode.com/users")
// console.log(res); 
// (1) Return to only promise inputs
// Promise {<pending>} 
// [[Prototype]] : Promise 
// [[PromiseState]] : "fulfilled"
// [[PromiseResult]] : Response


// const res = fetch("https://jsonplaceholder.typicode.com/users")
// res.then((data) => console.log(data))
// (2) PromiseResult kkul irukum Response in input mattum print aakirathu
// Response {type: 'cors', url: 'https://jsonplaceholder.typicode.com/users', redirected: false, status: 200, ok: true, …}


// const res = fetch("https://jsonplaceholder.typicode.com/users") 
// res.then((data) => data.json)
// (3) body kkul irukkum readable stream convert to json format 


// const res = fetch("https://jsonplaceholder.typicode.com/users")
// res.then((data) => data.json()).then((data1) => console.log(data1)); 
// (4) readable stream convert to json format and 
// it's a chaining method so again using .then method 
// and .then method print the API inputs so using console.log
// the output is Array of Object


// (5)API kkul irukum separate user name mattum display panna for using for Array of Indexvalue

// const res = fetch("https://jsonplaceholder.typicode.com/users")
// res.then((data) => data.json()).then((data1) => 
// console.log(data1[3].name));                     //o/p : Patricia Lebsack


// (6) API kkul irukum total user name display panna for using "for loop"

// const res = fetch("https://jsonplaceholder.typicode.com/users")
// res.then((data) => data.json()).then((data1) =>
// {
//    for(let i=0;i<=data1.length;i++)
//    {
//      console.log(data1[i].name);
//    }
// })                                               //o/p :10 name displayed



// const res = fetch("https://jsonplaceholder.typicode.com/users")
// res.then((data) => data.json()).then((data1) =>
// {
//    for(let i=0;i<=data1.length;i++)
//    {
//      console.log(data1[i].username);
//    }
// })                                               //o/p :10 username displayed




// (7) console varum output and display the screen

// const res = fetch("https://jsonplaceholder.typicode.com/users")
// res.then((data) => data.json()).then((data1) =>
// {
//    for(let i=0;i<=data1.length;i++)
//    {
// const div = document.createElement("div")
// div.innerHTML = `${data1[i].name}`          // just data1[i].name endru koduthal "data1[i].name" endru mattum varum.store panni vaithulla data"vin" value I get seiyya using template literals it's mandatory.
//     document.body.append(div);
//    }
// })                                             //o/p :10 name displayed on screen


// const res = fetch("https://jsonplaceholder.typicode.com/users")
// res.then((data) => data.json()).then((data1) =>
// {
//    for(let i=0;i<=data1.length;i++)
//    {
//     const div = document.createElement("div")
//     div.innerHTML = `${data1[i].username}`
//     document.body.append(div);
//    }
// })                                          //o/p :10 username displayed on screen


// (8) Styling part

// const res = fetch("https://jsonplaceholder.typicode.com/users")
// res.then((data) => data.json())
// .then((data1) => {
//     for (let i = 0; i <= 15; i++) {
//         console.log(data1[i]);
//         const div = document.createElement("div")
//         div.innerHTML =
//             `
//   <div class="container">
//    <div class="row row-cols-1 row-cols-md-2 g-4">
//    <div class="col">
//      <div class="card">
//        <div class="card-body">

//          <p class="card-text"><b>Name: ${data1[0].name}</b></p>
//          <p class="card-text">Email: ${data1[0].email}</p>
//          <p class="card-text">Street: ${data1[0].address.street}</p>
//          <p class="card-text">City: ${data1[0].address.city}</p>
//        </div>
//      </div>
//    </div>
//   </div>
// </div>
//   `
//         document.body.append(div);
//     }
// })


// (9) Using Async Function

// async function foo(){
//         const res = await fetch("https://jsonplaceholder.typicode.com/users")
//         const result = await res.json();
//         console.log(result);
//     }
//     foo();

// *************************************************************************************************************************

// ! (10) Project:Using Async Function
async function Project() {
    try {
      const API = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await API.json();
  
      for (let i = 0; i <= 15; i++) {
        console.log(data[i]);
        const div = document.createElement("div");
        div.innerHTML = `
          <div class="container">
            <div class="row row-cols-1 row-cols-md-2 g-4">
              <div class="col">
                <div class="card">
                  <div class="card-body">
                    <p class="card-text"><b>Name: ${data[0].name}</b></p>
                    <p class="card-text">Email: ${data[0].email}</p>
                    <p class="card-text">Street: ${data[0].address.street}</p>
                    <p class="card-text">City: ${data[0].address.city}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `
        document.body.append(div);
      }
    } catch (error) {
      console.log("Error");
    }
  }
  Project();

// *************************************************************************************************************************

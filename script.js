fetch("http://127.0.0.1:3000/")
.then(res => res.json())
.then(data => {  
    console.log(data); 
})

fetch("http://127.0.0.1:3000/users")
.then(res => res.json())
.then(data => {   
 })

 fetch("http://127.0.0.1:3000/physicalActivity")
.then(res => res.json())
.then(data => {   
 })

 fetch("http://127.0.0.1:3000/nutritionlog")
 .then(res => res.json())
 .then(data => {   
  })

 fetch("http://127.0.0.1:3000/weight-goals")
 .then(res => res.json())
 .then(data => {   
  })
 // Introduction paragraph at the top of the home page

// document.getElementById('top-paragraph').innerHTML='Welcome to a whole new way of tracking your fitness. This app will help you plan-out and track your fitness progress. This works wether you  are trying to lose inches / fat, build muscle, or acheive overall cardiovasular health. This Fitness Tracking has you convered.'

let Progress =document.querySelector('.My Progress');
//Server Set-Up
const { name } = require("ejs");
const express = require("express")
const app = express();

const morgan = require("morgan");
app.use(morgan("dev"));

const port = 3000;

// app.get("/", (req, res)=>{
//     res.render("home.ejs", {
//         item: RESTAURANT
//     });
// });

app.listen(port, ()=>{
    console.log(`Listening on Port ${port}`);
})

//Lab Data
const RESTAURANT = {
    name: 'The Green Byte Bistro',
    isOpen: true,
    address: '742 Evergreen Rd, Mapleview, OS 45502',
    phone: '555-321-9876',
    menu: [
      { 
        id: 1,
        name: 'Quantum Quinoa Mushroom Burger',
        price: 13.00,
        rating: 4,
        category: 'mains',
        details: 'A vegetarian burger made with a quinoa and mushroom patty, it will take you to another realm.'
      },
      { 
        id: 2,
        name: 'Binary Berry Cheesecake',
        price: 10.11,
        rating: 3,
        category: 'desserts',
        details: 'A creamy cheesecake bursting with flavor. A mix of berries in every byte.'
      },
      { 
        id: 3,
        name: 'Recursive Rigatoni',
        price: 17.00,
        rating: 5,
        category: 'mains',
        details: 'A classic rigatoni pasta dish, layered with rich tomato sauce and herbs. You\'ll keep coming back for more.'
      },
      { 
        id: 4,
        name: 'Pumpkin Pi Squared',
        price: 3.14,
        rating: 5,
        category: 'desserts',
        details: 'A delightful pumpkin dessert, squared and spiced to perfection.'
      },
      { 
        id: 5,
        name: 'Fibonacci String Bean Fries',
        price: 11.23,
        rating: 5,
        category: 'sides',
        details: 'Crispy and lightly seasoned string bean fries, served in a pattern for a fun twist.'
      }
    ]
  }

//Exercise #1: Create a Homepage
  //1.Create a view
  app.get("/", (req, res)=>{
    res.render("home.ejs", { //The first parameter is the file we are rendering to (home.ejs)
        item: RESTAURANT //Data is declared in the global scope (this way many other routes can have access to it) - However, we must place the variable it is stored in as the value in the locals object to send the data to the home.ejs file
    });
});

//Exercise #2: Create a nav bar

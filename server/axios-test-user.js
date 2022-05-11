const Axios = require("axios");

//Get All
Axios.get("http://localhost:5001/user").then((response) => {
  console.log(response.data);
});

//Create
Axios.post("http://localhost:5001/user", {
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  isProfessor: { type: Boolean, required: true },
}).then((response) => {
  console.log(response.data);
});

// //Update
// Axios.put("localhost:5001/user/623e4cac075f2251806803c7", {
//   lessonId: 1,
//   name: "CSC",
//   courseCode: 340,
// }).then((response) => {
//   console.log(response.data);
// });

// //Delete
// Axios.delete("localhost:5001/user/623e4cac075f2251806803c7").then(
//   (response) => {
//     console.log(response.data);
//   }
// );

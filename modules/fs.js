// const fs = require("fs");
// const path = require("path");

// // fs.mkdir(path.join(__dirname, 'templates'), err=>{
// //     if(err) throw new Error()
// //     console.log('Folder was creataed successfuly');
// // })

// fs.mkdir(path.join(__dirname, "notes"), (err) => {
//   if (err) throw new Error();
//   console.log("Folder was creataed successfuly");
// });

// fs.writeFile(
//   path.join(__dirname, "notes", "april.txt"),
//   "create new course NodeJS",
//   (err) => {
//     console.log(err);
//     if (err) throw new Error();
//     console.log("File was created succesfully");

//     fs.appendFile(
//       path.join(__dirname, "notes", "april.txt"),
//       " and microservice project",
//       (err) => {
//         if (err) throw new Error();
//         console.log("file was changed succesfully");
//       }
//     );
//   }
// );

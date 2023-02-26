const { createPool } = require("mysql");
const { resolve } = require("styled-jsx/css");
const pool = createPool({
  host: "localhost",
  user: "root",
  port: 3306,
  database: "data",
});

pool.getConnection((err) => {
  if (err) {
    console.log("error connecting db");
  } else {
    console.log("connect to db");
  }
});

const executeQuery = (query, arrparams) => {
   return new Promise((resolve, reject)=>{
    try {
      pool.query(query, arrparams, (err, data)=>{
        if(err){
          console.log("error in executing query");
        }
        resolve(data)
      })
    } catch (error) {
      reject(error)
      
      
    }
   })
//   return new Promise((resolve, reject) => {
//     try {
//       pool.query(query, arrparams, (err, data) => {
//         if (err) {
//           console.log("error in query");
//           reject(err);
//         }
//         resolve(data);
//       });
//     } catch (error) {
//       reject(err);
//     }
//   });
};
module.exports = {executeQuery};

import { executeQuery } from "../../config/db";
const getAllEmployees = async(req, res) => {
let employeeData = await executeQuery("SELECT * FROM data.new_table", []);
res.send(employeeData);
};
export { getAllEmployees };


// import excuteQuery from "../../../lib/db";

// const getAllEmployees =  async (req, res) => {
//   try {
//     // console.log("req nom", req.body);
//     const result = await executeQuery({
//       query: "SELECT * FROM data.new_table", 
      
//     });
//     res.send(result)
//   } catch (error) {
//     console.log(error);
//   }
// };
// export { getAllEmployees };

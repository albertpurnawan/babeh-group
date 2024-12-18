const { createPool } = require("mysql");
const pool = createPool({
  host: "localhost",
  user: "root",
  password: "12345",
  port: 3306,
  database: "admin",
});

pool.getConnection((err) => {
  if (err) {
    console.log("Error connecting to db...");
  }
  console.log("Success connecting to db...");
});

const executeQuery = (query, arraParms) => {
  return new promise((resolve, reject) => {
    try {
      pool.query(query, arraParms, (err, data) => {
        if (err) {
          console.log("error in executing the query");
          reject(err);
        }
      });
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = pool;

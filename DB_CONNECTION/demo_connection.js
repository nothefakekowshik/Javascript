const mysql = require('mysql2');
const connection = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "Kowshik@1",
        database: "kowshik"
    }
);
flag=true;
connection.connect((err) => {
    if (err) 
    {
        flag=false;
    }
    else
    {
        flag=true;
    }
  });
  console.log(flag);
  connection.close();
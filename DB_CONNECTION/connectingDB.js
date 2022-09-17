const mysql = require('mysql2');
const connection = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "Kowshik@1",
        database: "kowshik"
    }
);
var names=new Array();
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

  console.log();
  console.log("\ntrying to connect........");
  connection.query("select name,mark from student",function(err,result)
  {
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log("Connected---------");
        for(var i of result)
        {
            names.push(i.name);
            //console.log(i.name);
        }
        printNames(names);
    }
  });
  /* function kakunda ,ikada 44th line lo console log names ivvu, empty array ostundi. 
  probably idi call back function valla emo, execution cheste first connect aindi, names ane array create aindi , next query execute avakunda direct ga last line ki ellipoindi exectuion akkada print ayyaka query execution ki ellindi.
  */

//  console.log(names); this is the line i was talking about.
 
  connection.end();
console.log();
  function printNames()
  {
    console.log('====================================');
    console.log(names);
    console.log('====================================');
  }
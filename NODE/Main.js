// modules
// Import modules using "requires" keyword
// var cal = require('./Modules')
// var x,y;
// x=10,y=4;
// var add = cal.add(x,y);
// console.log("Add is",add);
// let sub = cal.sub(x,y);
// console.log("sub is",sub);


// HTTP MODULES

// localhost://4444
// we give this localhost and port num this program is running

// var http = require('http');
// http.createServer(function(req,res){
//     res.writeHead(200,{'Content-type':'text/plain'})
//     res.write("SURYA -> ");
//     res.end('says Thank for you ')
// }).listen(8080);




// FILE SYSTEM
// var fs = require('fs');
// // SYNCHRONOUS
// var data = fs.readFileSync('demo.txt');
// console.log("sync data is\n:",data.toString())
// console.log("END \n");
// // ASYNCHRONOUS
// fs.readFile('demo.txt',function(err,data){
//     if(err){
//         return console.log(err);
//     }
//     else{
//         return console.log("Aysnc data \n:",data.toString());
//     }
// })
// // SYNCHRONOUS
// var data = fs.readFileSync('demo.txt');
// console.log("sync data is\n:"+data.toString())
// console.log("END \n");




// FILE SYSTEM USING HTTP 

// var http = require('http')
// var fs = require('fs');
// read file
// http.createServer(function(req,res){
//     fs.readFile('index.html',function(err,data){
//         if(err){
//             return console.log(err);
//         }
//       // console.log("Aysnc data \n:",data.toString());
//         res.write(data);
//         res.end("\ndata finished")
//     })
// }).listen(8080);


// http.createServer(function(req,res){ 
    // Write File
    // fs.writeFile('demo4.txt',"new file created by open method\n",function(err){
    
    //  Append file
    // fs.appendFile('demo.txt',"\nThankyou",function(err){
    
    // Rename File
    // fs.rename('demo1.txt',"demo2.txt",function(err){
    
    // Delete File 
    // fs.unlink('demo2.txt',function(err){

    // Open File
    // not hava any file like this name this will create a new file
    // fs.open('demo4.txt','w+',function(err,id){

    // check file STATUS
//         fs.stat('demo4.txt',function(err,status){
//         if(err){
//             return console.log(err);
//         }
//         else{
//         console.log(status);
//         res.write("status file "+status.isFile());
//         res.write("\nstatus directory "+status.isDirectory());
//         res.end()
//         }
//     });
// }).listen(8080);







// ------------------------ NODE JS WITH MYSQL

// var mysql = require('mysql')
// var con = mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'surya@12345678',
//     database:'nodedb'
// });

// con.connect(function(err){
//     if (err) throw err;

//     console.log('connected')
    // for create a new database
    // con.query("create database nodedb",function(err,result){
    //     if(err) throw err;

    //     console.log("database created: ")
    // })

// create a table in nodedb database 
    // con.query("create table student_marks(stu_id int, stu_grade varchar(20)) ",function(err,result){
    //     if(err) throw err;
    //     console.log('table created')
    // })

// insert values in table
    // let sql = 'insert into student (stu_id, stu_name,stu_city) values (1,"surya","pallipalayam") '
// Multiple values in   ********  STUDENT
    // let sql = 'insert into student (stu_id, stu_name,stu_city) values ?'
    // let values = [
    //     [2,"kumar","Erode"],
    //     [3,"mugesh","Kodumudi"],
    //     [4,"sekar","Tcode"]
    // ];

// Multiple values in   ********  STUDENT_GTADE
    // let sql = 'insert into student_marks (stu_id, stu_grade) values ?'
    // let values = [
    //     [1,'O+'],
    //     [1,'A+'],
    //     [1,'A'],
    //     [2,"A"],
    //     [2,'O'],
    //     [3,'B+'],
    //     [3,"A+"],
    //     [4,"B"],
    //     [4,'O+'],
    // ];

    // con.query(sql,[values],function(err,result){
    //         if(err) throw err;
    //         console.log('multiple values inserted')
    //     })



// Print values in console
    // let sql = "select * from student";
    // con.query(sql,function(err,result){
    //     if(err) throw err;
    //     console.log(result)
    //     console.log("finish student \n")
    // })

    // let sql_1 = "select * from student_marks";
    // con.query(sql_1,function(err,result){
    //     if(err) throw err;
    //     console.log(result)
    // })


// @@@@@@@@  Conditional rendering
    // let sql_1 = "select * from student_marks where stu_grade = 'O+' ";
    // let sql_1 = "select * from student_marks where stu_id > 2 ";
    // let sql_1 = "select * from student_marks order by stu_grade asc "; //or desc
    // con.query(sql_1,function(err,result){
    //     if(err) throw err;
    //     console.log(result)
    // })


//  ##############   JOIN
    // let sql_1 = ` select stu_name as name,
    //             stu_grade as grade 
    //             from student 
    //             join 
    //             student_marks 
    //             on
    //             student.stu_id = student_marks.stu_id `   



// &&&&&&&&&&&&&&&&&     UPDATE data in table
    // let sql_1 = "update student set stu_city='Tiruchengode' where stu_id=4 "
    // let sql_2 = "select * from student";
    // con.query(sql_1,function(err,result){
    //     if(err) throw err;
    //     console.log(result)
    // })
    // con.query(sql_2,function(err,result){
    //     if(err) throw err;
    //     console.log(result)
    // })



// GROUP BY (similar values in different rows)
    // let sql = `select stu_grade,count(stu_id) 
    //         from student_marks 
    //         group by 
    //         stu_grade order by count(stu_id) asc`

//  DELETE ROWS
    // let sql = 'delete from student_marks where stu_grade = "O+" ' 

// DROP TABLE
    // let sql = 'DROP table student_marks'
//     con.query(sql,function(err,result){
//         if(err) throw err;
//         console.log(result)
//     })
// })












//      MONGO DB IN NODE







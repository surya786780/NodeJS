// modules
// Import modules using "requires" keyword
// var cal = require('./Modules')
// var x,y;
// x=10,y=4;
// var add = cal.add(x,y);
// console.log("Add is",add);
// let sub = cal.sub(x,y);
// console.log("sub is",sub);


// ****************************         HTTP MODULES

// localhost://8080
// we give this localhost and port num then this program is running

// var http = require('http');
// http.createServer(function(req,res){
//     res.writeHead(200,{'Content-type':'text/plain'})
//     res.write("SURYA -> ");
//     res.end('says Thank for you ')
// }).listen(8080);




// ***************************              FILE SYSTEM
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
//     // Write File
//     // fs.writeFile('demo4.txt',"new file created by open method\n",function(err){
    
//     //  Append file
//     fs.appendFile('demo4.txt',"\nThankyou",function(err){
    
    // Rename File
    // fs.rename('demo1.txt',"demo2.txt",function(err){
    
    // Delete File 
    // fs.unlink('demo2.txt',function(err){

    // Open File
    // not hava any file like this name this will create a new file
    // fs.open('demo4.txt','w+',function(err,id){

    // check file STATUS
        // fs.stat('demo4.txt',function(err,status){
//         if(err){
//             return console.log(err);
//         }
//         // console.log(status);
//         // res.write("status file "+status.isFile());
//         // res.write("\nstatus directory "+status.isDirectory());
//         res.write('File appended')
//         res.end()
//     });
// }).listen(8080);







// *********** URL MODULE   *****************
// http://localhost:8080/index.html
// give the above url in search bar

// var http = require('http')
// var fs = require('fs');
// var url = require('url');
// http.createServer(function(req,res){
//     var weblink = url.parse(req.url,true);
//     var filepath = '.'+weblink.pathname;
//     fs.readFile(filepath,function(err,data)
//     {
//         if(err){
//             res.writeHead(404,{'Content-type':'text/html'});
//             return res.end("404 File not found")
//         }
//         res.writeHead(200,{'Content-type':'text/html'});
//         res.write(data);
//         res.end("\ndone")
//     })
// }).listen(8080);




// &&&&&&&&&&& &&&&&&&&&  SEND MAIL USING NODE   &&&&&&&&&&&&&&&&&&&
// send normal text or html code also

var nodemailer = require('nodemailer');
var sender = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user : 'loginform2020@gmail.com',
        pass : 'RDS@1234'
    }
});

var composemail = {
    from : 'loginform2020@gmail.com',
    to : 'shekar3849@gmail.com',
    subject : 'Send mail ',
    html :`<div class="mb-3 m-5 text-center">
    <label for="exampleInputEmail1" class="form-label">User ID</label>
    <input type="text" class="form-control" id="exampleInput"><br>
    <button type="submit" class="btn btn-primary">Get User Info</button>
  </div>`
};

sender.sendMail(composemail,function(err,info){
    if(err){
        console.log(err)
    }
    console.log("mail sended "+info.response);
});







// ^^^^^^^^^^^^^^^^^^^^^^^    NODE JS SERVER SIDE FORM SUBMISSION

// var http = require('http'); //for http works
// var fs = require('fs')  // for file handling (open,read,write)
// var formidable = require('formidable') // form submission

// http.createServer(function(req,res)
// {
//     if(req.url == '/')
//     {
//         res.writeHead(200,{'Content-type':'text/html'});
//         res.write(" <form action='biodata' method='post' enctype='multipart/form-data' > ");
//         res.write(" <h1> Work Form </h1> ")
//         res.write(" Name <input type='text' name='username' ><br> ")
//         res.write(" DOB <input type='date' name='dob' ><br> ")
//         res.write(" E-mail <input type='email' name='email' ><br> ")
//         res.write(" Upload RESUME <input type='file' name='uploadfile' ><br> ")
//         res.write(" <br><input type='submit'> ")
//         res.end();
//     }
//     else if(req.url == '/biodata')
//     {
//         var form = new formidable.IncomingForm();
//         // console.log(form);
//         form.parse(req, function(err,fields,files)
//         {
//             res.write('<h1>Name : '+fields.name + '</h1><br>')
//             res.write('<h1>DOB : '+fields.dob + '</h1><br>')
//             res.write('<h1>E-Mail : '+fields.email + '</h1><br>')

//             // var oldpath = files.uploadfile.path;
//             // console.log(oldpath);
//             // var newpath = "C:\Users\Admin\Desktop\NodeFiles" + files.uploadfile.name;
//             // console.log(newpath)
//         //     fs.rename(oldpath,newpath,function(err)
//         //     {
//         //         if(err) throw err;
//         //             res.write("<h2>Your current file location </h2><br>" + newpath)
//         //             res.write("<br><h2>old location </h2><br>" + oldpath)
//         //             res.end("<br><h3>Thanks for submitting </h3>")
//         //     })

//         })
//     }
//     else{
//         res.end("<h2>404 - File not FOUND!! </h2>")
//     }
// }).listen(8080);



















//******************************     MONGO DB

// var MongoClind = require('mongodb').MongoClient;
// var url = "mongodb://127.0.0.1:27017/node"  //this url for create a new database
// MongoClind.connect(url,function(err,db){
//     if(err) throw err;
//     console.log("database create successfully")
//     db.close();
// })


// create a collection -> (table) for the database

// var url = "mongodb://127.0.0.1:27017/"
// MongoClind.connect(url,function(err,db){
//     if(err) throw err;

//     var dbname = db.db("node");

    // CREATE COLLECTION

    // dbname.createCollection("students",function(err,res){
    //     if(err) throw err;
        
    //     console.log("collection create successfully")
    //     db.close();
    // })
    
    
    // DOCUMENT INSERT (one,many) TO THE COLLECTION

    // dbname.collection("students").
    // insertOne({name:"surya",age:22},
    // function(err,res){
    //     if(err) throw err;

    //     console.log("Document insert successfully")
    //     db.close();
    // });
    

    // INSERT MULTIPLE DOCUMENT

    // var multidata = [
    //     {_id:4,name:"sekar",age:20},
    //     {_id:5,name:'mugesh',age:20}
    // ]
    // dbname.collection("students").
    // insertMany(multidata,
    // function(err,res){
    //     if(err) throw err;

    //     console.log("Multiple Document insert successfully")
    //     db.close();
    // });



    // SORTING AND FIND(SELECT) ,  
    // PROJECTION (WHERE) 1 - show , 0 - hide
    // UPDATE next 2 line used for update
    // var myfield = {age:20};
    // var new_value = {$set:{age:21}}

    // dbname.collection("students").
        // find({},{projection:{}}).toArray(
        // find({},{projection:{name:'surya'}}).toArray(
        // find({name:'surya'},{projection:{_id:0}}).toArray(
    
    // regular expression
        // find({name:/^s/},{projection:{_id:0}}).toArray(
    
    // SORTING (order by)
    //   find({},{projection:{_id:0}}).sort({age:1}).toArray(    //Ascending
    //   find({},{projection:{_id:0}}).sort({age:-1}).toArray(  // Descending
     
    // UPDATE ONE
        // updateOne(myfield, new_value,

    // UPDATE MANY
        // updateMany (myfield,new_value,

    // DELETE (one)
        // deleteOne({id:5},
    // DELETE (many)
        // deleteMany({age:21},

        // function(err,res){
        //             if(err) throw err;
        
        //             console.log(res)
        //             console.log("DROP successfully")
        //             db.close();
        //         });
    
    
    
// ***** DROP
    // dbname.dropCollection("students",
    //         function(err,res){
    //         if(err) throw err;

    //         console.log(res)
    //         console.log("DROP successfully")
    //         db.close();
    //     });
// })


var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;
var crypto = require('crypto');
var config = {
    user : 'priyamurali61',
    database : 'priyamurali61',
    host : 'db.imad.hasura-app.io',
    port : '5432',
    password : process.env.DB_PASSWORD
};

var app = express();
app.use(morgan('combined'));
var books :{  
        'book1'={
            title:'book1|priya',
            heading:'first-book',
            content: 
                    <p>
                        This is a paragraph showing my first trial. This is a paragraph showing my first trial. This is a paragraph showing my first trial. This is a paragraph  showing my first trial. This is a paragraph showing my first trial. This is a paragraph showing my first trial. This is a paragraph showing my first trial. This is a paragraph showing my first trial. This is a paragraph showing my first trial.
                    </p>
                     <p>
                        This is a paragraph showing my first trial. This is a paragraph showing my first trial. This is a paragraph showing my first trial. This is a paragraph  showing my first trial. This is a paragraph showing my first trial. This is a paragraph showing my first trial. This is a paragraph showing my first trial. This is a paragraph showing my first trial. This is a paragraph showing my first trial.
                    </p>
                     <p>
                        This is a paragraph showing my first trial. This is a paragraph showing my first trial. This is a paragraph showing my first trial. This is a paragraph  showing my first trial. This is a paragraph showing my first trial. This is a paragraph showing my first trial. This is a paragraph showing my first trial. This is a paragraph showing my first trial. This is a paragraph showing my first trial.
                    </p>
        },
        'book2'={
            title:'book2|priya',
            heading:'second-book',
            content: 
                    <p>
                        This is a  second paragraph . 
                    </p>
        },
        'book3'={
            title:'book3|priya',
            heading:'third-book',
            content: 
                    <p>
                        This is a paragraph showing my third trial. 
                    </p>
        }
        };
function createtemp(data){
    var title=data.title;
    var heading=data.heading;
    var content=data.content;
    var htmltemp= {
        <html>
    <head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
         <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
                <div>
                    <a href="/">home</a>
                </div>
                <hr/>
                <h3>
                   {heading}
                </h3>
                <div>
                    ${content}
                </div>
        </div>
    </body>
</html>
;
    }
    return createtemp;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

function hash(input,salt){
    var hashed = crypto.pbkdf2Sync(input , salt,10000,S12 ,'shaS12');
    return hashed.toString('hex');
}
app.get('/hash/:input',function(req,res){
   var hashedString =hash(req.params.input,'this-is-some-random-string') ;
   res.send(hashedString);
    
});


var names = [];
app.get('/submit-name', function (req,res){
    var name = req.query.name;
    
    names.push(name);
    
    res.send(JSON.stringify(names));
}

);

app.get('/books/:bookName',function(req,res){
    pool.query("SELECT* FROM book WHERE title = $1" ,[req.params.bookName] , function(err,results){
        if(err){
            res.status(500).send(err.toString());
        }else{
            if(result.rows.length === 0){
                 res.status(404).send(book not found);
            }else {
                var bookData=result.rows[0];
            res.send(createtemp(bookData));
        }
    
        }
        
    });
    
    
    
});
var counter=0;
app.get('/container', function (req, res) {
    counter=counter+1;
  res.send(counter.toString());

});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

var pool = new Pool(config);
app.get('/test-db',function (req,res){
    pool.query('SELECT * FROM test', function(err,result){
        if(err){
            res.status(500).send(err.toString());
        }else{
            res.send(JSON.stringify(result.rows));
        }
    });
});

app.get('/ui/main,js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});




var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

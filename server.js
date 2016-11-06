var express = require('express');
var morgan = require('morgan');
var path = require('path');

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
app.get('/:books',function(req,res){
    var bookName=req.getparams.bookName;
    res.send(createtemp(books[bookName]));
});
var counter=0;
app.get('/container', function (req, res) {
    counter=counter+1;
  res.send(counter.toString());

});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main,js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var names = [];
app.get('/submit-name/:name', function (req,res){
    var name = req.params.name;
    
    names.push(name);
    
    res.send(JSON.stringify(names));
}

);


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

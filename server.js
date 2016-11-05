var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var book1={
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
            </p>`
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
app.get('/book1',function(req,res){
  req.send(createtemp(book1));
});
app.get('/book2',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'book2.html'));
});
app.get('/book3',function(req,res){
     res.sendFile(path.join(__dirname, 'ui', 'book3.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

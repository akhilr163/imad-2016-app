var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articleone = { 
    title:'article one akhil',
   heading:'article one',
   date:'oct 3, 2016',
  content:`<p>
         this is my content for my first article.this is my content for my first article.this is my content for my first article.this is my content for my first article.this is my content for my first article.this is my content for my first article.this is my content for my first article.this is my content for my first article.this is my content for my first article.
     </p>
      <p>
         this is my content for my first article.this is my content for my first article.this is my content for my first article.this is my content for my first article.this is my content for my first article.this is my content for my first article.this is my content for my first article.this is my content for my first article.this is my content for my first article.
     </p>
      <p>
         this is my content for my first article.this is my content for my first article.this is my content for my first article.this is my content for my first article.this is my content for my first article.this is my content for my first article.this is my content for my first article.this is my content for my first article.this is my content for my first article.
        </p>`
    
    
 };

function createtemplate (data) {

var title = data.title;
var date = data.date;
var heading = data.heading;
var content = data.content;

var htmltemplate = `
<html>
<head> 
<title> 
${title}
</title> 
 <meta name="viewport" content= "width=device-width,initial-scale=1"/>

  </head>   
      <body>
        <div class="container">
           <div>
            <a href='/'>/a>home</a>
             </div>
            <hr/>
            <h3>
                ${heading}
           </h3>
            <div>
               ${date}
          </div>
            <div>
               ${content}
          </div>
       </div>
   </body>  
</html>
`;
  return htmltemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one',function (req, res) { 
     res.send(createtemplate(articleone));  
});

app.get('/article-two',function (req, res) { 
    res.send('article one requested and will be served here');  
  
}); 
app.get('/article-three',function (req, res) { 
    res.send('article one requested and wi ll be served here');  
});

app.get('/ui/style.css',function (req, res) {
   res.sendfile(path.join(_dirname, 'ui', 'style.css'));
});


app.get('/ui/madi.png',function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');
    // passport = require('passport'),
    // passportLocalMongoose = require('passport-local-mongoose');

// creating/connecting to database
mongoose.connect('mongodb://localhost/my_blog');
// creating schema for blog
var blogSchema = new mongoose.Schema({
    title: String,
    author: String,
    body: String
});
// creating model for blog
var Blog = mongoose.model('Blog', blogSchema);

// seeding database
/*Blog.remove({}, function(err){
    if(err){
        console.log(err);
    } else {
        console.log("removed blog");
        Blog.create({
            title: "Hello Lorem",
            author: "Anonymous",
            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        }, function(err, newBlog){
            if (err){
                console.log(err);
            } else {
                console.log(newBlog);
            }
        });
        Blog.create({
            title: "Hello Hipster",
            author: "Anonymous",
            body: "Pour-over subway tile banjo gochujang, taxidermy normcore butcher 90's cronut etsy before they sold out tofu sartorial put a bird on it. Asymmetrical quinoa chillwave pok pok. Wolf iPhone single-origin coffee, dreamcatcher artisan kickstarter la croix tumblr. Sriracha retro freegan copper mug hexagon kitsch. Succulents intelligentsia hexagon, vinyl hammock leggings cornhole you probably haven't heard of them etsy affogato. Before they sold out fixie truffaut gochujang, bushwick +1 meh master cleanse next level offal intelligentsia biodiesel VHS. Aesthetic glossier photo booth meh flexitarian vice chicharrones XOXO pok pok etsy beard lomo kitsch squid. Mustache PBR&B tattooed crucifix pork belly meggings. Mustache typewriter tacos, cred flannel fanny pack cold-pressed. Narwhal master cleanse whatever roof party. Tacos distillery slow-carb deep v, salvia mixtape roof party af pitchfork gluten-free. Tumeric hell of pinterest austin, quinoa cardigan subway tile green juice plaid banjo."
        }, function(err, newBlog){
            if (err){
                console.log(err);
            } else {
                console.log(newBlog);
            }
        });
        Blog.create({
            title: "Hello Bacon",
            author: "Anonymous",
            body: "Bacon ipsum dolor amet chicken ball tip sausage, pig hamburger meatball ground round meatloaf prosciutto. T-bone porchetta tongue sirloin. Short ribs shoulder tenderloin sirloin, pastrami flank hamburger meatloaf. Tenderloin porchetta t-bone sirloin, tongue pork chop pastrami. Frankfurter strip steak capicola, pancetta corned beef pig short loin drumstick sirloin swine porchetta. Tri-tip jowl frankfurter, filet mignon brisket pork belly strip steak picanha ball tip flank bresaola shankle tail corned beef. Meatloaf corned beef sirloin rump."
        }, function(err, newBlog){
            if (err){
                console.log(err);
            } else {
                console.log(newBlog);
            }
        });
    }
});*/

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('landing');
});

app.get('/blogs', function(req, res){
    res.render('blogs');
});

app.get('*', function(req, res){
    res.send("Sorry page cannot be found.");
});

app.listen(8070, 'localhost', function(){
    console.log("my blog server has started....");
});
var express =require ('express');
var app = express();
var productController = function(req,res){
console.log("calling rest api ");
var products = [
				{id : 1,title:'Rose', description : 'Valentine flower', quantity :500,unitprice :12},
				{id : 2,title:'Gerberra', description : 'Wedding flower', quantity :1500,unitprice :80},
				{id : 3,title:'Lily', description : 'Smelling flower', quantity :800,unitprice :60},
				{id : 4,title:'Lotus', description : 'Worship flower', quantity :1000,unitprice :50},
				{id : 5,title:'MariGold', description : 'Cooking flower', quantity :1500,unitprice :10},
				];
	res.send(products);
	};
	
app.get('/product',productController);

var server= app.listen(8086,function() {
var host =server.address().address
var port =server.address().port
console.log ("Your application is running in http://localhost:8086",host,port)
})
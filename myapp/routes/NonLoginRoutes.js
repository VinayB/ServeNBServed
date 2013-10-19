/*
  Author:Vinay N. Barigidad
  Date:19-Oct-2013
  Desc:Will handle routing the requests to various modules, where pages need
  to be served without user being logged on
--------------------------------------------------------------
History
-------
Date          Auth               Desc 
19-Oct-2013   Vinay N.B.         Created

*/


module.exports ={
 
    getAbout: function(req.,res){
	res.render('about'); // Send about.ejs file to client
    },
    getContactUs: function(req,res){
	res.render('ContactUs');
    },
    getFeatures: function(req,res){
	res.render('features');
    }
}

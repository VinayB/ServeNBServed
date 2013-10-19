
/*
  Author:Vinay N. Barigidad
  Date:19-Oct-2013
  Desc:Routing for all Error pages
  

*/

module.exports = {

    error404: function(req, res){
        res.render('404');
    }

}

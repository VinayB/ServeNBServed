/*


*/

module.exports = {
// Each function is used to make a call to corresponding .ejs file
// Please note the function name and the associated .ejs file name
// are coincedentally similar (or same). This need not have to be the case
// The function name can be getUserSuccess and the page it tries to load can be "myhomepage" (aka myhomepage.ejs)

    getHome: function(req, res) {
	res.render('home');
    },
    error404: function(req, res){
	res.render('404');
    },
	/* if the user clicks on "signup" */
    //signup: function(req, res){
//	res.render('welcome');
  //  },
    /* test route to be deleted. Checking to see how header and gfooter inclusion works */
    signup: function(req, res){
	res.render('signup',{
	    pageTitle: 'Title from passed in variabel',
	    loggedInUser: 'Beta User'
	});
    }
}




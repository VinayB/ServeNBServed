// For now sends index.ejs file 
module.exports = {
// Each function is used to make a call to corresponding .ejs file
// Please note the function name and the associated .ejs file name
// are coincedentally similar (or same). This need not have to be the case
// The function name can be getUserSuccess and the page it tries to load can be "myhomepage" (aka myhomepage.ejs)

    getIndex: function(req, res) {
	res.render('index');
    },
    getLanding: function(req, res) {
	res.render('landing');
    },
    getIncome: function(req, res) {
	res.render('income');
    },
    getExpense: function(req, res) {
	res.render('expense');
    }

// AS we add pages, we can look at either creating appropriate route files to contain
// different calls or we can add all the routing in the same file
 


}
// For now sends index.ejs file 
module.exports = {
    getIndex: function(req, res) {
	res.render('landing');
    }
}
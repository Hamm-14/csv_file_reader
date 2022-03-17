const fileController = require('./file_controller');

const uploadedFileNames = fileController.uploadedFileNames;
const array = uploadedFileNames();
module.exports.home = function(req,res){
    return res.render('home',{
        files: array
    });
}
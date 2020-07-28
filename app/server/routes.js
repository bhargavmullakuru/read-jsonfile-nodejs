let fs = require("fs"),
  path = require("path");
module.exports = function (app) {
  /**
   * Api Route for reading json api based on routes.
   */
  app.get("/get_meta_data/:path/:file_name", function (req, res) {
    // Read the file and send to the callback
    let filePath = path.join(
      __dirname,
      "/filestructure/" + req.params.path + "/" + req.params.file_name + ".json"
    );
    // Reading Json file
    fs.readFile(filePath, handleFile);
    // callback function to handle errors
    function handleFile(err, data) {
      if (err)
        if (err.code == "ENOENT") {
          res.send("File Not Found");
        } else {
          res.send("Some Error Occured");
        }
      else res.json(JSON.parse(data)); // Sending response
    }
  });
};

const path=require("path");

module.exports={
  mode:"development",
  entry:"./src/index.js",
  output:{
      path:path.reset(__dirname,"dist"),
      filename:"bundle.min.js"
  },
  module:{
      rules:[{
        test:"\.css$/i",use:["style-loader","css-loader"]
      }]
  }
};

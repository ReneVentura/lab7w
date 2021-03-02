const path= require("path");

module.exports={
    entry:"./src/index.js",
  
    
    module:{
        rules: [
            
            {
                test: /\.(woff|woff2|ttf|otf)$/,
                use: {
                  loader: 'url-loader'
                }
            }
            
        ]
    }
}
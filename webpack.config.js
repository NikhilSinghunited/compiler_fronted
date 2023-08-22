const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
node: {
    child_process: "empty"
    // fs: "empty", // if unable to resolve "fs"
},
resolve: {
    extensions: [".ts", ".js"],
    fallback: {
      "child_process": false,
      // and also other packages that are not found
    }
  },
module.exports = {
    // ... other configuration options
  
    resolve: {
      fallback: {
        "os": require.resolve("os-browserify/browser"),
      },
    },
  
    // ... other configuration options
  };
  

module.exports = {
  // ... other configuration settings
  resolve: {
    fallback: {
      "child_process": require.resolve("child_process"),
      "os": require.resolve("os-browserify/browser"),
      "path": require.resolve("path-browserify"),
      "stream": require.resolve("stream-browserify"),
      "fs": false, // no polyfill needed for fs, as it's not directly usable in browsers
      "util": require.resolve("util"),
    }
  },
  // ... other configuration settings
  plugins: [
    new NodePolyfillPlugin()
    // ... other plugins
  ],
  // ... other configuration settings
};

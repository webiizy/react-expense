module.exports = function override(config, env) {
  //do stuff with the webpack config...
  //config.entry = "./src/playground/redux_expense.js";
  config.entry = "./src/index.js";

  return config;
};

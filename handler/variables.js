module.exports = (client) => {
  client.variables({
    cash: 0,
    bank: 0
  }, "main"); // The label "main" here is the table of the variable, do not change it unless you're sure what you're doing.
};

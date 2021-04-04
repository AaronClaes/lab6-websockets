exports.go = (server) => {
  const Primus = require("primus");
  let primus = new Primus(server, {});
  primus.on("connection", (spark) => {
    console.log("we have a spark");

    spark.on("data", (data) => {
      console.log(data);
      primus.write(data);
    });
  });
};

module.exports.init = async function() {
  await require("./populateProducts").init();

  console.log("The database is now populated");
  process.exit();
};

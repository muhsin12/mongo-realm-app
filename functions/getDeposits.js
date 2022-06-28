exports = function(arg){


    let collection = context.services.get("mongodb-atlas").db("diamond-lock").collection("deposit");
   /* collection.findOne({ owner_id: context.user.id }).then((doc) => {
      // do something with doc
    });

    To call other named functions:
    var result = context.functions.execute("function_name", arg1, arg2);

    Try running in the console below.
  */
  return collection.find({});
};
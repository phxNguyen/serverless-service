module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "hello folks, welcome to lighthouse team",
        // input: event,
      },
      null,
      2
    ),
  };
};

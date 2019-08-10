const handler = {
  apply: function(target, thisArg, argumentsList) {
    const startDate = new Date();
    console.log('Called', target, ' at ', startDate);

    return startDate;
  },
}

export default handler;
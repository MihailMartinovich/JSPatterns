const handler = {
  'apply': (target, thisArg, argumentsList) => {
    const startDate = new Date();
    console.log('Called', target, ' at ', startDate);

    return target.call(thisArg, ...argumentsList);
  },
}

export default handler;
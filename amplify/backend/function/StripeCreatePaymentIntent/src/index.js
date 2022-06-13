/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const stripe = require('stripe')(
  'sk_test_51K7g1nEkdIEftzMHKtN6WuUHQTbncl77hk5FlkqysTpbXbuQOOSOORymb3eBD9FzSkWYDVTiDmiZAPOL7Gfj5OhI00yA9vO2Iw',
);

exports.handler = async event => {
  const {typeName, arguments} = event;

  if (typeName !== 'Mutation') {
    throw new Error('Request is not a Mutation');
  }
  if (!arguments?.amount) {
    throw new Error('Amount argument is Required');
  }
  //create a payment
  const paymentIntent = await stripe.paymentIntents.create({
    amount: arguments.amount,
    currency: 'usd',
  });
  return {
    clientSecret: paymentIntent.clientSecret,
  };
};

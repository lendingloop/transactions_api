const DOCS = {
  api: [
    {
      payeePayment: "If this transaction is regarding a payee payment",
      groupId: "Transactions group id",
      transactionId: "Transaction id",
      amount: {
        cents: "Amount in cents",
        currency: "Amount currency iso code"
      },
      createdAt: "Timestamp for the transaction object creation",
      completedAt: "Timestamp for the transaction completion",
      status: "Transaction status",
      type: "Transaction type",
      note: "Transaction notes",
      transferMethod: "Transfer method used in the transaction",
      from: "Display name for the account that sent the transaction",
      to: "Display name for the account that received the transaction",
      fxExchangeRate: "FX exchange rate amount, if any",
      fxChargedAmount: "FX exchange charged amount, if any",
      fxConvertedAmount: "FX exchange converted amount, if any",
      fxBillingAmount: "FX exchange billing amount, if any",
      description: "Transaction description",
      cardTransaction: "If this transaction is regarding a credit card",
      points: "Amount of points collected for this transaction in the points program",
      cashLikeTransaction: "If this transaction can be considered cash like",
      processingDate: "Timestamp for the transaction processing",
    },
  ],
};

exports.handler = (_event, _context, callback) => {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(DOCS),
  });
};
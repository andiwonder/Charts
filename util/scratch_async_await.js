// IGNORE THIS FILE, WAS PLAYING AROUND WITH ASYNC AWAIT

const axios = require('axios');

const getCredits = () => {
  return axios.get('http://localhost:4000/credits').then(res => {
    console.log('step 1');
    return res.data;
  });
};

const getDebits = () => {
  return axios.get('http://localhost:4000/debits').then(res => {
    console.log('step 2');
    return res.data;
  });
};

const getBalance = async () => {
  let creditsData;
  let debitsData;
  let creditTotal = 0;
  let debitTotal = 0;

  creditsData = await getCredits();
  debitsData = await getDebits();
  creditsData.map(c => {
    creditTotal += c.amount;
  });

  debitsData.map(d => {
    debitTotal += d.amount;
  });
  console.log('step 3');
  totalbalance = creditTotal - debitTotal;
  console.log('Total balance is ' + totalbalance);
};

// Promise.all(getCredits, getDebits).then(() => {
//   console.log('finished');
// });

getBalance();

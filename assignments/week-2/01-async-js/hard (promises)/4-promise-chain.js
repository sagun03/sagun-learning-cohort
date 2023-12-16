/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
  const wait1Promise = new Promise((res, rej) => {
    setTimeout(() => {
      res(t);
    }, t);
  });
  return wait1Promise;
}

function wait2(t) {
  const wait2Promise = new Promise((res, rej) => {
    setTimeout(() => {
      res(t);
    }, t);
  });
  return wait2Promise;
}

function wait3(t) {
  const wait3Promise = new Promise((res, rej) => {
    setTimeout(() => {
      res(t);
    }, t);
  });
  return wait3Promise;
}

async function calculateTime(t1, t2, t3) {
  const wait1Promise = wait1(t1);
  let result = 0;
  result = await wait1Promise
    .then((res) => {
      result = result + res;
      return wait2(t2);
    })
    .then((res) => {
      result = result + res;
      return wait3(t3);
    })
    .then((res) => {
      result = result + res;
      return result * 1000;
    });
    return result;
}

module.exports = calculateTime;

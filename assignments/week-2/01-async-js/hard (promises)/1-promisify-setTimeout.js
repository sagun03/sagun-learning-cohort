/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

async function wait(n) {
    const promise = new Promise((res, rej) => {
       setTimeout(() => {  
         res()
        }, n * 1000)
    })
  await promise
}

module.exports = wait;

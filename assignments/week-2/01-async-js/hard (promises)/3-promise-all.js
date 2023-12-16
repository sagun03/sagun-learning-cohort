/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
const wait1Promise = new Promise((res, rej) => {
    setTimeout(() => {
        res(t)
    }, t)
})
return wait1Promise
}

function wait2(t) {
    const wait2Promise = new Promise((res, rej) => {
        setTimeout(() => {
            res(t)
        }, t)
    })
    return wait2Promise

}

function wait3(t) {
    const wait3Promise = new Promise((res, rej) => {
        setTimeout(() => {
            res(t)
        }, t)
    })
    return wait3Promise

}

async function calculateTime(t1, t2, t3) {
    const wait1Promise = wait1(t1)
    const wait2Promise = wait2(t2)
    const wait3Promise = wait3(t3)
    const result = await Promise.all([wait1Promise,wait2Promise,wait3Promise])
    const max = result.reduce((a, b) => Math.max(a, b), -Infinity);
    return max * 1000
}

module.exports = calculateTime;

/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    const promise = new Promise( (res, rej) => {
        setTimeout(async () => {
            await res()
        }, milliseconds)
    })
    return promise
}

module.exports = sleep;

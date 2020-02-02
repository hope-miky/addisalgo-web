let t = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// Returns a Promise that resolves after "ms" Milliseconds
function timer(ms) {
    return new Promise(res => setTimeout(res, ms));
}

async function load() { // We need to wrap the loop into an async function for this to work
    for (var i = 0; i < t.length; i++) {
        console.log(t[i]);
        await timer(3000); // then the created Promise can be awaited
    }
}

load();
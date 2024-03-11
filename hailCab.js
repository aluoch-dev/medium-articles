function hailCab() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() < 0.5;
            if (success) {
                resolve("Successfully hailed a cab");
            } else {
                reject("Someone else got it... oops!");
            }
        }, 2000);
    });
}

console.log("Waiting for driver to respond...");

hailCab()
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error); 
    });

console.log("Final shopping experiences...");
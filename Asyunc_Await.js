//Without Async Await
let event1 = new Promise((resolve,reject) => {
   setTimeout(() => { resolve("Event1 is completed!");},2000)
});

let event2 = event1.then((t) => {
    return new Promise((resolve,reject) => resolve(`${t} Event2`));
});

let event3 = event2.then((t) => {
    return new Promise((resolve,reject) => resolve(`${t} Event3`));
});

event3.then((t) => console.log(t));
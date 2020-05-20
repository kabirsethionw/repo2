//With Async Await
var e1,e2,e3;
let events = async () => {
    let event1 = new Promise((resolve,reject) =>{
        setTimeout(() => resolve("Event1 is completed"),2000)
    }); console.log("b1") 
    e1 = await event1;
    console.log("b3"); let event2 = new Promise((resolve,reject) =>{console.log("b5"); resolve(`${e1} Event2`)}); console.log("b4") 
    e2 = await event2;
    let event3 = new Promise((resolve,reject) =>{resolve(`${e2} Event3`)});
    console.log("b2")
    
    // Some synchronous events here 
    // Some synchronous events here
    e3 = await event3;
    // Some synchronous events here

    return {e3};
}

events().then(t => console.log(t)).catch( e => console.error(e));
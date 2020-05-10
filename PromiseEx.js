let SetPass = new Promise((resolve,reject) => { //here function is a callback function
    var pass = prompt("Please Enter new password\n");
    var pass2 = prompt("Please Enter new password to confirm");
    if(pass==pass2)
        resolve("password changed successfully!");
    else
        reject("Both field should match");
})

SetPass.then((success) => { console.log("Message:"+success);
    }).catch((tryAgain) => { console.log("Message:"+tryAgain)})
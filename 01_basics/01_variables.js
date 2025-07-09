const accountId = 144553
let accountEmail = "rudra@gmail.com"
var accountPassword = "12345"
accountCity = "Jajpur"
let accountState;

// accountId = 2  // not allowed

accountEmail="hbo@hc.com"
accountPassword="2121221"
accountCity="Banglore"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope.
*/

console.table([accountEmail,accountPassword,accountCity,accountState])
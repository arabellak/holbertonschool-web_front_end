function welcomeMessage(fullName){
  function message(){
    let mssg = "Welcome"
    alert(mssg + ' ' + fullName);
  }
  return message;
}

let guillaume = welcomeMessage('Guillaume');
let alex = welcomeMessage('Alex');
let fred = welcomeMessage('Fred');

guillaume();
alex();
fred();

function changeMode(size, weight, transform, background, color){
  return funtion change(){
    
  }
}

function main(){
  let spooky = changeMode('9', 'bold', 'uppercase', 'pink', 'green');
  let darkMode = changeMode('12', 'bold', 'capitalize', 'black', 'white');
  let screamMode = changeMode('12', 'normal', 'lowercase', 'white', 'black');

  let p = document.createElement('p');
  p.innerHTML = 'Welcome Holberton!';
  document.body.appendChild(p);

  let btnSpooky = document.createElement('button');
  btnSpooky.innerHTML = 'Spooky';
  document.body.appendChild(btnSpooky);

  let btnDark = document.createElement('button');
  btnDark.innerHTML = 'Dark mode';
  document.body.appendChild(btnDark);

  let btnScream = document.createElement('button');
  btnScream.innerHTML = 'Scream mode';
  document.body.appendChild(btnScream);
}
main();
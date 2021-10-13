let button = document.createElement('button');
button.innerHTML = 'Load data...';

let body = document.getElementsByTagName('body')[0];
body.appendChild(button);

const getData = () => fetch('https://swapi.dev/api/people/');

async function displayData() {
  try {
    let res = await getData();
    if (res.status === 200) {
      let people = await res.json();
      console.log(people);
    } else throw new Error("Data can't be fetched! Try again...");
  } catch (error) {
    console.log(`Uncaught ${error}`);
  }
}

button.addEventListener('click', displayData);

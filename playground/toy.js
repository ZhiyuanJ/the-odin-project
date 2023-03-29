const container = document.querySelector('#container');
const body = document.querySelector("body");

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const parap = document.createElement('p');
parap.textContent = "Hey I am red!";
parap.setAttribute("style", "color : red;")

const thirdHead = document.createElement('h3');
thirdHead.textContent = "Hey I am a blue H3";
thirdHead.setAttribute("style", "color : blue;")

const newDiv = document.createElement('div');
newDiv.classList.add("newDiv");
newDiv.setAttribute("style", "background-color:pink; border-style:solid")

const newh1 = document.createElement('h1');
const newp = document.createElement('p');

newh1.textContent = "I'm in a div."
newp.textContent = "ME TOO!"

newDiv.appendChild(newh1);
newDiv.appendChild(newp);


container.appendChild(content);
container.appendChild(parap);

/*container.appendChild(thirdHead);*/
body.insertBefore(thirdHead, container);

container.appendChild(newDiv);


const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");

const btn2 = document.querySelector("#btn2");
btn2.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });

  const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});
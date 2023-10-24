//document.getElementById('practice1').innerHTML = "OK we will get it";

const button = document.querySelector(".btn");
//button.addEventListener("onclick") function (e){{
  
const header = document.querySelector("#header");
header.onclick = "document.getElementById('header').innerHTML".style.color= green;



const arrayOfObjects = [
    {
        name: "Shakirah",
        likes: "Sharwarma"
    },
    {
        name: "Jane",
        likes: "Pizza"
    }
]

const objectsMapped = arrayOfObjects.map(obj => {
    const newParagraph = document.createElement("p");
    newParagraph.textContent(obj.name);

    body.appendChild(newParagraph);
});


const url = "https://api-thirukkural.vercel.app/api?num=";

const section = document.getElementById("section");
const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const previous = document.getElementById("previous");
const next = document.getElementById("next");

let index = 1; 

previous.addEventListener("click", () => {
  if (index > 1) { 
    index--;
    fetchKural(index);
  }
});

next.addEventListener("click", () => {
  if (index < 1330) { 
    index++;
    fetchKural(index);
  }
});

function fetchKural(index) {
  fetch(url + index)
    .then(response => response.json())
    .then(data => {
        section.textContent =data.sect_tam;
      line1.textContent = data.line1;
      line2.textContent = data.line2;
    })
    .catch(error => console.log(error));
    console.log(response);
}


fetchKural(index);



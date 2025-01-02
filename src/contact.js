import maleImage from "./images/avatar_male.png"
import femaleImage from "./images/avatar_female.png"

export const contact_info = () =>{
    let contact_div = document.getElementById("content");
    contact_div.innerHTML =""

    const firstCard = createCard(maleImage, 'John Doe', 'Chief Cook');
    contact_div.appendChild(firstCard)

    const secondCard = createCard(femaleImage, 'Jane Smith', 'Owner');
    contact_div.appendChild(secondCard)
};

function createCard(imageSrc, name, description) {
    
    let image = document.createElement("img");
    image.src = imageSrc;

    const containerDiv = document.createElement("div");
    containerDiv.className = "container"

    const heading = document.createElement('h4');
    heading.innerHTML = `<b>${name}</b>`;

    const paragraph = document.createElement('p');
    paragraph.textContent = description;

    containerDiv.appendChild(image)
    containerDiv.appendChild(heading);
    containerDiv.appendChild(paragraph);
    return containerDiv;
};
import maleImage from "./images/avatar_male.png"
export const contact_info = () =>{
    let contact_div = document.getElementById("content");
    contact_div.innerHTML =""
    
    //const cardDiv = document.createElement('div');
    //cardDiv.className = 'card';
    //cardDiv.style.width = '300px';

    let image = document.createElement("img");
    image.src = maleImage;

    const containerDiv = document.createElement("div");
    containerDiv.className = "container"

    const heading = document.createElement('h4');
    heading.innerHTML = '<b>John Doe</b>';

    const paragraph = document.createElement('p');
    paragraph.textContent = 'Chief Cook';

    containerDiv.appendChild(heading);
    containerDiv.appendChild(paragraph);
    
    contact_div.appendChild(image);
    contact_div.appendChild(containerDiv);
};
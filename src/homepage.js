const add_div_to_homepage = (classname, id, text) =>{
    let div = document.createElement("div");
    div.className = classname;
    div.id = id;
    div.innerText = text;
    return div;
};

export const home_page = () => {
    let homepage_div = document.getElementById("content");
    homepage_div.innerHTML = "";
    homepage_div.appendChild(add_div_to_homepage("div-content", "first-content",
         "Welcome to Thor's Hammer! My implementation of the Restaurant Page project by the Odin's Project!!"));
    homepage_div.appendChild(add_div_to_homepage("div-content", "second-content",
            "Found this to be, by some distance, much easier than the tic tac toe project."));
    homepage_div.appendChild(add_div_to_homepage("div-content", "third-content",
            "I have used IIFE for the menu, but that was probably not necessary. I have used arrow functions but I still like to use the function"));
    homepage_div.appendChild(add_div_to_homepage("div-content", "third-content",
                "Did not require much help on this one although I did use chatGPT for the CSS!!"));
};
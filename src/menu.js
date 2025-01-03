
const listOfItems = (()=>{
    let basic_array = [];
    const createItem = (name, price, availability)=>{
        return {
            name,
            price,
            availability
        }
    };
    const createArray = () =>{
        basic_array.push(createItem("Soup of the Day", "$10.00", "Yes"));
        basic_array.push(createItem("Dessert of the Day", "$15.00", "Yes"));
        basic_array.push(createItem("Main Course #1 of the Day", "$45.00", "Sold Out!"));
        basic_array.push(createItem("Main Course #2 of the Day", "$50.00", "Yes"));
    }
    const getItems = () => basic_array;
    return {
        createArray,
        getItems
    }
})();

export const menu = () => {
    let menu_div = document.getElementById("content");
    menu_div.innerHTML = "";
    listOfItems.createArray();
    let result_array = listOfItems.getItems();
    let menu_list = document.createElement("ul");
    result_array.forEach(element => {
        let ind_item = document.createElement("li");
        ind_item.innerText = `${element.name}  ${element.price} ${element.availability}`
        menu_list.append(ind_item)
    });
    menu_div.appendChild(menu_list);
};
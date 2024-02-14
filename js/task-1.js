"use strict";

const result = () => {
    const categories = document.querySelector("#categories");
    const categoriesItems = categories.querySelectorAll("li.item");
    console.log(`Number of categories: ${categoriesItems.length}`);

    categoriesItems.forEach(item => {
        const title = item.firstElementChild.textContent;
        const categoriesAmount = item.querySelector("ul").children.length;

        console.log(`Category: ${title}`);
        console.log(`Elements: ${categoriesAmount}`);
    })
};
 
result();

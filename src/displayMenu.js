function displayMenu(){
    const content = document.querySelector('#content');
    
    const title = document.createElement('div');
    title.textContent = 'Dishes';

    const items = document.createElement('div');
    items.classList.add('items');

    const div1 = document.createElement('div');
    div1.classList.add('item');
    const para1 = document.createElement('p');
    para1.textContent = "Butter Chicken";
    const image1 = document.createElement('div');
    image1.classList.add('image');
    div1.appendChild(para1);
    div1.appendChild(image1);

    const div2 = document.createElement('div');
    div2.classList.add('item');
    const para2 = document.createElement('p');
    para2.textContent = "Chicken Biriyani";
    const image2 = document.createElement('div');
    image2.classList.add('image');
    div2.appendChild(para2);
    div2.appendChild(image2);

    const div3 = document.createElement('div');
    div3.classList.add('item');
    const para3 = document.createElement('p');
    para3.textContent = "Butter Chicken";
    const image3 = document.createElement('div');
    image3.classList.add('image');
    div3.appendChild(para3);
    div3.appendChild(image3);

    items.appendChild(div1);
    items.appendChild(div2);
    items.appendChild(div3);

    content.appendChild(title);
    content.appendChild(items);
    

}

export {displayMenu}
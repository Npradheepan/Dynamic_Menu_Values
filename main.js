const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./images/img10.jfif",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "./images/img1.jfif",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "./images/img2.jfif",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./images/img3.jfif",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "./images/img4.jfif",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./images/img5.jfif",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "./images/img6.jfif",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "./images/img7.jfif",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "./images/img8.jfif",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      title: "bison steak",
      category: "dinner",
      price: 22.99,
      img: "./images/img9.jfif",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ]
//Function properties
 const sectionCenter = document.querySelector(".section-center");
 const container = document.querySelector(".btn-container")
// Loding page
 window.addEventListener("DOMContentLoaded", function() {
    dispalyMenuIterms(menu);
    // const categories = menu.map(function (iterm) {
        // return iterm.category; 
        const categories = menu.reduce(function ( values,item) {
            if(!values.includes(item.category)) {
                values.push(item.category)
            }
        return values; 
    },['all']);
    //console.log(categories);
    //Button Dynamyc Display
    const categoryBtns = categories.map((category)=> {
        return `<button type="button" class="filter-btn" data-id=${category}> ${category}</button>`
    } ).join(" ");
    console.log(categoryBtns);
    container.innerHTML = categoryBtns;
    const filterBtn = container.querySelectorAll(".filter-btn");
    //Page Filtering
 filterBtn.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
           const category = e.currentTarget.dataset.id;
           const menuCategory = menu.filter(function(menuItems) {
               //console.log(menuIterms.category);
               if(menuItems.category === category) {
               return menuItems;
               }
           });
           if(category === "all") {
               dispalyMenuIterms(menu);
           }else {
               dispalyMenuIterms(menuCategory)
           }
          // console.log(menuCategory)
    });
});
 });
//Dynamicly Html 
 function dispalyMenuIterms(menuItems) {
    let dispalyMenu = menuItems.map(function(item) {
        return `<article class="menu-item">
        <img src=${item.img} alt="menu item" class="photo" />
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price">${item.price}</h4>
          </header>
          <p class="item-text">
            ${item.desc}
          </p>
        </div>
      </article>`
    });
   dispalyMenu = dispalyMenu.join(" ");
   sectionCenter.innerHTML = dispalyMenu;
 }
 


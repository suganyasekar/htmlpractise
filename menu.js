const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./image/item-2.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./image/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./image/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./image/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./image/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./image/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "dinner",
    price: 8.99,
    img: "./image/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  }
];

const maincontainer = document.querySelector(".menu-list");
const filterbtn = document.querySelectorAll(".filter-btn");

window.addEventListener("DOMContentLoaded",function(){
  displaymenuitem(menu);
})

filterbtn.forEach(function(btn){
  console.log(btn);
  btn.addEventListener("click",function(e){
    let fltcategory = e.target.dataset.id;
    let fltrlist = menu.filter(menuitem => menuitem.category == fltcategory);
    console.log(fltrlist);
    if(fltcategory ==="all")
    displaymenuitem(menu);
    else
    displaymenuitem(fltrlist);
  })


 
});




function displaymenuitem(menulist){
  const displayitem = menulist.map(function(item){

    return `          <article class="menu-item">
    <img src="${item.img}">
    <div>
        <heading class="item-txt">
            <h3>${item.title}</h3>
            <h3 style="color: goldenrod;">$${item.price}</h3>
        </heading>
        <p class="menu-para">${item.desc}</p>

    </div>
</article>`
  }).join("");
  maincontainer.innerHTML = displayitem;
}
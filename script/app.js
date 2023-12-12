const reviews = [{
    id : 1,
    name : "susan",
    title : "developer",
    img : "./image/person-2.jpeg",
    msg : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iust"

},
{
    id : 2,
    name : "susi",
    title : "developer",
    img : "./image/person-3.jpeg",
    msg : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iust"

},{
    id : 3,
    name : "susish",
    title : "developer",
    img : "./image/person-4.jpeg",
    msg : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iust"

},
{
id : 4,
name : "susanu",
title : "developer",
img : "./image/person-1.jpeg",
msg : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iust"

}]

const img = document.getElementById("person-img");
const ename = document.getElementById("author");
const ejob = document.getElementById("job");
const einfo = document.getElementById("info");

const btnprev = document.getElementById("prev-btn");
const btnnext = document.getElementById("next-btn");
const btnrand = document.getElementById("random-btn");

let currentuser = 0;
window.addEventListener("DOMContentLoaded",function(){
const item  = reviews[currentuser];
img.src = item.img;
ename.textContent = item.name;
ejob.textContent = item.title;
einfo.textContent = item.msg;
});

btnprev.addEventListener('click',function(){
    if(currentuser !=0){
        currentuser -= 1;}
        else{
            currentuser = reviews.length - 1;
        }
    const item  = reviews[currentuser];
img.src = item.img;
ename.textContent = item.name;
ejob.textContent = item.title;
einfo.textContent = item.msg;

});

btnnext.addEventListener('click',function(){
    if(currentuser == reviews.length)
    {
        currentuser = 0;
    }
    else{
        currentuser += 1;
    }
    console.log(currentuser);
    const item  = reviews[currentuser];
img.src = item.img;
ename.textContent = item.name;
ejob.textContent = item.title;
einfo.textContent = item.msg;
});

btnrand.addEventListener('click',function(){
    const randomnum = Math.floor(Math.random() * reviews.length);
    console.log(randomnum);
    const item  = reviews[randomnum];
img.src = item.img;
ename.textContent = item.name;
ejob.textContent = item.title;
einfo.textContent = item.msg;
});


const navtoggle = document.getElementById("nav-toggle");
const links = document.getElementById("links");

navtoggle.addEventListener("click",function(){
  
        links.classList.toggle("show-links");
});

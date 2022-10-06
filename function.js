
/*========================SIDEBAR FUNCTION SLIDE=======================*/
let sidebar = document.querySelector('.sidebar');
let sidebarBtn = document.querySelector('.sidebarBtn');

sidebarBtn.onclick = function () {
    sidebar.classList.toggle('active');
}

/*====================INSPECT LIST OF FOODS NAME AND PRICE================*/

let firstFood = {
    name: 'Beef Steak',
    price: '50 pes0s',
};
let secondFood = {

    name: 'Ginataang Baboy',
    price: '70 pesos only per serve',

};
let thirdFood = {

    name: 'Ginataang Baboy',
    price: '70 pesos only per serve',

};
let fourthFood = {

    name: 'Ginataang Baboy',
    price: '70 pesos only per serve',

};
let fifthFood = {

    name: 'Ginataang Baboy',
    price: '70 pesos only per serve',

};
let sixFood = {

    name: 'Ginataang Baboy',
    price: '70 pesos only per serve',

};

console.log(firstFood);
console.log(secondFood);
console.log(thirdFood);
console.log(fourthFood);
console.log(fifthFood);
console.log(sixFood);

/*==========ACTIVE LINK LOCATION========*/

let searchingBox = document.querySelector('.searching-box');
let buttonBox = document.querySelector('.button-box');

buttonBox.onclick = function (){
    searchingBox.classList.toggle('active');
}
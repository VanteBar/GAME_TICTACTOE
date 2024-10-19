let winner='';

const contentWrapper=document.getElementById('content');
const modalRes=document.getElementById('modal-res-wrapper');
const overlay=document.getElementById('overlay');
const btnClose=document.getElementById('btn-close');


const a1 = document.getElementById('A1');
const a2 = document.getElementById('A2');
const a3 = document.getElementById('A3');

const b1 = document.getElementById('B1');
const b2 = document.getElementById('B2');
const b3 = document.getElementById('B3');

const c1 = document.getElementById('C1');
const c2 = document.getElementById('C2');
const c3 = document.getElementById('C3');

const mas =[a1, a2, a3, b1, b2, b3, c1, c2, c3];
console.log(mas[a1]);

let flag='';
//проверка на победителя 
const checkWinner = () => {
    const square = document.getElementsByClassName('square');
    console.log(square);
    const arr = [
        [0, 1, 2],
        [3, 4, 5], 
        [6, 7, 8],
        [0, 3, 6], 
        [1, 4, 7], 
        [2, 5, 8],
        [0, 4, 8], 
        [2, 4, 6]
    ];
    
    for(i =0;i<arr.length;i++){
        if(square[arr[i][0]].innerHTML ==='X' && square[arr[i][1]].innerHTML ==='X' 
                && square[arr[i][2]].innerHTML ==='X'){
            winner='крестики';
            flag='x';
            prepare();
            
        } else if(square[arr[i][0]].innerHTML ==='O' && square[arr[i][1]].innerHTML ==='O' 
                && square[arr[i][2]].innerHTML ==='O'){
            winner='нолики';
            flag='o';
            prepare();
        } 
    }
    
};

//вывод победителя 
const prepare= () =>{
    if ((pl===1) && (flag==='x')){
        contentWrapper.innerHTML="Победил игрок 1";
    } else if ((pl === 2) && (flag==='x')){
        contentWrapper.innerHTML="Победил игрок 2";
    } else if ((pl === 2) && (flag==='o')){
        contentWrapper.innerHTML="Победил игрок 1";
    } else if ((pl === 1) && (flag==='o')){
        contentWrapper.innerHTML="Победил игрок 2";
    } else if (flag===''){
        contentWrapper.innerHTML="ничья";
    }
    //contentWrapper.innerHTML=Победили ${res} !;
    modalRes.style.display = 'block';
};

//проверка на ничью 
const checkDraw = () =>{
    contentWrapper.innerHTML="ничья";
    modalRes.style.display = 'block';
};

let move=0;
    area.addEventListener('click', e => {
        if ((pl>0) && (e.target.className === 'square')){
            move % 2 === 0 ? e.target.innerHTML = 'X' : e.target.innerHTML = 'O';
            move++; 
            count++;
            if (count === 9){
                checkDraw();
            }
            checkWinner();
        } else{
            alert('Игроки не выбрали символы!');
        }
    
    });
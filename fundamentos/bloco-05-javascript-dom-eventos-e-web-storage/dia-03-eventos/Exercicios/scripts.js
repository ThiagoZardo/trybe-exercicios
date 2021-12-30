function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
};
  
createDaysOfTheWeek();
  
// Escreva seu código abaixo.
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];


//Exercicio 1
const days = document.getElementById('days');

function diasDinamicos(){
    for(let i = 0; i < dezDaysList.length; i+=1){
        let li = document.createElement('li');
        days.appendChild(li); 
        li.classList.add('day');
        li.innerHTML = dezDaysList[i];
        if(dezDaysList[i] === 24 || dezDaysList[i] === 25 || dezDaysList[i] === 31){
            li.classList.add('holiday');
        }
        if(dezDaysList[i] === 4 || dezDaysList[i] === 11 || dezDaysList[i] === 18 || dezDaysList[i] === 25){
            li.classList.add('friday');
        }
    }
}

diasDinamicos();


//Exercicio 2
//Adcionando botão Fertiados
const buttonsContainer = document.getElementsByClassName('buttons-container')[0];
const buttonFeriado = document.createElement('button');
const txtbuttonFeriado = document.createTextNode('Feriados');

buttonFeriado.appendChild(txtbuttonFeriado);
buttonsContainer.appendChild(buttonFeriado);
buttonFeriado.classList.add('btn-holiday');
buttonFeriado.addEventListener('click', exibeFeriados);



//Exercicio 3
let day = document.getElementsByClassName('day');
let holiday = document.getElementsByClassName('holiday');

function exibeFeriados(feriados){
    for(let i = 0; i < holiday.length; i+=1){
        holiday[i].classList.toggle('fundoVermelho');
    }
};

//Exercicio 4
const buttonSexta = document.createElement('button');
const txtbuttonSexta = document.createTextNode('Sexta-feira');
buttonSexta.appendChild(txtbuttonSexta);
buttonsContainer.appendChild(buttonSexta);
buttonSexta.id = 'btn-friday';


//Exercicio 5
buttonSexta.addEventListener('click', exibeSextou);
let friday = document.getElementsByClassName('friday');
let dezFriday = [4, 11, 18, 25];
let sextou = 'Sextou o/';

function exibeSextou(fridayArray){    
   
    for(let i = 0; i < friday.length; i+=1){
        if(friday[i].innerHTML !== sextou){
            friday[i].innerHTML = sextou;
        } else{
            friday[i].innerHTML = dezFriday[i];
        }
    }
}

//Exercicio 6
for(let i = 0; i < day.length; i+=1){
    day[i].addEventListener('mouseenter', darZoom);
}

function darZoom(event){
    for(let i = 0; i < day.length; i+=1){
        event.target.style.transform='scale(1.8)';
        day[i].style.transform='scale(1)';
        day[i].style.cursor='pointer';
    }
}
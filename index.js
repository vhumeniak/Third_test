const prompt = require("prompt-sync")()
let numInput = prompt("Введіть число від 1 до 100: ")

let numFirst 
let numSecond 


if (numInput.length == 1){
    check2(numInput)
    console.log (numInput,'=', numSecond)
    return
}

else if (numInput.length == 2){
    if (numInput >= 10 && numInput<20){
       check3(numInput) 
       console.log (numInput, '=', numFirst )
    }
    else{
    check1 (numInput[0])
    check2(numInput[1])
        
    console.log(numInput, '=', numFirst, numSecond)
    }
}
else {
    console.log(numInput, '=', 'Сто')
}

function check1(n1){
    switch(n1){
        case '2': numFirst = 'Дватьсять'; break
        case '3': numFirst = 'Трицять'; break
        case '4': numFirst = 'Сорок'; break
        case '5': numFirst = 'П\'ятдесят'; break
        case '6': numFirst = 'Шістдесят'; break
        case '7': numFirst = 'Сімдесят'; break
        case '8': numFirst = 'Вісімдесят'; break
        case '9': numFirst = 'Дев\'яносто'; break
    }
}

function check2(n2){
    switch(n2){
        case '0': numSecond = 'Нуль'; break
        case '1': numSecond = 'Один'; break
        case '2': numSecond = 'Два'; break
        case '3': numSecond = 'Три'; break
        case '4': numSecond = 'Чотири'; break
        case '5': numSecond = 'П\'ять'; break
        case '6': numSecond = 'Шість'; break
        case '7': numSecond = 'Сім'; break
        case '8': numSecond = 'Вісім'; break
        case '9': numSecond = 'Дев\'ять'; break
    }
}

function check3(n3){
    switch(n3){
        case '10': numFirst = 'Десять'; break
        case '11': numFirst = 'Одинацять'; break
        case '12': numFirst = 'Дванацять'; break
        case '13': numFirst = 'Тринацять'; break
        case '14': numFirst = 'Чотирнацять'; break
        case '15': numFirst = 'П\'ятнацять'; break
        case '16': numFirst = 'Шіснацять'; break
        case '17': numFirst = 'Сімнацять'; break
        case '18': numFirst = 'Вісімнацять'; break
        case '19': numFirst = 'Дев\'ятнацять'; break
    }
}
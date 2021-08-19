/*1 запросить число и его степень в качестве параметров. 
не забудьте проверить что степень может быть 0 или отрицательная*/

/*
function exponentiation (num, extent){
    let res = 0;

    if (num != 0){
        if(extent == 0){
            res = 1;
        }else if(extent < 0){
            extent *= -1;
            res = 1/(num ** extent);
            alert(`Число ${num} в степени ${extent}  равно: ${res}`);
    
        } else {
            res = num ** extent;
            alert(`Число ${num} в степени ${extent}  равно: ${res}`);
        }
    }
    else{
        alert('0 в любой степени будет 0!!');
    }
}

let a, n;
a = Number(prompt('Введите любое число'));
n = Number(prompt('Введите степень, в которую необходимо возвести заданное число'));


if(isNaN(a) || isNaN(n)){
    alert('Либо число либо степень введены не корректно!!!');
} else {
    exponentiation(a, n); 
}

*/

/*
2 делить число 1000 на 2 до тех пор, пока не получится число меньше 50. 
вывести это число (результат) и сколько раз делений произвели

*/
/*
let num1 = 1000, num2 = 2, count = 0;

function deduction (x, y){
    while(x > 50){
        x = x / y;
        count++;
    };
    console.log(`Число: ${x}, количество делений: ${count}`);
}

deduction(num1, num2);
*/

/*
3 пользователь вводит число. найти ближайшее к нему, которое кратно на 11.
*/

function userNumCheck(num){
    let res1, res2, i1, i2, digit1, digit2;
    digit1 = digit2 = num;

    if(num < 11 && num >=0){
        alert(`11 ближайшее число к ${num}, которое кратно 11`);
    } else {
        while(res1 != 0){
            res1 = digit1%11;
            i1 = digit1;
            --digit1;
        }
        
        while(res2 != 0){
            res2 = digit2%11;
            i2 = digit2;
            ++digit2;
        }

        let deduct1 = num - i1;
        let deduct2 = i2 - num;

        if(deduct1 > deduct2){
            alert(`${i2} ближайшее число к ${num}, которое кратно 11`);
        } else {
            alert(`${i1} ближайшее число к ${num}, которое кратно 11`);
        }
        
    }

}

let a = Number(prompt('Введите любое число:'));

userNumCheck(a);


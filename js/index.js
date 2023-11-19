// объяви переменную health, в которой будем хранить здоровье дракона
// изначально у него 50 единиц здоровья
let health = 50;
let enemyNode = document.querySelector(`#enemy`);
let healthNode = document.querySelector(`#health`);

    


enemyNode.addEventListener(`click`, function () {
    // уменьшай здоровье на 1 единицу
    health -= 1;
    


    // показывай результат на экране
    // выглядеть должно так 'Здоровье: 40'
    healthNode.innerHTML = `Здоровье: ` + health;
});

// объяви переменную count со значением 0
// с помощью неё ты будешь отсчитывать, какой сейчас удар
let count = 0
    


enemyNode.addEventListener(`click`, function () {
    // увеличивай счётчик атаки на 1
    
    count++;
    


if (count == 1) {
    health -= 1;
    } else if (health -= 1) {
        health -= 3;
    } else {
        health -= 10;
        count = 0;
    }

})
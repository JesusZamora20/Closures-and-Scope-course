// function moneyBox(coins){
//     let saveCoins = 0;

//     saveCoins += coins;

//     console.log(saveCoins);
// }

// moneyBox(5);
// moneyBox(5);

function moneyBox(){
    let saveCoins = 0;

    function CountCoins(coins){
        saveCoins += coins;
        console.log(saveCoins);
    }

    return CountCoins;
}

const myMoneyBox =  moneyBox();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);

const moneyBoxDeJesu = moneyBox();
moneyBoxDeJesu(10);
moneyBoxDeJesu(20);
moneyBoxDeJesu(5);
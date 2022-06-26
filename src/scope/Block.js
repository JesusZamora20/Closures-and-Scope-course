function Fruits(){
    if(1){
        var fruit1 = 'Apple'; //function scope
        let fruit2 = 'Kiwi'; //block scope
        const fruit3 = 'Banana'; //block scope
    }

    console.log(fruit1);//si sale
    console.log(fruit2);//no sale
    console.log(fruit3);//no sale
}
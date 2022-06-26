function Greeting(){
    let userName = 'Jesus';

    function displayUserName(){
        return `Hello ${userName}`;
    }

    return displayUserName;
}

const g = Greeting();

console.log(g);
console.log(g());
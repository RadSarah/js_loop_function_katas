(function(){
    
    
    function oneThroughTwenty() {
        
        const numbers = []
    
        // Your code goes below
        for(let i = 1;i<=20;i++){
            numbers.push(i)
        }
        return numbers;
    }
    console.log(oneThroughTwenty());
    console.log(oneThroughTwenty().length)


    function evensToTwenty() {
        const numbers = []

        // Your code goes below
        for(let i = 0; i <= 20;i+=2){
            numbers.push(i)
        }

        return numbers;
    }
    console.log(evensToTwenty());


    function oddsToTwenty() {
        const numbers = []

        // Your code goes below
        for(let i = 1; i <= 20; i+=2){
            numbers.push(i)
        }

        return numbers;
    }
    console.log(oddsToTwenty());

    function multiplesOfFive() {
        const numbers = []

        // Your code goes below
        for(let i = 0; i<= 100; i+=5){
            numbers.push(i)
        }

        return numbers;
    }
    console.log(multiplesOfFive());

    function squareNumbers() {
        const numbers = []

        // Your code goes below
        

        return numbers;
    }
    

    function countingBackwards() {
        const numbers = []

        // Your code goes below
    for(let i = 1; i >=20; i--){
            numbers.push(i)
        }

        return numbers;
    }
    console.log(countingBackwards());

    function evenNumbersBackwards() {
        const numbers = []

        // Your code goes below

        return numbers;
    }

    function oddNumbersBackwards() {
        const numbers = []

        // Your code goes below

        return numbers;
    }

    function multiplesOfFiveBackwards() {
        const numbers = []

        // Your code goes below

        return numbers;
    }

    function squareNumbersBackwards() {
        const numbers = []

        // Your code goes below

        return numbers;
    }
    
    
})();
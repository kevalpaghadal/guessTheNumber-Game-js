let secretNumber = Number(Math.trunc(Math.random() * 20) + 1);
let attemptScore = 20;
let highestScore = document.querySelector('.score').textContent;


document.querySelector('.check').addEventListener('click', function () {
    let input = Number(document.querySelector('.inputBox').value);

    document.querySelector('.Attempt').textContent = attemptScore;
    if (!input) {
        document.querySelector('.message').textContent = 'Input box is empty, Please enter the number';
    }
    else if (secretNumber === input) {
        document.querySelector('.message').textContent = '💥Correct Number';
        document.querySelector('.secretNumber').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        
        if (attemptScore > highestScore) {
            document.querySelector('.score').textContent = attemptScore;
            attemptScore = 20;
        }
    }
    else if (secretNumber !== input) {

        if (attemptScore > 0) {
            if(attemptScore < 6){
                document.querySelector('.message2').textContent = `You have only ${attemptScore} attempt left`;
                if(attemptScore == 1){
                    document.querySelector('.message2').textContent = '';
                }
            }
            
            if (secretNumber < input) {
                document.querySelector('.message').textContent = '📈Too high';
                attemptScore = attemptScore - 1;
            }
            else if (secretNumber > input) {
                document.querySelector('.message').textContent = '📉Too low';
                attemptScore = attemptScore - 1;
            }
            else {
                document.querySelector('.message').textContent = '🥺You lost the game';
            }
        }
        else {
            document.querySelector('.message').textContent = '🥺You lost the game'
        }
    }
})

document.querySelector('.restart').addEventListener('click', function () {
    secretNumber = Number(Math.trunc(Math.random() * 20) + 1);
    document.querySelector('.Attempt').textContent = 20;
    document.querySelector('.inputBox').value = '';
    document.querySelector('.secretNumber').textContent = '?';
    document.querySelector('.message').textContent = '🏃🏻‍♂️‍➡️start gussing ....';
    document.querySelector('body').style.backgroundColor = '#222';
})


$(document).ready(function () {      
    var secretNumber;
    $('.again').click(function () {
        score = 20;
        secretNumber = generateRandomNumber();
        $('.message').text('Start guessing...');
        $('.score span').text(score);
        $('.guess').val('');
        $('.number').text('?');
        $('body').css('background-color', '#222');
        $('.number').css('width', '15rem');
    });

    
    function generateRandomNumber() {
        return Math.floor(Math.random() * 10) + 1; 

    }
    function checkAndAlertResult(guess, secretNumber) {
        if (guess === secretNumber) {
            alert('🎉 Correct guess! You won! 🎉');
        } else if (guess < secretNumber) {
            alert('Too low! Try a higher number.');
        } else {
            alert('Too high! Try a lower number.');
        }
    }
    
    $('.check').click(function () {
        
        const guess = Number($('.guess').val());

        
        checkAndAlertResult(guess, secretNumber);
    });
});
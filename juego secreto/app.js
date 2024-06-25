document.addEventListener('DOMContentLoaded', function() {
    const message = document.getElementById('message');
    const guessInput = document.getElementById('guess');
    const submitButton = document.getElementById('submit');
    const attemptsDisplay = document.getElementById('attempts');

    let randomNumber = Math.floor(Math.random() * 10) + 1;
    let attempts = 0;
    const maxAttempts = 3;

    submitButton.addEventListener('click', function() {
        const userGuess = parseInt(guessInput.value);
        attempts++;

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
            message.textContent = 'Por favor, ingresa un número válido entre 1 y 10.';
        } else if (userGuess === randomNumber) {
            message.textContent = `¡Felicidades! Adivinaste el número ${randomNumber} en ${attempts} intentos.`;
            submitButton.disabled = true;
        } else if (attempts >= maxAttempts) {
            message.textContent = `¡Lo siento! No adivinaste el número. Era ${randomNumber}.`;
            submitButton.disabled = true;
        } else {
            message.textContent = userGuess < randomNumber ? 'El número es mayor.' : 'El número es menor.';
        }

        attemptsDisplay.textContent = `Intentos: ${attempts}/${maxAttempts}`;
    });
});

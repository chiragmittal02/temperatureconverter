document.addEventListener("DOMContentLoaded", function () {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitInput = document.getElementById("fahrenheit");
    const convertButton = document.getElementById("convert");

    convertButton.addEventListener("click", function () {
        const celsiusValue = parseFloat(celsiusInput.value);
        const fahrenheitValue = (celsiusValue * 9/5) + 32;

        if (!isNaN(celsiusValue)) {
            fahrenheitInput.value = fahrenheitValue.toFixed(2);
        } else {
            alert("Please enter a valid number in Celsius.");
        }
    });

    // Optional: Convert Fahrenheit to Celsius as well
    fahrenheitInput.addEventListener("input", function () {
        const fahrenheitValue = parseFloat(fahrenheitInput.value);
        const celsiusValue = (fahrenheitValue - 32) * 5/9;

        if (!isNaN(fahrenheitValue)) {
            celsiusInput.value = celsiusValue.toFixed(2);
        } else {
            celsiusInput.value = "";
        }
    });
});

$(document).ready(function() {
    $('#convert').click(function() {
        var fahrenheit = $('#fahrenheit').val();
        
        if (fahrenheit === '') {
            alert('Please enter a temperature in Fahrenheit.');
            return;
        }
        
        var celsius = (parseFloat(fahrenheit) - 32) * (5/9);
        var kelvin = celsius + 273.15;
        
        $('#celsius').text('Temperature in Celsius: ' + celsius.toFixed(2) + ' °C');
        $('#kelvin').text('Temperature in Kelvin: ' + kelvin.toFixed(2) + ' K');
    });

    $('#current-year').text(new Date().getFullYear());
});
$(document).ready(function() {
    // Function triggered when convert button is clicked
    $('#convert').click(function() {
        // Retrieve the value from the input field
        var fahrenheit = $('#fahrenheit').val();
        
        // Check if input is empty
        if (fahrenheit === '') {
            // Display alert if input is empty
            alert('Please enter a temperature in Fahrenheit.');
            return;
        }
        
        // Convert Fahrenheit to Celsius
        var celsius = (parseFloat(fahrenheit) - 32) * (5/9);
        // Convert Celsius to Kelvin
        var kelvin = celsius + 273.15;
        
        // Display results in HTML elements
        $('#celsius').text('Temperature in Celsius: ' + celsius.toFixed(2) + ' °C');
        $('#kelvin').text('Temperature in Kelvin: ' + kelvin.toFixed(2) + ' K');
    });

    // Set current year in the footer
    $('#current-year').text(new Date().getFullYear());
});

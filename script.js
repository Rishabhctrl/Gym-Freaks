// Function to validate form inputs
function validateForm() {
    const name = document.querySelector('input[placeholder="Enter your Name"]').value;
    const age = document.querySelector('input[placeholder="Enter your Age"]').value;
    const gender = document.querySelector('input[placeholder="Enter your Gender"]').value;
    const locality = document.querySelector('input[placeholder="Enter your Locality"]').value;
    const email = document.querySelector('input[placeholder="Enter your Email Id"]').value;
    const phone = document.querySelector('input[placeholder="Enter your Phone Number"]').value;

    if (!name || !age || !gender || !locality || !email || !phone) {
        alert("Please fill out all fields.");
        return false;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (!validatePhoneNumber(phone)) {
        alert("Please enter a valid phone number.");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}

// Email validation
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Phone number validation
function validatePhoneNumber(phone) {
    const regex = /^[0-9]{10}$/;
    return regex.test(phone);
}

// Add event listener to submit button
document.querySelector('.container form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents default form submission
    validateForm();
});

// Call Us Now button functionality
document.querySelector('.btn:nth-child(1)').addEventListener('click', function() {
    window.open('tel:+911234567890');
});

// Email Us button functionality
document.querySelector('.btn:nth-child(2)').addEventListener('click', function() {
    window.open('mailto:support@gymfreaks.com');
});
// Function to calculate BMI
function calculateBMI() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    if (weight === '' || height === '') {
        alert("Please enter both weight and height.");
        return;
    }

    const heightInMeters = height / 100; // Convert height to meters
    const bmi = weight / (heightInMeters * heightInMeters); // BMI formula

    displayBMIResult(bmi);
}

// Function to display BMI result and category
function displayBMIResult(bmi) {
    const resultDiv = document.getElementById('result');
    let bmiCategory;

    if (bmi < 18.5) {
        bmiCategory = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        bmiCategory = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        bmiCategory = 'Overweight';
    } else {
        bmiCategory = 'Obesity';
    }

    resultDiv.innerHTML = `Your BMI is ${bmi.toFixed(2)}, which means you are classified as: <strong>${bmiCategory}</strong>`;
}

// Add event listener for form submission in the fitness calculator
document.getElementById('fitnessForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    calculateBMI(); // Calculate BMI on form submission
});

// Other existing script.js code goes here (e.g., form validation and other functionalities)

// Custom exception class
class InvalidGradeException extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidGradeException"; // Custom error name
    }
}

// Function that accepts a number between 0 and 100 and validates the input
function validateGrade(grade) {
    if (isNaN(grade)) {
        throw new InvalidGradeException("The value is not a number.");
    }
    if (grade < 0 || grade > 100) {
        throw new InvalidGradeException("The grade must be between 0 and 100.");
    }
    return grade; // Return the grade if valid
}

// Testing the function with proper try-catch handling
try {
    let grade = 105; // Try changing this value to test different cases
    validateGrade(grade);
    console.log("Grade is valid: " + grade); // Only prints if no exception is thrown
} catch (e) {
    if (e instanceof InvalidGradeException) {
        console.error(e.name + ": " + e.message); // Catching the custom error
    } else {
        console.error("An unexpected error occurred: " + e.message);
    }
}

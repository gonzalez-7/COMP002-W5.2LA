let myGrades = [100, 100, 90, 73, 78, 94, 86];
let myAverage = 0;

for (let i = 0; i < myGrades.length; i++) {
    myAverage += myGrades[i]; // Now this correctly adds all the grades
}

myAverage = myAverage / myGrades.length; // Calculate the average

console.log("My grade average is " + myAverage); // Logs the average to the console

// Using If...Else conditional statement to know the category each person belong to.....

let gender = prompt("Enter your Gender: Male or Female"); //Declaring a variable and asking the user for information using command prompt

let age = parseInt(prompt("Enter your age  in Figures")); // Declaring a variable, asking the user for input and converting string to number using ParseInt.

if (gender.toUpperCase() === "MALE" && (age >= 1 && age <= 5)) { // Male between 1-5 yrs of age. And using "toUpperCase " it convert the user input to Uppercase
    alert("Your drink is Milk") // show the result by using the alert

} else if (gender.toUpperCase() === "FEMALE" && (age >= 1 && age <= 5)) { //Female between 1-5 yrs of age.
    alert("Your drink is Milk")

} else if (gender.toUpperCase() === "MALE" && (age >= 6 && age <= 10)) {//Male between 6-10 yrs of age.
    alert("Your drink is Chocolate Drink")

} else if (gender.toUpperCase() === "FEMALE" && (age >= 6 && age <= 10)) {//Female between 6-10 yrs of age.
    alert("Your drink is Stawberry Drink")

}else if (gender.toUpperCase() === "MALE" && (age >= 6 && age <= 15)) { //Male between 6-15 yrs of age.
    alert("Your drink is Ice Cream or Youghurt")

} else if (gender.toUpperCase() === "FEMALE" && (age >= 6 && age <= 15)) { //Female between 6-15 yrs of age.
    alert("Your drink is Ice Cream or Youghurt") 

} else if (gender.toUpperCase() === "MALE" && (age >= 10 && age <= 18)) {//Male between 10-18 yrs of age.
    alert("Your drink is Fruit juice and Lime")

} else if (gender.toUpperCase() === "FEMALE" && (age >= 10 && age <= 18)) { //Female between 10-18 yrs of age.
    alert("Your drink is (Fruit Juice andStrawberry ) or plainfruit juice")

} else if (gender.toUpperCase() === "MALE" && (age >= 18 && age <= 25)) { //Male between 18-25 yrs of age.
    alert("Your drink is Vodka or Whiskey")

} else if (gender.toUpperCase() === "FEMALE" && (age >= 18 && age <= 25)) { //Female between 18-25 yrs of age.
    alert("Your drink is Tequila")

} else if (gender.toUpperCase() === "MALE" && (age >= 25 && age <= 40)) { //Male between 25-40 yrs of age.
    alert("Your drink is Beer")

} else if (gender.toUpperCase() === "FEMALE" && (age >= 26 && age <= 60)) { //Female between 25-40 yrs of age.
    alert("Your drink is White wine or Red wine")

} else if (gender.toUpperCase() === "MALE" && (age >= 30 && age <= 60)) { //Female between 30-60 yrs of age.
    alert("Your drink is White wine or Red wine")

} else if ((gender.toUpperCase() === "FEMALE" || gender.toUpperCase() === "MALE") && (age >= 61)) {// Male or Female between 61 yrs above of age.
    alert("Your drink is Non Alcoholic")

} else {
    alert(" Your criteria is not met")
}
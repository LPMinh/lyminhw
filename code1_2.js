var massMark = 78
var heightMark = 1.69
var massJohn = 95
var heightJohn = 1.76


BMImark = massMark / (Math.pow(heightMark, 2))
BMIjohn = massJohn / (Math.pow(heightJohn, 2))
var rs = BMImark > BMIjohn
if (rs == true) {
    console.log("Mark's BMI is higher than John's!")
} else {
    console.log("John's BMI is higher than Mark's!")
}

if (rs == true) {
    console.log("Mark's BMI (%s)  is higher than John's (%s)", BMImark, BMIjohn)
} else {
    console.log("John's BMI (%s)  is higher than Mark's (%s)", BMIjohn, BMImark)
}
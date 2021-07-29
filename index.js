const marksWeigth = 78;
const marksHeight = 1.69;

const johnWeigth = 92;
const johnHeight = 1.95;

const marksBMI = marksWeigth / marksHeight ** 2;
const johnBMI = johnWeigth / johnHeight ** 2;
const marksHigherBMI = marksBMI > johnBMI;

console.log(marksBMI, johnBMI, marksHigherBMI);

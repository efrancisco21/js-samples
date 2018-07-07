//students score, total possible score
//eg 15/20 -> you got a C (75%)!
//A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

let gradeCalc = function (total, score) {
    let percent = (score / total) * 100;
    let letterGrade = '';

    if (percent >= 90) {
        letterGrade = 'A';
    } else if (percent >= 80) {
        letterGrade = 'B';
    } else if (percent >= 70) {
        letterGrade = 'C';
    } else if (percent >= 60) {
        letterGrade = 'D';
    } else {
        letterGrade = 'F';
    }
    return `Score: ${score}/${total}, you got an ${letterGrade} (${percent}%)!`
}

let result = gradeCalc(100, 50);
console.log(result);

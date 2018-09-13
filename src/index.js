module.exports = function solveEquation(equation) {
    const reverseCompareFunction = (a, b) => a - b;
    var elements = equation.replace(/(x\^2){1}|[x* ]/g, '').split(/[+-]/);
    var signs = equation.replace(/[0-9^x* ]/g, '').split('');
    var answer = [];
    if (signs.length == 2) {
        signs.unshift('+');
    } else {
        elements.shift();
    }
    signs.forEach(function (value, index) {
        if (value === '-') {
            elements[index] = elements[index] * (-1);
        }
    });
    var discriminant = elements[1] * elements[1] - 4 * elements[0] * elements[2];

    answer.push(Math.round((-1 * elements[1] + Math.sqrt(discriminant)) / (elements[0] * 2)));
    answer.push(Math.round((-1 * elements[1] - Math.sqrt(discriminant)) / (elements[0] * 2)));
    return answer.sort(reverseCompareFunction);
}

module.exports = function solveEquation(equation) {
  const equationArguments = equation.split(' ');
  console.log(equationArguments);
  const a = Number(equationArguments[0]);
  const b = equationArguments[3] === '-' ? Number(equationArguments[4]) * (-1) : Number(equationArguments[4]);
  const c = equationArguments[7] === '-' ? Number(equationArguments[8]) * (-1) : Number(equationArguments[8]);
  const desc = b**2 - 4 * a * c;
  
  const x1 = Math.round((-b + Math.sqrt(desc)) / (2 * a));
  const x2 = Math.round((-b - Math.sqrt(desc)) / (2 * a));




  return [x1, x2].sort((a, b) => a-b);
}
// console.log(module.exports('-20 * x^2 - 108797540 * x - 130011773690520'));

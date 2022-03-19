let cells = [0, 0];
let code = "";

/**
 * Returns the roots of a number
 * @param {number} num
 * @returns {[number, number, number, boolean]} root1, root2, remainder, positive
 */
function getRoots(num) {
  const positive = num - cells[1] > 0 ? true : false;

  const target = Math.abs(num - cells[1]);
  target;

  if (target == 0) return [0, 0, 0, true];

  if (target < 10) return [0, 0, target, positive];

  const root1 = Math.round(Math.sqrt(target));
  const root2 = Math.floor(target / root1);
  const remainder = target % root1;

  return [root1, root2, remainder, positive];
}

/**
 * Generates a BrainFUck loop based on the value of a character
 * @param {string} char
 */

function generateLoop(char) {
  const ascii = char.charCodeAt(0);

  const [root1, root2, remainder, isPositive] = getRoots(ascii);

  let sign = isPositive ? "+" : "-";

  if (root1 > 0) {
    code += "+".repeat(root1);
    code += "[>";
    code += `${sign}`.repeat(root2);
    code += "<-]";
  }
  code += ">";
  code += `${sign}`.repeat(remainder);
  code += ".<";

  cells[0] = 0;
  cells[1] = ascii;
}

/**
 * Compiles a string literal to BrainFuck equivalent
 * @param {string} text - text used for compilation
 * @returns {string} code - BrainFuck Code
 */
export default function compile(text) {
  // Iterate through string
  text.split("").forEach((char) => {
    generateLoop(char);
  });

  code = code.replace(/<>/g, "");
  const tmp = code;
  cells = [0, 0];
  code = "";

  return tmp;
}

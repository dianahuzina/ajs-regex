export default class Validator {
  validateUsername(name) {
    const threeNumbersInRow = /\d{4,}/;
    const re = /^[a-z]([a-z0-9_-]+)[a-z]$/;
    return !threeNumbersInRow.test(name) && re.test(name); 
  }
}
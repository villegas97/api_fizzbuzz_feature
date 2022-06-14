class FizzBuzzService {
    static applyValidationInExplorer(explorer) {
        if (explorer.score % 5 === 0 && explorer.score % 3 === 0) {
            return (explorer.trick = "FIZZBUZZ");
        } else if (explorer.score % 5 === 0) {
            explorer.score % 5 === 0;
            return (explorer.trick = "BUZZ");
        } else if (explorer.score % 3 === 0) {
            return (explorer.trick = "FIZZ");
        } else {
            return (explorer.trick = explorer.score);
        }
    }
    static applyValidationNumber(number) {
        if (number % 5 === 0 && number % 3 === 0) {
            return "FizzBuzz";
        } else if (number % 5 === 0) {
            return "Buzz";
        } else if (number % 3 === 0) {
            return "Fizz";
        } else {
            return number;
        }
    }
}
module.exports = FizzBuzzService;

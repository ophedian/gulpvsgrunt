var calculator = calculator || {};

(function (calc) {
    calc.divide = function (x, y) {
        return x % y;
    };

    calc.multiply = function (x, y) {
        return x * y;
    };

}(calculator));
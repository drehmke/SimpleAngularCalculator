var AngularCalculator;
(function (AngularCalculator) {
    angular.module("AngularCalculator", []);
    var CalculatorController = (function () {
        function CalculatorController() {
        }
        CalculatorController.prototype.add = function () { this.result = this.firstNumber + this.secondNumber; };
        CalculatorController.prototype.sub = function () { this.result = this.firstNumber - this.secondNumber; };
        CalculatorController.prototype.multiply = function () { this.result = this.firstNumber * this.secondNumber; };
        CalculatorController.prototype.divide = function () { this.result = this.firstNumber / this.secondNumber; };
        return CalculatorController;
    }());
    angular.module("AngularCalculator").controller('calculatorController', CalculatorController);
})(AngularCalculator || (AngularCalculator = {}));

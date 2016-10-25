namespace AngularCalculator {
    angular.module(`AngularCalculator`, []);

    class CalculatorController {
        public result: number;
        public firstNumber: number;
        public secondNumber: number;

        public add()        { this.result = this.firstNumber + this.secondNumber; }
        public sub()        { this.result = this.firstNumber - this.secondNumber; }
        public multiply()   { this.result = this.firstNumber * this.secondNumber; }
        public divide()     { this.result = this.firstNumber / this.secondNumber; }
    }


    angular.module(`AngularCalculator`).controller('calculatorController', CalculatorController);
}
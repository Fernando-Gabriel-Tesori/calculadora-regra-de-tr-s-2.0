import Calculator from './Calculator.js';
import InputField from './InputField.js';
import Button from './Button.js';
import ResultDisplay from './ResultDisplay.js';

class App {
    constructor() {
        this.render();
        this.setupEventListeners();
    }

    render() {
        const appContainer = document.getElementById('app');

        const calculator = document.createElement('div');
        calculator.classList.add('calculator');

        const value1Input = new InputField('value1', 'Valor 1').render();
        const value2Input = new InputField('value2', 'Valor 2').render();
        const value3Input = new InputField('value3', 'Valor 3').render();
        const calculateBtn = new Button('calculateBtn', 'Calcular', this.calculate.bind(this)).render();
        const resultDisplay = new ResultDisplay('result').render();

        calculator.append(value1Input, value2Input, value3Input, calculateBtn, resultDisplay);
        appContainer.appendChild(calculator);
    }

    setupEventListeners() {
        // No need for event listeners setup here, handled within each component
    }

    calculate() {
        const value1 = parseFloat(document.getElementById('value1').value);
        const value2 = parseFloat(document.getElementById('value2').value);
        const value3 = parseFloat(document.getElementById('value3').value);
        const result = Calculator.calculateRuleOfThree(value1, value2, value3);
        this.updateResult(result);
    }

    updateResult(result) {
        const resultDisplay = new ResultDisplay('result');
        resultDisplay.updateResult(result);
    }
}

new App();

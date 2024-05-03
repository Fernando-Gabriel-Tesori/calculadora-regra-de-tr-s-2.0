export default class Calculator {
    static calculateRuleOfThree(value1, value2, value3) {
        if (isNaN(value1) || isNaN(value2) || isNaN(value3)) {
            return "Por favor, insira valores válidos.";
        }

        const result = (value2 * value3) / value1;
        return "Resultado: " + result.toFixed(2);
    }
}

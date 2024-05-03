export default class ResultDisplay {
    constructor(id) {
        this.id = id;
    }

    render() {
        const resultDisplay = document.createElement('p');
        resultDisplay.id = this.id;
        return resultDisplay;
    }

    updateResult(result) {
        document.getElementById(this.id).textContent = result;
    }
}

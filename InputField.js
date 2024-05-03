export default class InputField {
    constructor(id, placeholder) {
        this.id = id;
        this.placeholder = placeholder;
    }

    render() {
        const input = document.createElement('input');
        input.type = 'text';
        input.id = this.id;
        input.placeholder = this.placeholder;
        return input;
    }
}

export default class Button {
    constructor(id, text, onClick) {
        this.id = id;
        this.text = text;
        this.onClick = onClick;
    }

    render() {
        const button = document.createElement('button');
        button.id = this.id;
        button.textContent = this.text;
        button.addEventListener('click', this.onClick);
        return button;
    }
}

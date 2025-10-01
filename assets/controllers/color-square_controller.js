import { Controller } from "@hotwired/stimulus";

class ColorPickerController extends Controller {
    static targets = ['colorSquare', 'select']

    connect() {
        this.selectTarget.classList.add('d-none');
    }

    selectColor(event) {

        if (this.selectedTarget) {
            this.selectedTarget.classList.remove("selected")
        }

        event.currentTarget.classList.add('selected');

        this.selectTarget.value = event.currentTarget.dataset.colorId;

        this.selectedTarget = event.currentTarget;
    }
}

export default ColorPickerController;
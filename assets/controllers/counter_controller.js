import {Controller} from '@hotwired/stimulus';
//import $ from 'jquery';

export default class extends Controller {
    static targets = ['count'];
    count = 0;

    increment() {
        this.count++;
        this.countTargets[0].innerHTML = this.count;
    }
}
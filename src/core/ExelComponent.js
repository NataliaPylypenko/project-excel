import {DOMListener} from "@core/DOMListener";

export class ExelComponent extends DOMListener {
    constructor($root, options = {}) {
        super($root, options.listeners)
        this.name = options.name || ''
    }

    // return component's template
    toHTML () {
        return ''
    }

    init() {
        this.initDOMListeners()
    }

    destroy() {
        this.removeDOMListeners()
    }

}
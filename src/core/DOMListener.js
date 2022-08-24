import {capitalize} from "@core/utils";

export class DOMListener {
    constructor($root, listeners = []) {
        if(!$root) {
            throw new Error(`No $root provided for DOMListener!`)
        }
        this.$root = $root
        this.listeners = listeners
    }

    initDOMListeners() {
        this.listeners.forEach(listener => {
            const method = getMethodName(listener)
            if (!this[method]) {
                throw new Error (`Method ${method} is not implement in ${this.name} Component`)
            }
            this[method] = this[method].bind(this)
            //the same as addEventListener
            this.$root.on(listener, this[method])
        })
    }

    removeDOMListeners() {
        this.listeners.forEach(listener => {
            const method = getMethodName(listener)
            //the same as removeEventListener
            this.$root.off(listener, this[method])
        })
    }

}

function getMethodName(eventName) {
    return 'on' + capitalize(eventName)
}
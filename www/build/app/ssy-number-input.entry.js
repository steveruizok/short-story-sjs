/*! Built with http://stenciljs.com */
const { h } = window.App;

class ShortStoryNumberInput {
    constructor() {
        this.min = 0;
        this.max = 100;
        this.step = 1;
        this.inputChanged = event => {
            const value = event.target.value;
            this.value = value;
            this.updateValue(value);
        };
    }
    componentWillLoad() {
        this.value = this.defaultValue;
    }
    render() {
        return (h("div", { class: "input" },
            h("ssy-input-label", { label: this.label, propName: this.propName }),
            h("input", { id: `stsy_number_input_${this.label}`, name: `stsy_number_input_${this.label}`, type: this.range ? 'range' : 'number', min: this.range ? this.min : null, max: this.range ? this.max : null, step: this.range ? this.step : null, onInput: this.inputChanged, value: this.value })));
    }
    static get is() { return "ssy-number-input"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "defaultValue": {
            "type": "Any",
            "attr": "default-value"
        },
        "label": {
            "type": String,
            "attr": "label"
        },
        "max": {
            "type": Number,
            "attr": "max"
        },
        "min": {
            "type": Number,
            "attr": "min"
        },
        "propName": {
            "type": String,
            "attr": "prop-name"
        },
        "range": {
            "type": Boolean,
            "attr": "range"
        },
        "step": {
            "type": Number,
            "attr": "step"
        },
        "updateValue": {
            "type": "Any",
            "attr": "update-value"
        },
        "value": {
            "state": true
        }
    }; }
    static get style() { return "* {\n	-webkit-box-sizing: border-box;\n	box-sizing: border-box;\n}\n\nshort-story {\n	display: block;\n}\n\n.short-story {\n	display: block;\n	--ssy-border: #e5e9f2;\n	--ssy-text: #1d1d1d;\n	--ssy-outline: #d3dce6;\n	--ssy-fill: #928f8f;\n	--ssy-field: #f5f7ff;\n	--ssy-fieldBorder: #e5e9f2;\n	--ssy-background: none;\n	--ssy-select: #4184f3;\n}\n\n/* Component Container */\n\n.component-row {\n	width: 100%;\n	display: -ms-flexbox;\n	display: flex;\n	-ms-flex-align: center;\n	align-items: center;\n	-ms-flex-pack: center;\n	justify-content: center;\n}\n\n.component-container {\n	margin: 16px auto;\n}\n\n.component {\n	width: auto;\n	display: block;\n}\n\n/* Width Measure */\n\nssy-width-measure {\n	display: block;\n}\n\n.width-measure {\n	text-align: center;\n	font-size: 12px;\n	color: #777;\n	border-top: 1px solid #bbb;\n	padding-top: 8px;\n	width: 100%;\n}\n\n/* Labels */\n\nlabel {\n	font-size: 12px;\n	font-weight: 600;\n	display: block;\n	padding: 8px 0px;\n}\n\n.named-label {\n	text-transform: uppercase;\n	letter-spacing: 1.5px;\n	font-family: 'Avenir', Arial, Helvetica, sans-serif;\n}\n\n.variable-name {\n	letter-spacing: 1.5px;\n	font-family: 'Menlo', 'Courier New', Courier, monospace;\n}\n\n/* Inputs */\n\ninput,\ntextarea {\n	width: 320px;\n	font-family: 'Avenir', Arial, Helvetica, sans-serif;\n	font-size: 14px;\n	font-weight: 500;\n	outline: none;\n	border-radius: 4px;\n	border: 1px solid var(--ssy-border);\n	background-color: var(--ssy-field);\n}\n\n.inputs-container {\n	width: 100%;\n	display: -ms-flexbox;\n	display: flex;\n	-ms-flex-align: center;\n	align-items: center;\n	-ms-flex-pack: start;\n	justify-content: flex-start;\n	-ms-flex-direction: column;\n	flex-direction: column;\n}\n\n.input {\n	width: 100%;\n	margin-bottom: 16px;\n}\n\n/* Text Input */\n\n[type='text'] {\n	padding: 16px;\n}\n\n/* Text Area */\n\ntextarea {\n	padding: 16px;\n}\n\n/* Number */\n\n[type='number'] {\n	padding: 16px;\n}\n\n/* Checkbox */\n\n[type='checkbox'] {\n	position: relative;\n	visibility: hidden;\n}\n\n[type='checkbox']:before {\n	content: '';\n	position: absolute;\n	top: 0;\n	visibility: visible;\n	height: 28px;\n	width: 44px;\n	padding: 0;\n	margin: 0;\n	display: block;\n	border-radius: 14px;\n	-webkit-transition: all 0.15s;\n	transition: all 0.15s;\n	-webkit-box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\n	box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\n	border-color: var(--ssy-border);\n	background-color: var(--ssy-field);\n}\n\n[type='checkbox']:checked:before {\n	border-color: var(--ssy-outline);\n	background-color: var(--ssy-select);\n}\n\n[type='checkbox']::after {\n	position: absolute;\n	content: '';\n	top: -1px;\n	visibility: visible;\n	height: 29px;\n	width: 29px;\n	padding: 0;\n	margin: 0;\n	margin-left: 0px;\n	display: block;\n	border-radius: 100%;\n	-webkit-transform: scale(0.8);\n	transform: scale(0.8);\n	border-color: #fff;\n	background-color: #fff;\n	-webkit-transition: all 0.15s;\n	transition: all 0.15s;\n	cursor: pointer;\n	-webkit-box-shadow: 1.3px 1.3px 2px rgba(0, 0, 0, 0.25),\n		0px 0px 1.3px rgba(13, 13, 13, 0.25);\n	box-shadow: 1.3px 1.3px 2px rgba(0, 0, 0, 0.25),\n		0px 0px 1.3px rgba(13, 13, 13, 0.25);\n}\n\n[type='checkbox']:checked:after {\n	margin-left: 16px;\n	border-color: #ccc;\n	background-color: #f5f7ff;\n}\n\n/* Range */\n\n[type='range'] {\n	background: none;\n	border: none;\n	-webkit-appearance: none;\n	margin: 8px 0;\n}\n[type='range']:focus {\n	outline: none;\n}\n[type='range']::-webkit-slider-runnable-track {\n	width: 100%;\n	height: 8px;\n	cursor: pointer;\n	-webkit-box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\n	box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\n	background: #f5f7ff;\n	border-radius: 0px;\n	border: 1px solid #e5e9f2;\n}\n[type='range']::-webkit-slider-thumb {\n	-webkit-box-shadow: 1.3px 1.3px 2px rgba(0, 0, 0, 0.25),\n		0px 0px 1.3px rgba(13, 13, 13, 0.25);\n	box-shadow: 1.3px 1.3px 2px rgba(0, 0, 0, 0.25),\n		0px 0px 1.3px rgba(13, 13, 13, 0.25);\n	border: 0px solid rgba(0, 0, 0, 0);\n	height: 24px;\n	width: 24px;\n	border-radius: 50px;\n	background: #ffffff;\n	cursor: pointer;\n	-webkit-appearance: none;\n	margin-top: -9px;\n}\n[type='range']:focus::-webkit-slider-runnable-track {\n	background: #f5f7ff;\n}\n[type='range']::-moz-range-track {\n	width: 100%;\n	height: 8px;\n	cursor: pointer;\n	box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\n	background: #f5f7ff;\n	border-radius: 0px;\n	border: 1px solid #e5e9f2;\n}\n[type='range']::-moz-range-thumb {\n	box-shadow: 1.3px 1.3px 2px rgba(0, 0, 0, 0.25),\n		0px 0px 1.3px rgba(13, 13, 13, 0.25);\n	border: 0px solid rgba(0, 0, 0, 0);\n	height: 24px;\n	width: 24px;\n	border-radius: 50px;\n	background: #ffffff;\n	cursor: pointer;\n}\n[type='range']::-ms-track {\n	width: 100%;\n	height: 8px;\n	cursor: pointer;\n	background: transparent;\n	border-color: transparent;\n	color: transparent;\n}\n[type='range']::-ms-fill-lower {\n	background: #f5f7ff;\n	border: 1px solid #e5e9f2;\n	border-radius: 0px;\n	box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\n}\n[type='range']::-ms-fill-upper {\n	background: #f5f7ff;\n	border: 1px solid #e5e9f2;\n	border-radius: 0px;\n	box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\n}\n[type='range']::-ms-thumb {\n	box-shadow: 1.3px 1.3px 2px rgba(0, 0, 0, 0.25),\n		0px 0px 1.3px rgba(13, 13, 13, 0.25);\n	border: 0px solid rgba(0, 0, 0, 0);\n	height: 24px;\n	width: 24px;\n	border-radius: 50px;\n	background: #ffffff;\n	cursor: pointer;\n	height: 8px;\n}\n[type='range']:focus::-ms-fill-lower {\n	background: #f5f7ff;\n}\n[type='range']:focus::-ms-fill-upper {\n	background: #f5f7ff;\n}"; }
}

export { ShortStoryNumberInput as SsyNumberInput };

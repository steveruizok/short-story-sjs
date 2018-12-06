/*! Built with http://stenciljs.com */
const { h } = window.App;

class ShortStoryEnumInput {
    constructor() {
        this.optionTitles = [];
        this.options = [];
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
        return [
            h("ssy-input-label", { label: this.label, propName: this.propName, type: `enum[${typeof this.options[0]}]` }),
            h("div", { class: "enum" },
                h("div", { class: "select", id: `stsy_input_${this.label}` },
                    this.value,
                    h("span", { class: "enum-button" }, "\u25BE")),
                h("select", { id: `stsy_enum_input_${this.label}`, name: `stsy_enum_input_${this.label}`, onChange: this.inputChanged }, this.options.map((o, i) => (h("option", { selected: o === this.value, value: o }, this.optionTitles[i] || o))))),
        ];
    }
    static get is() { return "ssy-enum-input"; }
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
        "options": {
            "type": "Any",
            "attr": "options"
        },
        "optionTitles": {
            "type": "Any",
            "attr": "option-titles"
        },
        "propName": {
            "type": String,
            "attr": "prop-name"
        },
        "updateValue": {
            "type": "Any",
            "attr": "update-value"
        },
        "value": {
            "state": true
        }
    }; }
    static get style() { return "* {\n	-webkit-box-sizing: border-box;\n	box-sizing: border-box;\n}\n\n/* Themes */\n\n.light {\n	--ssy-text: #1d1d1d;\n	--ssy-outline: #d3dce6;\n	--ssy-fill: #928f8f;\n	--ssy-field: #f5f7ff;\n	--ssy-border: 1px solid #e5e9f2;\n	--ssy-knob: #fff;\n	--ssy-select: #4184f3;\n	--ssy-font-family: 'Avenir', Arial, Helvetica, sans-serif;\n	--ssy-code-family: 'Menlo', 'Courier New', Courier, monospace;\n}\n\n.dark {\n	--ssy-text: #ccc;\n	--ssy-outline: #252525;\n	--ssy-fill: #333333;\n	--ssy-field: #222;\n	--ssy-border: 1px solid #303030;\n	--ssy-knob: #3d3d3d;\n	--ssy-select: #1c5cc4;\n	--ssy-font-family: 'Avenir', Arial, Helvetica, sans-serif;\n	--ssy-code-family: 'Menlo', 'Courier New', Courier, monospace;\n}\n\n/* Title */\n\n.title,\n.title a {\n	all: unset;\n	cursor: pointer;\n	-webkit-box-sizing: border-box;\n	box-sizing: border-box;\n	display: block;\n	text-align: left;\n	font-size: 24px;\n	color: var(--ssy-text);\n	font-family: var(--ssy-font-family);\n}\n\n.title a:hover {\n	text-decoration: underline;\n}\n\n/* Component Container */\n\n.component-row {\n	width: 100%;\n	display: -ms-flexbox;\n	display: flex;\n	padding: 16px 0;\n	-ms-flex-align: center;\n	align-items: center;\n	-ms-flex-pack: center;\n	justify-content: center;\n}\n\n.component {\n	width: auto;\n	display: block;\n}\n\n/* Width Measure */\n\nssy-width-measure {\n	display: block;\n}\n\n.width-measure {\n	letter-spacing: 0.5px;\n	font-family: var(--ssy-font-family);\n	text-align: center;\n	font-size: 12px;\n	color: var(--ssy-text);\n	border-top: var(--ssy-border);\n	padding-top: 8px;\n	width: 100%;\n}\n\n/* Labels */\n\nlabel {\n	all: unset;\n	display: -ms-flexbox;\n	display: flex;\n	-ms-flex-pack: justify;\n	justify-content: space-between;\n	margin: 4px 0 12px 0;\n	-webkit-box-sizing: border-box;\n	box-sizing: border-box;\n	font-size: 12px;\n	text-align: left;\n	letter-spacing: 1.5px;\n	font-weight: 600;\n	color: var(--ssy-text);\n}\n\n.named-label {\n	text-transform: uppercase;\n	font-family: var(--ssy-font-family);\n}\n\n.variable-name {\n	letter-spacing: 1.35px;\n	font-family: var(--ssy-code-family);\n}\n\n.type-label {\n	letter-spacing: 1.35px;\n	font-weight: 400;\n	opacity: 0.7;\n	font-family: var(--ssy-code-family);\n}\n\n/* Inputs */\n\ninput,\ntextarea {\n	all: unset;\n	-webkit-box-sizing: border-box;\n	box-sizing: border-box;\n	width: 320px;\n	font-size: 14px;\n	font-weight: 500;\n	outline: none;\n	border-radius: 4px;\n	color: var(--ssy-text);\n	border: var(--ssy-border);\n	font-family: var(--ssy-font-family);\n	background-color: var(--ssy-field);\n}\n\ninput:hover,\ntextarea:hover,\n.select:hover {\n	-webkit-filter: brightness(101%);\n	filter: brightness(101%);\n}\n\ninput:active,\ntextarea:active,\n.select:active {\n	-webkit-filter: brightness(99%);\n	filter: brightness(99%);\n}\n\ninput:focus,\ntextarea:focus,\nselect:focus {\n	-webkit-filter: brightness(101%);\n	filter: brightness(101%);\n}\n\n.inputs-container {\n	width: 100%;\n	display: grid;\n	grid-template-columns: 1fr;\n	grid-auto-rows: auto;\n	grid-gap: 16px;\n	margin-bottom: 32px;\n}\n\n/* Text Input */\n\n[type='text'] {\n	padding: 16px;\n}\n\n/* Text Area */\n\ntextarea {\n	padding: 16px;\n}\n\n/* Number */\n\n.number {\n	position: relative;\n	margin: 0;\n}\n\ninput[type='number'] {\n	padding: 16px;\n}\n\ninput[type='number']::-webkit-inner-spin-button,\ninput[type='number']::-webkit-outer-spin-button {\n	-webkit-appearance: none;\n	margin: 0;\n}\n\n.input-button {\n	all: unset;\n	-webkit-box-sizing: border-box;\n	box-sizing: border-box;\n	cursor: pointer;\n	position: absolute;\n	top: 0px;\n	right: 0px;\n	height: 100%;\n	width: 44px;\n	display: -ms-flexbox;\n	display: flex;\n	-ms-flex-align: center;\n	align-items: center;\n	-ms-flex-pack: center;\n	justify-content: center;\n	color: var(--ssy-text);\n	border: var(--ssy-border);\n	background-color: var(--ssy-field);\n	font-family: var(--ssy-font-family);\n	outline: none;\n}\n\n/* Checkbox */\n\ninput[type='checkbox'] {\n	position: relative;\n	visibility: hidden;\n	display: block;\n	height: 29px;\n}\n\ninput[type='checkbox']:before {\n	content: '';\n	cursor: pointer;\n	position: absolute;\n	top: 0;\n	left: 0;\n	visibility: visible;\n	height: 28px;\n	width: 44px;\n	padding: 0;\n	margin: 0;\n	display: block;\n	border-radius: 14px;\n	-webkit-transition: all 0.15s;\n	transition: all 0.15s;\n	-webkit-box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\n	box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\n	border: var(--ssy-border);\n	background-color: var(--ssy-field);\n}\n\ninput[type='checkbox']:checked:before {\n	border: var(--ssy-outline);\n	background-color: var(--ssy-select);\n}\n\ninput[type='checkbox']::after {\n	content: '';\n	cursor: pointer;\n	position: absolute;\n	top: 0px;\n	visibility: visible;\n	height: 29px;\n	width: 29px;\n	padding: 0;\n	margin: 0;\n	margin-left: 0px;\n	display: block;\n	border-radius: 100%;\n	-webkit-transform: scale(0.8);\n	transform: scale(0.8);\n	background-color: var(--ssy-knob);\n	-webkit-transition: all 0.15s;\n	transition: all 0.15s;\n	cursor: pointer;\n	-webkit-box-shadow: 1.3px 1.3px 2px rgba(0, 0, 0, 0.25),\n		0px 0px 1.3px rgba(13, 13, 13, 0.25);\n	box-shadow: 1.3px 1.3px 2px rgba(0, 0, 0, 0.25),\n		0px 0px 1.3px rgba(13, 13, 13, 0.25);\n}\n\ninput[type='checkbox']:checked:after {\n	margin-left: 16px;\n	background-color: var(--ssy-field);\n}\n\n/* Range */\n\ninput[type='range'] {\n	background: none;\n	border: none;\n	-webkit-appearance: none;\n	margin: 8px 0;\n}\ninput[type='range']:focus {\n	outline: none;\n}\ninput[type='range']::-webkit-slider-runnable-track {\n	width: 100%;\n	height: 8px;\n	cursor: pointer;\n	-webkit-box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\n	box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\n	border-radius: 0px;\n	background: var(--ssy-field);\n	border: var(--ssy-border);\n}\ninput[type='range']::-webkit-slider-thumb {\n	-webkit-box-shadow: 1.3px 1.3px 2px rgba(0, 0, 0, 0.25),\n		0px 0px 1.3px rgba(13, 13, 13, 0.25);\n	box-shadow: 1.3px 1.3px 2px rgba(0, 0, 0, 0.25),\n		0px 0px 1.3px rgba(13, 13, 13, 0.25);\n	border: 0px solid rgba(0, 0, 0, 0);\n	height: 24px;\n	width: 24px;\n	border-radius: 50px;\n	background-color: var(--ssy-knob);\n	cursor: pointer;\n	-webkit-appearance: none;\n	margin-top: -9px;\n}\ninput[type='range']:focus::-webkit-slider-runnable-track {\n	background: var(--ssy-field);\n}\ninput[type='range']::-moz-range-track {\n	width: 100%;\n	height: 8px;\n	cursor: pointer;\n	box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\n	border-radius: 0px;\n	background: var(--ssy-field);\n	border: var(--ssy-border);\n}\ninput[type='range']::-moz-range-thumb {\n	box-shadow: 1.3px 1.3px 2px rgba(0, 0, 0, 0.25),\n		0px 0px 1.3px rgba(13, 13, 13, 0.25);\n	border: 0px solid rgba(0, 0, 0, 0);\n	height: 24px;\n	width: 24px;\n	border-radius: 50px;\n	background: var(--ssy-field);\n	cursor: pointer;\n}\ninput[type='range']::-ms-track {\n	width: 100%;\n	height: 8px;\n	cursor: pointer;\n	background: transparent;\n	border-color: transparent;\n	color: transparent;\n}\ninput[type='range']::-ms-fill-lower {\n	background: var(--ssy-field);\n	border: var(--ssy-border);\n	border-radius: 0px;\n	box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\n}\ninput[type='range']::-ms-fill-upper {\n	background: var(--ssy-field);\n	border: var(--ssy-border);\n	border-radius: 0px;\n	box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\n}\ninput[type='range']::-ms-thumb {\n	box-shadow: 1.3px 1.3px 2px rgba(0, 0, 0, 0.25),\n		0px 0px 1.3px rgba(13, 13, 13, 0.25);\n	border: 0px solid rgba(0, 0, 0, 0);\n	height: 24px;\n	width: 24px;\n	border-radius: 50px;\n	background-color: var(--ssy-knob);\n	cursor: pointer;\n	height: 8px;\n}\ninput[type='range']:focus::-ms-fill-lower {\n	background: var(--ssy-field);\n}\ninput[type='range']:focus::-ms-fill-upper {\n	background: var(--ssy-field);\n}\n\n/* Enum / Select */\n\nselect {\n	all: unset;\n	-webkit-box-sizing: border-box;\n	box-sizing: border-box;\n	position: absolute;\n	top: 0;\n	left: 0;\n	width: 320px;\n	height: 100%;\n	font-family: var(--ssy-font-family);\n	font-size: 14px;\n	font-weight: 500;\n	outline: none;\n	opacity: 0;\n	cursor: pointer;\n}\n\n.enum {\n	position: relative;\n	width: 100%;\n}\n\n.select {\n	position: relative;\n	cursor: pointer;\n	width: 320px;\n	font-size: 14px;\n	font-weight: 500;\n	outline: none;\n	text-align: left;\n	padding: 16px;\n	border-radius: 4px;\n	color: var(--ssy-text);\n	border: var(--ssy-border);\n	font-family: var(--ssy-font-family);\n	background-color: var(--ssy-field);\n}\n\n.enum-button {\n	height: 100%;\n	width: 44px;\n	position: absolute;\n	top: 0;\n	right: 0;\n	display: -ms-flexbox;\n	display: flex;\n	-ms-flex-align: center;\n	align-items: center;\n	-ms-flex-pack: center;\n	justify-content: center;\n	color: var(--ssy-text);\n	border-left: var(--ssy-border);\n	font-family: var(--ssy-font-family);\n}\n\n/* Buttons */\n\nbutton {\n	all: unset;\n	-webkit-box-sizing: border-box;\n	box-sizing: border-box;\n}\n\nbutton:hover {\n	-webkit-filter: brightness(101%);\n	filter: brightness(101%);\n}\n\nbutton:active {\n	-webkit-filter: brightness(99%);\n	filter: brightness(99%);\n}\n\nssy-enum-input:hover {\n	-webkit-filter: brightness(101%);\n	filter: brightness(101%);\n}\n\nssy-boolean-input,\nssy-enum-input,\nssy-number-input,\nssy-string-input,\nssy-boolean-input {\n	display: block;\n	width: 320px;\n	text-align: left;\n	margin: 0 auto;\n}\n\nssy-input-label {\n	width: 100%;\n	display: block;\n	margin: 0;\n	padding: 0;\n}"; }
}

export { ShortStoryEnumInput as SsyEnumInput };

/*! Built with http://stenciljs.com */
const { h } = window.App;

class AppHome {
    constructor() {
        this.theme = 'light';
    }
    render() {
        console.log(this.theme);
        return (h("div", { class: `app-home ${this.theme}` },
            h("h1", null, "Short Story demo"),
            h("p", null,
                h("a", { href: "http://twitter.com/steveruizok/" }, "@steveruizok")),
            h("div", { class: "mode-control" },
                h("label", { htmlFor: "mode-switch" }, "Dark Mode"),
                h("input", { id: "mode-switch", type: "checkbox", onChange: () => (this.theme = this.theme === 'light' ? 'dark' : 'light') })),
            h("short-story", { name: "Simple name", theme: this.theme, knobs: {
                    name: {
                        label: 'Name',
                        type: 'string',
                        defaultValue: 'Steve',
                    },
                }, showWidth: true, renderFunc: ({ name }) => h("p", null,
                    "Hello, my name is ",
                    name,
                    ".") }),
            h("short-story", { name: "All Controls", theme: this.theme, knobs: {
                    name: {
                        label: 'Name',
                        type: 'string',
                        defaultValue: 'Joe',
                    },
                    age: {
                        label: 'Age',
                        type: 'number',
                        defaultValue: 28,
                    },
                    rating: {
                        label: 'Rating',
                        type: 'number',
                        range: true,
                        min: 0,
                        max: 5,
                        step: 1,
                        defaultValue: 3,
                    },
                    country: {
                        label: 'Country',
                        type: 'enum',
                        options: ['Spain', 'Germany', 'England'],
                        defaultValue: 'England',
                    },
                    locale: {
                        label: 'Locale',
                        type: 'enum',
                        options: ['en-gb', 'en-us', 'en-au'],
                        optionTitles: ['British', 'American', 'Australian'],
                        defaultValue: 'en-gb',
                    },
                    isOk: {
                        label: 'Okay',
                        type: 'boolean',
                        defaultValue: false,
                    },
                    diaryEntry: {
                        type: 'string',
                        textarea: true,
                        defaultValue: 'Dear diary...',
                    },
                }, showWidth: true, renderFunc: ({ name, age, rating, isOk, country, locale, diaryEntry, }) => (h("p", null,
                    "Hello, my name is ",
                    name,
                    ", I'm ",
                    age,
                    " years old. I live in ",
                    country,
                    ". I have a ",
                    rating,
                    " star rating. I speak ",
                    locale,
                    ".",
                    ' ',
                    isOk && "I'm okay.",
                    " ",
                    diaryEntry)) })));
    }
    static get is() { return "app-home"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "theme": {
            "state": true
        }
    }; }
    static get style() { return ".app-home {\n	padding: 10px;\n	--ssy-field: #ccc;\n	--ssy-knob: #fff;\n	--ssy-select: #333;\n}\n\n.dark {\n	--link-color: #ff8663;\n	background-color: #1d1d1d;\n	color: #2d64c3;\n}\n\n.light {\n	--link-color: #754e48;\n	background-color: #fff;\n	color: #000;\n}\n\na {\n	color: var(--link-color);\n}\n\n.mode-control {\n	display: -ms-flexbox;\n	display: flex;\n	-ms-flex-align: center;\n	align-items: center;\n	font-family: Arial, Helvetica, sans-serif;\n	margin-bottom: 32px;\n	width: auto;\n}\n\nh1,\nh2 {\n	font-family: Arial, Helvetica, sans-serif;\n}\n\ninput[type='checkbox'] {\n	position: relative;\n	visibility: hidden;\n	display: block;\n	height: 29px;\n}\n\ninput[type='checkbox']:before {\n	content: '';\n	cursor: pointer;\n	position: absolute;\n	top: 0;\n	left: 0;\n	visibility: visible;\n	height: 28px;\n	width: 44px;\n	padding: 0;\n	margin: 0;\n	display: block;\n	border-radius: 14px;\n	-webkit-transition: all 0.15s;\n	transition: all 0.15s;\n	-webkit-box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\n	box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\n	border: var(--ssy-border);\n	background-color: var(--ssy-field);\n}\n\ninput[type='checkbox']:checked:before {\n	border: var(--ssy-outline);\n	background-color: var(--ssy-select);\n}\n\ninput[type='checkbox']::after {\n	content: '';\n	cursor: pointer;\n	position: absolute;\n	top: 0px;\n	visibility: visible;\n	height: 29px;\n	width: 29px;\n	padding: 0;\n	margin: 0;\n	margin-left: 0px;\n	display: block;\n	border-radius: 100%;\n	-webkit-transform: scale(0.8);\n	transform: scale(0.8);\n	background-color: var(--ssy-knob);\n	-webkit-transition: all 0.15s;\n	transition: all 0.15s;\n	cursor: pointer;\n	-webkit-box-shadow: 1.3px 1.3px 2px rgba(0, 0, 0, 0.25),\n		0px 0px 1.3px rgba(13, 13, 13, 0.25);\n	box-shadow: 1.3px 1.3px 2px rgba(0, 0, 0, 0.25),\n		0px 0px 1.3px rgba(13, 13, 13, 0.25);\n}\n\ninput[type='checkbox']:checked:after {\n	margin-left: 16px;\n	background-color: var(--ssy-field);\n}"; }
}

class ShortStory {
    constructor() {
        this.theme = 'dark';
        this.values = { name: 'Steve' };
    }
    componentWillLoad() {
        const state = Object.keys(this.knobs).reduce((acc, key) => {
            const knob = this.knobs[key];
            const input = this.getInput(key, knob);
            return {
                values: Object.assign({}, acc.values, { [key]: knob.defaultValue }),
                inputs: [...acc.inputs, input],
            };
        }, { values: {}, inputs: [] });
        Object.assign(this, state);
    }
    updateKnobValue(key, value) {
        this.values = Object.assign({}, this.values, { [key]: value });
    }
    getInput(key, knob) {
        const { defaultValue } = knob;
        const defaultInputProps = {
            defaultValue,
            label: knob.label,
            propName: key,
            updateValue: value => this.updateKnobValue(key, value),
        };
        const inputTypes = {
            string: {
                input: 'ssy-string-input',
                props: ['textarea'],
            },
            number: {
                input: 'ssy-number-input',
                props: ['range', 'min', 'max', 'step'],
            },
            boolean: {
                input: 'ssy-boolean-input',
                props: [],
            },
            enum: {
                input: 'ssy-enum-input',
                props: ['options', 'optionTitles'],
            },
        };
        // get input-returning function and extra props
        const { input, props } = inputTypes[knob.type];
        // reduce props into default input props
        const propValues = props.reduce((acc, cur) => Object.assign(acc, { [cur]: knob[cur] }), defaultInputProps);
        return h(input, propValues);
    }
    render() {
        const children = this.renderFunc(this.values);
        return [
            this.name && (h("h2", { ref: n => (this.header = n), id: this.name, class: `title ${this.theme}` },
                h("a", { href: `#${this.name}` }, this.name))),
            h("div", { class: "component-row " },
                h("ssy-measure", { theme: this.theme, content: children })),
            h("div", { class: `inputs-container ${this.theme}` }, this.inputs),
        ];
    }
    static get is() { return "short-story"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "inputs": {
            "state": true
        },
        "knobs": {
            "type": "Any",
            "attr": "knobs"
        },
        "name": {
            "type": String,
            "attr": "name"
        },
        "renderFunc": {
            "type": "Any",
            "attr": "render-func"
        },
        "showWidth": {
            "type": Boolean,
            "attr": "show-width"
        },
        "theme": {
            "type": String,
            "attr": "theme"
        },
        "values": {
            "state": true
        }
    }; }
    static get style() { return "* {\n	-webkit-box-sizing: border-box;\n	box-sizing: border-box;\n}\n\n/* Themes */\n\n.light {\n	--ssy-text: #1d1d1d;\n	--ssy-outline: #d3dce6;\n	--ssy-fill: #928f8f;\n	--ssy-field: #f5f7ff;\n	--ssy-border: 1px solid #e5e9f2;\n	--ssy-knob: #fff;\n	--ssy-select: #4184f3;\n	--ssy-font-family: 'Avenir', Arial, Helvetica, sans-serif;\n	--ssy-code-family: 'Menlo', 'Courier New', Courier, monospace;\n}\n\n.dark {\n	--ssy-text: #ccc;\n	--ssy-outline: #252525;\n	--ssy-fill: #333333;\n	--ssy-field: #222;\n	--ssy-border: 1px solid #303030;\n	--ssy-knob: #3d3d3d;\n	--ssy-select: #1c5cc4;\n	--ssy-font-family: 'Avenir', Arial, Helvetica, sans-serif;\n	--ssy-code-family: 'Menlo', 'Courier New', Courier, monospace;\n}\n\n/* Title */\n\n.title,\n.title a {\n	all: unset;\n	cursor: pointer;\n	-webkit-box-sizing: border-box;\n	box-sizing: border-box;\n	display: block;\n	text-align: left;\n	font-size: 24px;\n	color: var(--ssy-text);\n	font-family: var(--ssy-font-family);\n}\n\n.title a:hover {\n	text-decoration: underline;\n}\n\n/* Component Container */\n\n.component-row {\n	width: 100%;\n	display: -ms-flexbox;\n	display: flex;\n	padding: 16px 0;\n	-ms-flex-align: center;\n	align-items: center;\n	-ms-flex-pack: center;\n	justify-content: center;\n}\n\n.component {\n	width: auto;\n	display: block;\n}\n\n/* Width Measure */\n\nssy-width-measure {\n	display: block;\n}\n\n.width-measure {\n	letter-spacing: 0.5px;\n	font-family: var(--ssy-font-family);\n	text-align: center;\n	font-size: 12px;\n	color: var(--ssy-text);\n	border-top: var(--ssy-border);\n	padding-top: 8px;\n	width: 100%;\n}\n\n/* Labels */\n\nlabel {\n	all: unset;\n	display: -ms-flexbox;\n	display: flex;\n	-ms-flex-pack: justify;\n	justify-content: space-between;\n	margin: 4px 0 12px 0;\n	-webkit-box-sizing: border-box;\n	box-sizing: border-box;\n	font-size: 12px;\n	text-align: left;\n	letter-spacing: 1.5px;\n	font-weight: 600;\n	color: var(--ssy-text);\n}\n\n.named-label {\n	text-transform: uppercase;\n	font-family: var(--ssy-font-family);\n}\n\n.variable-name {\n	letter-spacing: 1.35px;\n	font-family: var(--ssy-code-family);\n}\n\n.type-label {\n	letter-spacing: 1.35px;\n	font-weight: 400;\n	opacity: 0.7;\n	font-family: var(--ssy-code-family);\n}\n\n/* Inputs */\n\ninput,\ntextarea {\n	all: unset;\n	-webkit-box-sizing: border-box;\n	box-sizing: border-box;\n	width: 320px;\n	font-size: 14px;\n	font-weight: 500;\n	outline: none;\n	border-radius: 4px;\n	color: var(--ssy-text);\n	border: var(--ssy-border);\n	font-family: var(--ssy-font-family);\n	background-color: var(--ssy-field);\n}\n\ninput:hover,\ntextarea:hover,\n.select:hover {\n	-webkit-filter: brightness(101%);\n	filter: brightness(101%);\n}\n\ninput:active,\ntextarea:active,\n.select:active {\n	-webkit-filter: brightness(99%);\n	filter: brightness(99%);\n}\n\ninput:focus,\ntextarea:focus,\nselect:focus {\n	-webkit-filter: brightness(101%);\n	filter: brightness(101%);\n}\n\n.inputs-container {\n	width: 100%;\n	display: grid;\n	grid-template-columns: 1fr;\n	grid-auto-rows: auto;\n	grid-gap: 16px;\n	margin-bottom: 32px;\n}\n\n/* Text Input */\n\n[type='text'] {\n	padding: 16px;\n}\n\n/* Text Area */\n\ntextarea {\n	padding: 16px;\n}\n\n/* Number */\n\n.number {\n	position: relative;\n	margin: 0;\n}\n\ninput[type='number'] {\n	padding: 16px;\n}\n\ninput[type='number']::-webkit-inner-spin-button,\ninput[type='number']::-webkit-outer-spin-button {\n	-webkit-appearance: none;\n	margin: 0;\n}\n\n.input-button {\n	all: unset;\n	-webkit-box-sizing: border-box;\n	box-sizing: border-box;\n	cursor: pointer;\n	position: absolute;\n	top: 0px;\n	right: 0px;\n	height: 100%;\n	width: 44px;\n	display: -ms-flexbox;\n	display: flex;\n	-ms-flex-align: center;\n	align-items: center;\n	-ms-flex-pack: center;\n	justify-content: center;\n	color: var(--ssy-text);\n	border: var(--ssy-border);\n	background-color: var(--ssy-field);\n	font-family: var(--ssy-font-family);\n	outline: none;\n}\n\n/* Checkbox */\n\ninput[type='checkbox'] {\n	position: relative;\n	visibility: hidden;\n	display: block;\n	height: 29px;\n}\n\ninput[type='checkbox']:before {\n	content: '';\n	cursor: pointer;\n	position: absolute;\n	top: 0;\n	left: 0;\n	visibility: visible;\n	height: 28px;\n	width: 44px;\n	padding: 0;\n	margin: 0;\n	display: block;\n	border-radius: 14px;\n	-webkit-transition: all 0.15s;\n	transition: all 0.15s;\n	-webkit-box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\n	box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\n	border: var(--ssy-border);\n	background-color: var(--ssy-field);\n}\n\ninput[type='checkbox']:checked:before {\n	border: var(--ssy-outline);\n	background-color: var(--ssy-select);\n}\n\ninput[type='checkbox']::after {\n	content: '';\n	cursor: pointer;\n	position: absolute;\n	top: 0px;\n	visibility: visible;\n	height: 29px;\n	width: 29px;\n	padding: 0;\n	margin: 0;\n	margin-left: 0px;\n	display: block;\n	border-radius: 100%;\n	-webkit-transform: scale(0.8);\n	transform: scale(0.8);\n	background-color: var(--ssy-knob);\n	-webkit-transition: all 0.15s;\n	transition: all 0.15s;\n	cursor: pointer;\n	-webkit-box-shadow: 1.3px 1.3px 2px rgba(0, 0, 0, 0.25),\n		0px 0px 1.3px rgba(13, 13, 13, 0.25);\n	box-shadow: 1.3px 1.3px 2px rgba(0, 0, 0, 0.25),\n		0px 0px 1.3px rgba(13, 13, 13, 0.25);\n}\n\ninput[type='checkbox']:checked:after {\n	margin-left: 16px;\n	background-color: var(--ssy-field);\n}\n\n/* Range */\n\ninput[type='range'] {\n	background: none;\n	border: none;\n	-webkit-appearance: none;\n	margin: 8px 0;\n}\ninput[type='range']:focus {\n	outline: none;\n}\ninput[type='range']::-webkit-slider-runnable-track {\n	width: 100%;\n	height: 8px;\n	cursor: pointer;\n	-webkit-box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\n	box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\n	border-radius: 0px;\n	background: var(--ssy-field);\n	border: var(--ssy-border);\n}\ninput[type='range']::-webkit-slider-thumb {\n	-webkit-box-shadow: 1.3px 1.3px 2px rgba(0, 0, 0, 0.25),\n		0px 0px 1.3px rgba(13, 13, 13, 0.25);\n	box-shadow: 1.3px 1.3px 2px rgba(0, 0, 0, 0.25),\n		0px 0px 1.3px rgba(13, 13, 13, 0.25);\n	border: 0px solid rgba(0, 0, 0, 0);\n	height: 24px;\n	width: 24px;\n	border-radius: 50px;\n	background-color: var(--ssy-knob);\n	cursor: pointer;\n	-webkit-appearance: none;\n	margin-top: -9px;\n}\ninput[type='range']:focus::-webkit-slider-runnable-track {\n	background: var(--ssy-field);\n}\ninput[type='range']::-moz-range-track {\n	width: 100%;\n	height: 8px;\n	cursor: pointer;\n	box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\n	border-radius: 0px;\n	background: var(--ssy-field);\n	border: var(--ssy-border);\n}\ninput[type='range']::-moz-range-thumb {\n	box-shadow: 1.3px 1.3px 2px rgba(0, 0, 0, 0.25),\n		0px 0px 1.3px rgba(13, 13, 13, 0.25);\n	border: 0px solid rgba(0, 0, 0, 0);\n	height: 24px;\n	width: 24px;\n	border-radius: 50px;\n	background: var(--ssy-field);\n	cursor: pointer;\n}\ninput[type='range']::-ms-track {\n	width: 100%;\n	height: 8px;\n	cursor: pointer;\n	background: transparent;\n	border-color: transparent;\n	color: transparent;\n}\ninput[type='range']::-ms-fill-lower {\n	background: var(--ssy-field);\n	border: var(--ssy-border);\n	border-radius: 0px;\n	box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\n}\ninput[type='range']::-ms-fill-upper {\n	background: var(--ssy-field);\n	border: var(--ssy-border);\n	border-radius: 0px;\n	box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\n}\ninput[type='range']::-ms-thumb {\n	box-shadow: 1.3px 1.3px 2px rgba(0, 0, 0, 0.25),\n		0px 0px 1.3px rgba(13, 13, 13, 0.25);\n	border: 0px solid rgba(0, 0, 0, 0);\n	height: 24px;\n	width: 24px;\n	border-radius: 50px;\n	background-color: var(--ssy-knob);\n	cursor: pointer;\n	height: 8px;\n}\ninput[type='range']:focus::-ms-fill-lower {\n	background: var(--ssy-field);\n}\ninput[type='range']:focus::-ms-fill-upper {\n	background: var(--ssy-field);\n}\n\n/* Enum / Select */\n\nselect {\n	all: unset;\n	-webkit-box-sizing: border-box;\n	box-sizing: border-box;\n	position: absolute;\n	top: 0;\n	left: 0;\n	width: 320px;\n	height: 100%;\n	font-family: var(--ssy-font-family);\n	font-size: 14px;\n	font-weight: 500;\n	outline: none;\n	opacity: 0;\n	cursor: pointer;\n}\n\n.enum {\n	position: relative;\n	width: 100%;\n}\n\n.select {\n	position: relative;\n	cursor: pointer;\n	width: 320px;\n	font-size: 14px;\n	font-weight: 500;\n	outline: none;\n	text-align: left;\n	padding: 16px;\n	border-radius: 4px;\n	color: var(--ssy-text);\n	border: var(--ssy-border);\n	font-family: var(--ssy-font-family);\n	background-color: var(--ssy-field);\n}\n\n.enum-button {\n	height: 100%;\n	width: 44px;\n	position: absolute;\n	top: 0;\n	right: 0;\n	display: -ms-flexbox;\n	display: flex;\n	-ms-flex-align: center;\n	align-items: center;\n	-ms-flex-pack: center;\n	justify-content: center;\n	color: var(--ssy-text);\n	border-left: var(--ssy-border);\n	font-family: var(--ssy-font-family);\n}\n\n/* Buttons */\n\nbutton {\n	all: unset;\n	-webkit-box-sizing: border-box;\n	box-sizing: border-box;\n}\n\nbutton:hover {\n	-webkit-filter: brightness(101%);\n	filter: brightness(101%);\n}\n\nbutton:active {\n	-webkit-filter: brightness(99%);\n	filter: brightness(99%);\n}\n\nssy-enum-input:hover {\n	-webkit-filter: brightness(101%);\n	filter: brightness(101%);\n}\n\nssy-boolean-input,\nssy-enum-input,\nssy-number-input,\nssy-string-input,\nssy-boolean-input {\n	display: block;\n	width: 320px;\n	text-align: left;\n	margin: 0 auto;\n}\n\nssy-input-label {\n	width: 100%;\n	display: block;\n	margin: 0;\n	padding: 0;\n}"; }
}

class ShortStoryMeasure {
    constructor() {
        this.updateWidth = () => {
            this.width = this.element.clientWidth;
        };
    }
    componentWillLoad() {
        window.addEventListener('resize', this.updateWidth);
    }
    componentDidLoad() {
        this.updateWidth();
    }
    componentDidUpdate() {
        this.updateWidth();
    }
    componentWillUnload() {
        window.removeEventListener('resize', this.updateWidth);
    }
    render() {
        return [
            this.content,
            h("div", { class: `width-measure ${this.theme}` },
                this.width,
                "px"),
        ];
    }
    static get is() { return "ssy-measure"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "content": {
            "type": "Any",
            "attr": "content"
        },
        "element": {
            "elementRef": true
        },
        "theme": {
            "type": String,
            "attr": "theme"
        },
        "width": {
            "state": true
        }
    }; }
    static get style() { return "* {\n	-webkit-box-sizing: border-box;\n	box-sizing: border-box;\n}\n\n/* Themes */\n\n.light {\n	--ssy-text: #1d1d1d;\n	--ssy-outline: #d3dce6;\n	--ssy-fill: #928f8f;\n	--ssy-field: #f5f7ff;\n	--ssy-border: 1px solid #e5e9f2;\n	--ssy-knob: #fff;\n	--ssy-select: #4184f3;\n	--ssy-font-family: 'Avenir', Arial, Helvetica, sans-serif;\n	--ssy-code-family: 'Menlo', 'Courier New', Courier, monospace;\n}\n\n.dark {\n	--ssy-text: #ccc;\n	--ssy-outline: #252525;\n	--ssy-fill: #333333;\n	--ssy-field: #222;\n	--ssy-border: 1px solid #303030;\n	--ssy-knob: #3d3d3d;\n	--ssy-select: #1c5cc4;\n	--ssy-font-family: 'Avenir', Arial, Helvetica, sans-serif;\n	--ssy-code-family: 'Menlo', 'Courier New', Courier, monospace;\n}\n\n/* Title */\n\n.title,\n.title a {\n	all: unset;\n	cursor: pointer;\n	-webkit-box-sizing: border-box;\n	box-sizing: border-box;\n	display: block;\n	text-align: left;\n	font-size: 24px;\n	color: var(--ssy-text);\n	font-family: var(--ssy-font-family);\n}\n\n.title a:hover {\n	text-decoration: underline;\n}\n\n/* Component Container */\n\n.component-row {\n	width: 100%;\n	display: -ms-flexbox;\n	display: flex;\n	padding: 16px 0;\n	-ms-flex-align: center;\n	align-items: center;\n	-ms-flex-pack: center;\n	justify-content: center;\n}\n\n.component {\n	width: auto;\n	display: block;\n}\n\n/* Width Measure */\n\nssy-width-measure {\n	display: block;\n}\n\n.width-measure {\n	letter-spacing: 0.5px;\n	font-family: var(--ssy-font-family);\n	text-align: center;\n	font-size: 12px;\n	color: var(--ssy-text);\n	border-top: var(--ssy-border);\n	padding-top: 8px;\n	width: 100%;\n}\n\n/* Labels */\n\nlabel {\n	all: unset;\n	display: -ms-flexbox;\n	display: flex;\n	-ms-flex-pack: justify;\n	justify-content: space-between;\n	margin: 4px 0 12px 0;\n	-webkit-box-sizing: border-box;\n	box-sizing: border-box;\n	font-size: 12px;\n	text-align: left;\n	letter-spacing: 1.5px;\n	font-weight: 600;\n	color: var(--ssy-text);\n}\n\n.named-label {\n	text-transform: uppercase;\n	font-family: var(--ssy-font-family);\n}\n\n.variable-name {\n	letter-spacing: 1.35px;\n	font-family: var(--ssy-code-family);\n}\n\n.type-label {\n	letter-spacing: 1.35px;\n	font-weight: 400;\n	opacity: 0.7;\n	font-family: var(--ssy-code-family);\n}\n\n/* Inputs */\n\ninput,\ntextarea {\n	all: unset;\n	-webkit-box-sizing: border-box;\n	box-sizing: border-box;\n	width: 320px;\n	font-size: 14px;\n	font-weight: 500;\n	outline: none;\n	border-radius: 4px;\n	color: var(--ssy-text);\n	border: var(--ssy-border);\n	font-family: var(--ssy-font-family);\n	background-color: var(--ssy-field);\n}\n\ninput:hover,\ntextarea:hover,\n.select:hover {\n	-webkit-filter: brightness(101%);\n	filter: brightness(101%);\n}\n\ninput:active,\ntextarea:active,\n.select:active {\n	-webkit-filter: brightness(99%);\n	filter: brightness(99%);\n}\n\ninput:focus,\ntextarea:focus,\nselect:focus {\n	-webkit-filter: brightness(101%);\n	filter: brightness(101%);\n}\n\n.inputs-container {\n	width: 100%;\n	display: grid;\n	grid-template-columns: 1fr;\n	grid-auto-rows: auto;\n	grid-gap: 16px;\n	margin-bottom: 32px;\n}\n\n/* Text Input */\n\n[type='text'] {\n	padding: 16px;\n}\n\n/* Text Area */\n\ntextarea {\n	padding: 16px;\n}\n\n/* Number */\n\n.number {\n	position: relative;\n	margin: 0;\n}\n\ninput[type='number'] {\n	padding: 16px;\n}\n\ninput[type='number']::-webkit-inner-spin-button,\ninput[type='number']::-webkit-outer-spin-button {\n	-webkit-appearance: none;\n	margin: 0;\n}\n\n.input-button {\n	all: unset;\n	-webkit-box-sizing: border-box;\n	box-sizing: border-box;\n	cursor: pointer;\n	position: absolute;\n	top: 0px;\n	right: 0px;\n	height: 100%;\n	width: 44px;\n	display: -ms-flexbox;\n	display: flex;\n	-ms-flex-align: center;\n	align-items: center;\n	-ms-flex-pack: center;\n	justify-content: center;\n	color: var(--ssy-text);\n	border: var(--ssy-border);\n	background-color: var(--ssy-field);\n	font-family: var(--ssy-font-family);\n	outline: none;\n}\n\n/* Checkbox */\n\ninput[type='checkbox'] {\n	position: relative;\n	visibility: hidden;\n	display: block;\n	height: 29px;\n}\n\ninput[type='checkbox']:before {\n	content: '';\n	cursor: pointer;\n	position: absolute;\n	top: 0;\n	left: 0;\n	visibility: visible;\n	height: 28px;\n	width: 44px;\n	padding: 0;\n	margin: 0;\n	display: block;\n	border-radius: 14px;\n	-webkit-transition: all 0.15s;\n	transition: all 0.15s;\n	-webkit-box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\n	box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\n	border: var(--ssy-border);\n	background-color: var(--ssy-field);\n}\n\ninput[type='checkbox']:checked:before {\n	border: var(--ssy-outline);\n	background-color: var(--ssy-select);\n}\n\ninput[type='checkbox']::after {\n	content: '';\n	cursor: pointer;\n	position: absolute;\n	top: 0px;\n	visibility: visible;\n	height: 29px;\n	width: 29px;\n	padding: 0;\n	margin: 0;\n	margin-left: 0px;\n	display: block;\n	border-radius: 100%;\n	-webkit-transform: scale(0.8);\n	transform: scale(0.8);\n	background-color: var(--ssy-knob);\n	-webkit-transition: all 0.15s;\n	transition: all 0.15s;\n	cursor: pointer;\n	-webkit-box-shadow: 1.3px 1.3px 2px rgba(0, 0, 0, 0.25),\n		0px 0px 1.3px rgba(13, 13, 13, 0.25);\n	box-shadow: 1.3px 1.3px 2px rgba(0, 0, 0, 0.25),\n		0px 0px 1.3px rgba(13, 13, 13, 0.25);\n}\n\ninput[type='checkbox']:checked:after {\n	margin-left: 16px;\n	background-color: var(--ssy-field);\n}\n\n/* Range */\n\ninput[type='range'] {\n	background: none;\n	border: none;\n	-webkit-appearance: none;\n	margin: 8px 0;\n}\ninput[type='range']:focus {\n	outline: none;\n}\ninput[type='range']::-webkit-slider-runnable-track {\n	width: 100%;\n	height: 8px;\n	cursor: pointer;\n	-webkit-box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\n	box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\n	border-radius: 0px;\n	background: var(--ssy-field);\n	border: var(--ssy-border);\n}\ninput[type='range']::-webkit-slider-thumb {\n	-webkit-box-shadow: 1.3px 1.3px 2px rgba(0, 0, 0, 0.25),\n		0px 0px 1.3px rgba(13, 13, 13, 0.25);\n	box-shadow: 1.3px 1.3px 2px rgba(0, 0, 0, 0.25),\n		0px 0px 1.3px rgba(13, 13, 13, 0.25);\n	border: 0px solid rgba(0, 0, 0, 0);\n	height: 24px;\n	width: 24px;\n	border-radius: 50px;\n	background-color: var(--ssy-knob);\n	cursor: pointer;\n	-webkit-appearance: none;\n	margin-top: -9px;\n}\ninput[type='range']:focus::-webkit-slider-runnable-track {\n	background: var(--ssy-field);\n}\ninput[type='range']::-moz-range-track {\n	width: 100%;\n	height: 8px;\n	cursor: pointer;\n	box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\n	border-radius: 0px;\n	background: var(--ssy-field);\n	border: var(--ssy-border);\n}\ninput[type='range']::-moz-range-thumb {\n	box-shadow: 1.3px 1.3px 2px rgba(0, 0, 0, 0.25),\n		0px 0px 1.3px rgba(13, 13, 13, 0.25);\n	border: 0px solid rgba(0, 0, 0, 0);\n	height: 24px;\n	width: 24px;\n	border-radius: 50px;\n	background: var(--ssy-field);\n	cursor: pointer;\n}\ninput[type='range']::-ms-track {\n	width: 100%;\n	height: 8px;\n	cursor: pointer;\n	background: transparent;\n	border-color: transparent;\n	color: transparent;\n}\ninput[type='range']::-ms-fill-lower {\n	background: var(--ssy-field);\n	border: var(--ssy-border);\n	border-radius: 0px;\n	box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\n}\ninput[type='range']::-ms-fill-upper {\n	background: var(--ssy-field);\n	border: var(--ssy-border);\n	border-radius: 0px;\n	box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\n}\ninput[type='range']::-ms-thumb {\n	box-shadow: 1.3px 1.3px 2px rgba(0, 0, 0, 0.25),\n		0px 0px 1.3px rgba(13, 13, 13, 0.25);\n	border: 0px solid rgba(0, 0, 0, 0);\n	height: 24px;\n	width: 24px;\n	border-radius: 50px;\n	background-color: var(--ssy-knob);\n	cursor: pointer;\n	height: 8px;\n}\ninput[type='range']:focus::-ms-fill-lower {\n	background: var(--ssy-field);\n}\ninput[type='range']:focus::-ms-fill-upper {\n	background: var(--ssy-field);\n}\n\n/* Enum / Select */\n\nselect {\n	all: unset;\n	-webkit-box-sizing: border-box;\n	box-sizing: border-box;\n	position: absolute;\n	top: 0;\n	left: 0;\n	width: 320px;\n	height: 100%;\n	font-family: var(--ssy-font-family);\n	font-size: 14px;\n	font-weight: 500;\n	outline: none;\n	opacity: 0;\n	cursor: pointer;\n}\n\n.enum {\n	position: relative;\n	width: 100%;\n}\n\n.select {\n	position: relative;\n	cursor: pointer;\n	width: 320px;\n	font-size: 14px;\n	font-weight: 500;\n	outline: none;\n	text-align: left;\n	padding: 16px;\n	border-radius: 4px;\n	color: var(--ssy-text);\n	border: var(--ssy-border);\n	font-family: var(--ssy-font-family);\n	background-color: var(--ssy-field);\n}\n\n.enum-button {\n	height: 100%;\n	width: 44px;\n	position: absolute;\n	top: 0;\n	right: 0;\n	display: -ms-flexbox;\n	display: flex;\n	-ms-flex-align: center;\n	align-items: center;\n	-ms-flex-pack: center;\n	justify-content: center;\n	color: var(--ssy-text);\n	border-left: var(--ssy-border);\n	font-family: var(--ssy-font-family);\n}\n\n/* Buttons */\n\nbutton {\n	all: unset;\n	-webkit-box-sizing: border-box;\n	box-sizing: border-box;\n}\n\nbutton:hover {\n	-webkit-filter: brightness(101%);\n	filter: brightness(101%);\n}\n\nbutton:active {\n	-webkit-filter: brightness(99%);\n	filter: brightness(99%);\n}\n\nssy-enum-input:hover {\n	-webkit-filter: brightness(101%);\n	filter: brightness(101%);\n}\n\nssy-boolean-input,\nssy-enum-input,\nssy-number-input,\nssy-string-input,\nssy-boolean-input {\n	display: block;\n	width: 320px;\n	text-align: left;\n	margin: 0 auto;\n}\n\nssy-input-label {\n	width: 100%;\n	display: block;\n	margin: 0;\n	padding: 0;\n}"; }
}

export { AppHome, ShortStory, ShortStoryMeasure as SsyMeasure };

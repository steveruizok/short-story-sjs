/*! Built with http://stenciljs.com */
const { h } = window.App;

class AppHome {
    render() {
        return (h("div", { class: "app-home" },
            h("p", null, "Short Story demo"),
            h("short-story", { knobs: {
                    name: {
                        label: 'Name',
                        type: 'string',
                        defaultValue: 'Joe',
                    },
                    message: {
                        type: 'string',
                        textarea: true,
                        defaultValue: 'Dear diary...',
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
                    disabled: {
                        label: 'Disabled',
                        type: 'boolean',
                        defaultValue: false,
                    },
                }, showWidth: true, renderFunc: ({ name, age, rating, disabled }) => (h("p", null,
                    "Hello, my name is ",
                    name,
                    ", I'm ",
                    age,
                    " years old. I have a ",
                    rating,
                    ' ',
                    "star rating. ",
                    disabled && 'Disabled!')) })));
    }
    static get is() { return "app-home"; }
    static get encapsulation() { return "shadow"; }
    static get style() { return ".app-home {\n	padding: 10px;\n}\n\nbutton {\n	background: #5851ff;\n	color: white;\n	margin: 8px;\n	border: none;\n	font-size: 13px;\n	font-weight: 700;\n	text-transform: uppercase;\n	padding: 16px 20px;\n	border-radius: 2px;\n	-webkit-box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);\n	box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);\n	outline: 0;\n	letter-spacing: 0.04em;\n	-webkit-transition: all 0.15s ease;\n	transition: all 0.15s ease;\n	cursor: pointer;\n}\n\nbutton:hover {\n	-webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1);\n	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1);\n	-webkit-transform: translateY(1px);\n	transform: translateY(1px);\n}"; }
}

export { AppHome };

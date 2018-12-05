/*! Built with http://stenciljs.com */
const { h } = window.App;

class AppProfile {
    normalize(name) {
        if (name) {
            return name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();
        }
        return '';
    }
    render() {
        if (this.match && this.match.params.name) {
            return (h("div", { class: "app-profile" },
                h("p", null,
                    "Hello! My name is ",
                    this.normalize(this.match.params.name),
                    ". My name was passed in through a route param!")));
        }
    }
    static get is() { return "app-profile"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "match": {
            "type": "Any",
            "attr": "match"
        }
    }; }
    static get style() { return ".app-profile {\n  padding: 10px;\n}"; }
}

export { AppProfile };

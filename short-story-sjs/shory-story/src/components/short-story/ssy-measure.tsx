import { Component, Element, State, Prop } from '@stencil/core'

@Component({
	tag: 'ssy-measure',
	styleUrl: 'short-story.css',
	shadow: true,
})
export class ShortStoryMeasure {
	@State() width: any
	@Prop() theme: string
	@Prop() content: any
	@Element() element: any

	updateWidth = () => {
		this.width = this.element.clientWidth
	}

	componentWillLoad() {
		window.addEventListener('resize', this.updateWidth)
	}

	componentDidLoad() {
		this.updateWidth()
	}

	componentDidUpdate() {
		this.updateWidth()
	}

	componentWillUnload() {
		window.removeEventListener('resize', this.updateWidth)
	}

	render() {
		return [
			this.content,
			<div class={`width-measure ${this.theme}`}>{this.width}px</div>,
		]
	}
}

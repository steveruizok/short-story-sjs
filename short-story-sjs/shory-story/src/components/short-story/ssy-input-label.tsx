import { Component, Prop } from '@stencil/core'

@Component({
	tag: 'ssy-input-label',
	styleUrl: 'short-story.css',
	shadow: true,
})
export class ShortStoryInputLabel {
	@Prop() propName: string
	@Prop() label: string
	@Prop() type: string

	render() {
		return (
			<label class="label" htmlFor={`stsy_input_${this.label}`}>
				<span class="named-label">{this.label || this.propName}</span>
				<span class="type-label">
					{this.propName}: {this.type}
				</span>
			</label>
		)
	}
}

import { Component, Prop } from '@stencil/core'

@Component({
	tag: 'ssy-input-label',
	styleUrl: 'short-story.css',
	shadow: true,
})
export class ShortStoryLabel {
	@Prop() propName: string
	@Prop() label: string

	render() {
		return (
			<label htmlFor={`stsy_number_input_${this.label}`}>
				{this.label ? (
					[
						<span class="named-label">{this.label} (</span>,
						<span class="variable-name">{this.propName}</span>,
						<span class="named-label">)</span>,
					]
				) : (
					<span class="variable-name">{this.propName}</span>
				)}
			</label>
		)
	}
}

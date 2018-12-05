import { Component, Prop, State } from '@stencil/core'

@Component({
	tag: 'ssy-text-input',
	styleUrl: 'short-story.css',
	shadow: true,
})
export class ShortStoryTextInput {
	@Prop() propName: string
	@Prop() updateValue: any
	@Prop() defaultValue: any
	@Prop() textarea: boolean = false
	@Prop() label: string
	@State() value: any

	componentWillLoad() {
		this.value = this.defaultValue
	}

	inputChanged = event => {
		const value = event.target.value
		this.value = value
		this.updateValue(value)
	}

	render() {
		return (
			<div class="input">
				<ssy-input-label label={this.label} propName={this.propName} />
				{this.textarea ? (
					<textarea
						name={`stsy_text_input_${this.label}`}
						id={`stsy_text_input_${this.label}`}
						onInput={(event: UIEvent) => this.inputChanged(event)}
						value={this.value}
					/>
				) : (
					<input
						name={`stsy_text_input_${this.label}`}
						id={`stsy_text_input_${this.label}`}
						type={'text'}
						onInput={this.inputChanged}
						value={this.value}
					/>
				)}
			</div>
		)
	}
}

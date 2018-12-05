import { Component, Prop, State } from '@stencil/core'

@Component({
	tag: 'ssy-boolean-input',
	styleUrl: 'short-story.css',
	shadow: true,
})
export class ShortStoryBooleanInput {
	@Prop() propName: string
	@Prop() updateValue: any
	@Prop() defaultValue: any
	@Prop() label: string
	@State() value: any

	componentWillLoad() {
		this.value = this.defaultValue
	}

	inputChanged = event => {
		const value = event.target.checked
		this.value = value
		this.updateValue(value)
	}

	render() {
		return (
			<div class="input">
				<ssy-input-label label={this.label} propName={this.propName} />
				<input
					id={`stsy_boolean_input_${this.label}`}
					name={`stsy_boolean_input_${this.label}`}
					type={'checkbox'}
					onChange={this.inputChanged}
					value={this.value}
				/>
			</div>
		)
	}
}

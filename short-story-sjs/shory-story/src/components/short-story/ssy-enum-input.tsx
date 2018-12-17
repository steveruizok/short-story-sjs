import { Component, Prop, State } from '@stencil/core'

@Component({
	tag: 'ssy-enum-input',
	styleUrl: 'short-story.css',
	shadow: true,
})
export class ShortStoryEnumInput {
	@Prop() propName: string
	@Prop() optionTitles: string[] = []
	@Prop() options: string[] = []
	@Prop() updateValue: any
	@Prop() defaultValue: any
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
		return [
			<ssy-input-label
				label={this.label}
				propName={this.propName}
				type={`enum[${typeof this.options[0]}]`}
			/>,
			<div class="enum">
				<div class="select" id={`stsy_input_${this.label}`}>
					{this.value}
					<span class="enum-button">▾</span>
				</div>
				<select
					id={`stsy_enum_input_${this.label}`}
					name={`stsy_enum_input_${this.label}`}
					onChange={this.inputChanged}
				>
					{this.options.map((o, i) => (
						<option selected={o === this.value} value={o}>
							{this.optionTitles[i] || o}
						</option>
					))}
				</select>
			</div>,
		]
	}
}

import { Component, Prop, State } from '@stencil/core'

@Component({
	tag: 'ssy-number-input',
	styleUrl: 'short-story.css',
	shadow: true,
})
export class ShortStoryNumberInput {
	@Prop() propName: string
	@Prop() updateValue: any
	@Prop() defaultValue: any
	@Prop() label: string
	@Prop() range: boolean
	@Prop() min: number = 0
	@Prop() max: number = 100
	@Prop() step: number = 1
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
				<input
					id={`stsy_number_input_${this.label}`}
					name={`stsy_number_input_${this.label}`}
					type={this.range ? 'range' : 'number'}
					min={this.range ? this.min : null}
					max={this.range ? this.max : null}
					step={this.range ? this.step : null}
					onInput={this.inputChanged}
					value={this.value}
				/>
			</div>
		)
	}
}

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

	input

	componentWillLoad() {
		this.value = this.defaultValue
	}

	crementValue = (event: MouseEvent, delta: number) => {
		if (event.shiftKey) {
			delta *= 10
		}

		const value = parseFloat(this.input.value) + delta

		this.input.value = parseFloat(this.input.value) + delta
		this.value = value
		this.updateValue(value)
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
				type="number"
			/>,
			<div class="number">
				<input
					ref={node => (this.input = node)}
					id={`stsy_input_${this.label}`}
					name={`stsy_input_${this.label}`}
					type={this.range ? 'range' : 'number'}
					min={this.range ? this.min : null}
					max={this.range ? this.max : null}
					step={this.range ? this.step : null}
					onInput={this.inputChanged}
					value={this.value}
				/>
				{this.range || [
					<button
						style={{ right: '44px' }}
						class="input-button"
						onClick={ev => this.crementValue(ev, -1)}
					>
						−
					</button>,
					<button class="input-button" onClick={ev => this.crementValue(ev, 1)}>
						＋
					</button>,
				]}
			</div>,
		]
	}
}

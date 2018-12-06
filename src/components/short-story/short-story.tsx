import { Component, Prop, State } from '@stencil/core'

interface Knob {
	[key: string]: any
}

interface DefaultInputProps {
	propName: string
	defaultValue?: any
	label?: string
	updateValue: (value: any) => void
}

interface InputType {
	input: string
	props: string[]
}

interface InputTypes {
	[key: string]: InputType
}

interface Values {
	[key: string]: any
}

@Component({
	tag: 'short-story',
	styleUrl: 'short-story.css',
	shadow: true,
})
export class ShortStory {
	@Prop() name: string
	@Prop() theme: string = 'dark'
	@Prop() showWidth: boolean
	@Prop() knobs: { [key: string]: any }
	@Prop() renderFunc: (any) => any

	@State() values: Values = { name: 'Steve' }
	@State() inputs: any[]

	header

	componentWillLoad() {
		const state = Object.keys(this.knobs).reduce(
			(acc, key: string) => {
				const knob = this.knobs[key]
				const input = this.getInput(key, knob)

				return {
					values: { ...acc.values, [key]: knob.defaultValue },
					inputs: [...acc.inputs, input],
				}
			},
			{ values: {}, inputs: [] }
		)

		Object.assign(this, state)
	}

	updateKnobValue(key: string, value: any) {
		this.values = { ...this.values, [key]: value }
	}

	getInput(key: string, knob: Knob) {
		const { defaultValue } = knob

		const defaultInputProps: DefaultInputProps = {
			defaultValue,
			label: knob.label,
			propName: key,
			updateValue: value => this.updateKnobValue(key, value),
		}

		const inputTypes: InputTypes = {
			string: {
				input: 'ssy-string-input',
				props: ['textarea'],
			},
			number: {
				input: 'ssy-number-input',
				props: ['range', 'min', 'max', 'step'],
			},
			boolean: {
				input: 'ssy-boolean-input',
				props: [],
			},
			enum: {
				input: 'ssy-enum-input',
				props: ['options', 'optionTitles'],
			},
		}

		// get input-returning function and extra props
		const { input, props } = inputTypes[knob.type]

		// reduce props into default input props
		const propValues = props.reduce(
			(acc, cur) => Object.assign(acc, { [cur]: knob[cur] }),
			defaultInputProps
		)

		return h(input, propValues)
	}

	render() {
		const children = this.renderFunc(this.values)

		return [
			this.name && (
				<h2
					ref={n => (this.header = n)}
					id={this.name}
					class={`title ${this.theme}`}
				>
					<a href={`#${this.name}`}>{this.name}</a>
				</h2>
			),
			<div class="component-row ">
				<ssy-measure theme={this.theme} content={children} />
			</div>,
			<div class={`inputs-container ${this.theme}`}>{this.inputs}</div>,
		]
	}
}

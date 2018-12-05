import { Component } from '@stencil/core'

@Component({
	tag: 'app-home',
	styleUrl: 'app-home.css',
	shadow: true,
})
export class AppHome {
	render() {
		return (
			<div class="app-home">
				<p>Short Story demo</p>
				<short-story
					knobs={{
						name: {
							label: 'Name',
							type: 'string',
							defaultValue: 'Joe',
						},
						message: {
							type: 'string',
							textarea: true,
							defaultValue: 'Dear diary...',
						},
						age: {
							label: 'Age',
							type: 'number',
							defaultValue: 28,
						},
						rating: {
							label: 'Rating',
							type: 'number',
							range: true,
							min: 0,
							max: 5,
							step: 1,
							defaultValue: 3,
						},
						disabled: {
							label: 'Disabled',
							type: 'boolean',
							defaultValue: false,
						},
					}}
					showWidth
					renderFunc={({ name, age, rating, disabled }) => (
						<p>
							Hello, my name is {name}, I'm {age} years old. I have a {rating}{' '}
							star rating. {disabled && 'Disabled!'}
						</p>
					)}
				/>
			</div>
		)
	}
}

import { Component, State } from '@stencil/core'

@Component({
	tag: 'app-home',
	styleUrl: 'app-home.css',
	shadow: true,
})
export class AppHome {
	@State() theme: string = 'light'
	render() {
		console.log(this.theme)
		return (
			<div class={`app-home ${this.theme}`}>
				<h1>Short Story demo</h1>
				<p>
					<a href="http://twitter.com/steveruizok/">@steveruizok</a>
				</p>
				<div class="mode-control">
					<label htmlFor="mode-switch">Dark Mode</label>
					<input
						id="mode-switch"
						type="checkbox"
						onChange={() =>
							(this.theme = this.theme === 'light' ? 'dark' : 'light')
						}
					/>
				</div>
				<short-story
					name="Simple name"
					theme={this.theme}
					knobs={{
						name: {
							label: 'Name',
							type: 'string',
							defaultValue: 'Steve',
						},
					}}
					showWidth
					renderFunc={({ name }) => <p>Hello, my name is {name}.</p>}
				/>
				<short-story
					name="All Controls"
					theme={this.theme}
					knobs={{
						name: {
							label: 'Name',
							type: 'string',
							defaultValue: 'Joe',
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
						country: {
							label: 'Country',
							type: 'enum',
							options: ['Spain', 'Germany', 'England'],
							defaultValue: 'England',
						},
						locale: {
							label: 'Locale',
							type: 'enum',
							options: ['en-gb', 'en-us', 'en-au'],
							optionTitles: ['British', 'American', 'Australian'],
							defaultValue: 'en-gb',
						},
						isOk: {
							label: 'Okay',
							type: 'boolean',
							defaultValue: false,
						},
						diaryEntry: {
							type: 'string',
							textarea: true,
							defaultValue: 'Dear diary...',
						},
					}}
					showWidth
					renderFunc={({
						name,
						age,
						rating,
						isOk,
						country,
						locale,
						diaryEntry,
					}) => (
						<p>
							Hello, my name is {name}, I'm {age} years old. I live in {country}
							. I have a {rating} star rating. I speak {locale}.{' '}
							{isOk && "I'm okay."} {diaryEntry}
						</p>
					)}
				/>
			</div>
		)
	}
}

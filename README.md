# Short Story (StencilJS)

Beautiful component previews for design, docs and demos. Created as a webcomponent (`short-story`) for use anywhere.

<a href="https://xenodochial-newton-5a6053.netlify.com/">Demo</a>

## Example

```jsx
<short-story
	name="All Controls"
	theme="light"
	knobs={{
		name: {
			label: 'Name',
			type: 'string',
			defaultValue: 'Steve',
		},
		age: {
			label: 'Age',
			type: 'number',
			defaultValue: 32,
		},
		rating: {
			label: 'Rating',
			type: 'number',
			range: true,
			min: 0,
			max: 5,
			step: 0.5,
			defaultValue: 3.5,
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
			defaultValue: 'en-us',
		},
		isOk: {
			label: 'Okay',
			type: 'boolean',
			defaultValue: true,
		},
		diaryEntry: {
			type: 'string',
			textarea: true,
			defaultValue: 'Dear diary...',
		},
	}}
	showWidth
	renderFunc={({ name, age, rating, isOk, country, locale, diaryEntry }) => (
		<p>
			Hello, my name is {name}, I'm {age} years old. I live in {country}. I have
			a {rating} star rating. I speak {locale}. {isOk && "I'm okay."}{' '}
			{diaryEntry}
		</p>
	)}
/>
```

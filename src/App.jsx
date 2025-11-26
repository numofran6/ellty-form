import { useState } from 'react';

import {
	Button,
	Card,
	CardFooter,
	CheckboxControl,
	CheckboxList,
	Divider,
} from './components';
import './App.css';

function App() {
	const options = [
		{ label: 'Page 1', value: 'page-1' },
		{ label: 'Page 2', value: 'page-2' },
		{ label: 'Page 3', value: 'page-3' },
		{ label: 'Page 4', value: 'page-4' },
		{ label: 'Page 5', value: 'page-5' },
		{ label: 'Page 6', value: 'page-6' },
	];

	const [selected, setSelected] = useState([]);

	const handleToggleAll = (isChecked) => {
		if (isChecked) {
			setSelected(options.map((option) => option.value));
		} else {
			setSelected([]);
		}
	};

	return (
		<Card>
			<CheckboxControl
				label="All Pages"
				checked={selected.length === options.length}
				onChange={handleToggleAll}
			/>

			<Divider />

			<CheckboxList
				options={options}
				selected={selected}
				onChange={setSelected}
			/>

			<Divider />

			<CardFooter>
				<Button width={'100%'}>Done</Button>
			</CardFooter>
		</Card>
	);
}

export default App;

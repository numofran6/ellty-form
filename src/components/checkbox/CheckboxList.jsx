import CheckboxControl from './CheckboxControl';
import './CheckboxList.css';

/**
 * Checkbox List Component.
 */
const CheckboxList = ({ options = [], selected = [], onChange }) => {
	const handleToggle = (isChecked, value) => {
		let updated;

		if (isChecked) {
			updated = [...selected, value];
		} else {
			updated = selected.filter((item) => item !== value);
		}

		onChange(updated);
	};

	return (
		<div className="ellty-checkbox-list">
			{options.map((option) => (
				<CheckboxControl
					key={option.value}
					label={option.label}
					value={option.value}
					checked={selected.includes(option.value)}
					onChange={handleToggle}
				/>
			))}
		</div>
	);
};

export default CheckboxList;

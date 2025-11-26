import './CheckboxControl.css';

const CheckboxControl = ({
	id,
	label,
	checked,
	onChange,
	value,
	className = '',
	...remainingProps
}) => {
	return (
		<label htmlFor={id} className="ellty-checkbox-container">
			<span className='label'>{label}</span>
			<input
				{...remainingProps}
				id={id}
				type="checkbox"
				checked={checked}
				value={value}
				onChange={(e) => onChange(e.target.checked, value)}
				className={`ellty-checkbox ${className}`}
			/>
			<span className="ellty-checkbox-custom" />
		</label>
	);
};

export default CheckboxControl;

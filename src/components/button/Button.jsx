import './Button.css';

const Button = ({ children, className = '', width, style, ...additionalProps }) => {
	const props = {
		...additionalProps,
		className: `ellty-button ${className}`,
		style: {width, ...style}
	};

	return <button {...props}>{children}</button>;
};

export default Button;

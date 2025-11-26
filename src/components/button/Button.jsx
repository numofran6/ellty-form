import './Button.css';

const Button = ({ children, className, ...additionalProps }) => {
	const props = {
		...additionalProps,
		className: `ellty-button ${className}`,
	};

	return <button {...props}>{children}</button>;
};

export default Button;

import './Divider.css';

/**
 * Divider Component.
 */
const Divider = ({ children, className = '', ...remainingProps }) => {
	const props = {
		...remainingProps,
		className: `ellty-divider ${className}`,
	};

	return <div {...props}>{children}</div>;
};

export default Divider;

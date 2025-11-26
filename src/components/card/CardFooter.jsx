import './Card.css';

/**
 * Card Footer Component.
 */
const CardFooter = ({ children, className = '', ...remainingProps }) => {
	const props = {
		...remainingProps,
		className: `ellty-card-footer ${className}`,
	};

	return <div {...props}>{children}</div>;
};

export default CardFooter;

import './Card.css';

const Card = ({ children, className = '', ...remainingProps }) => {
	const props = {
		...remainingProps,
		className: `ellty-card ${className}`,
	};

	return <div {...props}>{children}</div>;
};

export default Card;

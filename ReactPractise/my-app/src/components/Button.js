import PropTypes from 'prop-types'

const Button = ({color, text, onClick}) => {
	

	return <button onClick={onClick} style={{backgroundColor: color}} className="btn">
		{text}
	</button>
}

/*Default Props*/
Button.defaultProps = {
	color: 'steelblue'
}

/* Property Types */
Button.propTypes = {
	text: PropTypes.string,
	color: PropTypes.string,
	onClick: PropTypes.func,
}

export default Button

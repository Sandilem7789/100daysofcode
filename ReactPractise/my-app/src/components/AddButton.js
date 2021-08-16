import PropTypes from 'prop-types';
//import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

/*const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));*/

const AddButton = ({color, text, onClick}) => {
	return ( 
		<Button 
		variant="contained"
		onClick={onClick} 
		style={{backgroundColor: color, color: 'white', fontFamily: "Poppins, sans-serif"}} 
		className="btn">
			{text}
		</Button>
	)
}

/*Default Props*/
AddButton.defaultProps = {
	color: 'steelblue',
}

/* Property Types */
AddButton.propTypes = {
	text: PropTypes.string,
	color: PropTypes.string,
	onClick: PropTypes.func,
}

export default AddButton

import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
   return (
      <header className="header">
         <h1>{title}</h1>
            <Button 
               color={showAdd ? "red" : "green"}
					text={showAdd ? "Close" : "Add"} 
					onClick={onAdd}
				/>
      </header>
    )
}

Header.defaultProps = {
    title: "Task Tracker"
}

Header.propTypes = {
    title: PropTypes.string
}

// const headingStyle = {
//     color: "#1a3e6d",
//     backgroundColor: "#e1a8b4",
//     textAlign: "center"
// }

export default Header

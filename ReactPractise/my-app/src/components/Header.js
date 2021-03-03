import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    const onClick = () => {
        console.log("click");
    }
    return (
        <header className="header">
           <h1>{title}</h1>
           <Button color='green' text='Add' onClick={onClick}/>
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

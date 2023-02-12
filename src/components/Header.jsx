import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Button from './Button';

const Header = ({title , onAdd, showAdd}) => {
  const location = useLocation();


  return (
    <div className='header ' >
        <h1 >{title}</h1>
       {location.pathname === '/' &&
        <Button onClick={onAdd} color={showAdd ? 'red':'green'} text={showAdd ? 'Close' : 'Add'} />
        }
        
    </div>
  )
}

//CSS In JS
// const headingStyle = {
//     color:'red',
//     backgroundColor:'black'
// }

Header.defaultProps = {
    title: "App Header"
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    
}
export default Header
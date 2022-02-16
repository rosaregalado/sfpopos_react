import { Link } from 'react-router-dom';
import './POPOSSpace.css';

function POPOSSpace(props) {
  // create props object
  const { name, image, address, hours, id} = props
  return (
    <div>
      <h1>
        <Link 
          className="POPOSSpace-title"
          to={`/details/${id}`}>
          {name}
        </Link>
      </h1>
      <Link to={`/details/${id}`}>
        <img src={`${process.env.PUBLIC_URL}/images/${image}`} width="300" height="300" alt="Hello" />
      </Link>
      <div>{address}</div>
      <div className="hours">{hours}</div>
    </div>
  )
}
export default POPOSSpace;
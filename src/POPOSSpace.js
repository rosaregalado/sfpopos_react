// import logo from './logo.svg';
import './POPOSSpace.css';

function POPOSSpace(props) {
  // create props object
  const { name, image, address, hours} = props
  return (
    <div>
      <h1>{name}</h1>
      <img src={`${process.env.PUBLIC_URL}/images/${image}`}     
        width="300"
        height="300"
        alt="hello"
      />
      <div>{address}</div>
      <div className="hours">{hours}</div>
    </div>
  )
}
export default POPOSSpace;
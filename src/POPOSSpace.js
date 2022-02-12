import logo from './logo.svg';

function POPOSSpace(props) {
  // create props object
  const { name, image, address} = props
  return (
    <div>
      <img src={`${process.env.PUBLIC_URL}/images/${image}`}     
        width="300"
        height="300"
        alt="hello"
      />
      <h1>{name}</h1>
      <div>{address}</div>
    </div>
  )
}
export default POPOSSpace;
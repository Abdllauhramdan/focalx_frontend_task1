import Card from 'react-bootstrap/Card';
import './Card.css';
import { NavLink } from 'react-bootstrap';

const HCard = ({photo,type,price,location,items}) => {
  return (
    <div>
    <div className=' '>
    <Card className='mt-4 ' style={{ width: '24rem' }}>
    <div className="countainerOfCard">
    <NavLink to="/live/templatemo_591_villa_agency">
      <Card.Img variant="top" src={photo}/></NavLink>
      <Card.Body>
        <div className="partonecontent">
          <div className="right">
          <span>{type}</span>
          </div>
          <div className="left">
          <h6>
           {price}
          </h6>
          </div>

        </div>
        <div className="parttwocontent">
          <h4>{location}</h4>
          <ul>
          {items.map((element)=>{
          return(
            <>
            <li>Bedrooms: <span>{element.bedrooms}</span></li>
            <li>Bathrooms: <span>{element.bathrooms}</span></li>
            <li>Area: <span>{element.area}</span></li>
            <li>Floor: <span>{element.floor}</span></li>
            <li>Parking: <span>{element.parking}</span></li>
           </> 
           )} )}
          </ul>
          
        <div className="schedule">
          <NavLink className='mylink' to="/live/templatemo_591_villa_agency" > Schedule a visit</NavLink>
          </div>       
        </div>



        
      </Card.Body>
      </div>
    </Card>
    </div>
    </div>
  )
}

export default HCard

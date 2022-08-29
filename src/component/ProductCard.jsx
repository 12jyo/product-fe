import { Card } from 'react-bootstrap';

function ProductCard({ productInformation }){
  return (
    <div className='card-item'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://picsum.photos/200/300" />
      <Card.Body>
        <Card.Title>{ productInformation.name }</Card.Title>
        <Card.Text>
          { productInformation.description }
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
}

export default ProductCard;
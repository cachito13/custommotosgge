
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const Item = ( {item} ) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.img} alt="img" />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <Card.Text>Precio: ${item.price}</Card.Text>
        <p><small>Categoria: {item.category} </small></p>
        <Button variant="primary">Ver</Button>
      </Card.Body>
    </Card>
  );
}

export default Item
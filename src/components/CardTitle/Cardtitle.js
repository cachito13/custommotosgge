import Card from 'react-bootstrap/Card';
import portada from '../../assets estaticos/imgs/cmmportada.jpg';

export const Cardtitle = () => {
  return (
    <Card className="bg-dark text-white d-flex align-items-center justify-content-center">
    <Card.Img src={portada} alt="Card image" style={{ width: '70%', height: 'auto' }} />
      <Card.ImgOverlay>
        {/* <Card.Title>Card title</Card.Title> */}
        {/* <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text> */}
      </Card.ImgOverlay>
    </Card>
  );
}

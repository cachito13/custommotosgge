import React from 'react';
import Item from '../item/item';
import { Link } from 'react-router-dom';
import { Dropdown, Row, Col } from 'react-bootstrap'; // Importa Row y Col de react-bootstrap

const ItemList = ({ items }) => {
  return (
    <div>
      <Row className="align-items-center mb-3">
        <Col xs={6}>
          <h2 className="list-container__title">Productos</h2>
        </Col>
        <Col xs={6} className="text-end">
          {/* Menú desplegable para categorías */}
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              Filtrar por Categoría
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/ItemListContainer/" className="navbar__link">
                Todos los Productos
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/ItemListContainer/productos/gorras" className="navbar__link">
                Gorras
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/ItemListContainer/productos/remeras" className="navbar__link">
                Remeras
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/ItemListContainer/productos/buzos" className="navbar__link">
                Buzos
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>

      <hr />

      <div className="row">
        {items.map((producto) => (
          <Item key={producto.id} item={producto} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;


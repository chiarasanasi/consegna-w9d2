import { Container, Card, Row, Button, Collapse } from "react-bootstrap"
import { Component } from "react"

class AllTheBooks extends Component {
  render() {
    return (
      <>
        <Container>
          <Row className="gap-3 d-flex flex-wrap justify-content-center mb-5">
            {this.props.category.splice(0, 10).map((book) => {
              return (
                <Card className="col-2 p-0">
                  <Card.Img variant="top" src={book.img} />
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>Category : {book.category}</Card.Text>
                    <Card.Text>Price : {book.price}€</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              )
            })}
          </Row>
        </Container>
      </>
    )
  }
}

export default AllTheBooks

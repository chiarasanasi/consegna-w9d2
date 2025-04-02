import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import { Col } from "react-bootstrap"
import { Component } from "react"

class SingleBook extends Component {
  state = {
    selected: false,
    color: "white",
  }

  selection = () => {
    console.log("sto cliccando sulla card")
    this.setState({ selected: !this.state.selected })
  }

  render() {
    const { categoryColor } = this.props

    return (
      <>
        <Col xs="6" md="4" lg="2">
          <Card
            className={`h-100 border-2 rounded-3 bg-dark ${
              this.state.selected ? "border-3 border-warning" : "border-dark"
            }`}
            onClick={this.selection}
          >
            <Card.Img
              variant="top"
              src={this.props.category.img}
              className="object-fit-cover"
              style={{ height: "350px" }}
            />
            <Card.Body className="d-flex flex-column text-center">
              <Card.Title style={{ color: categoryColor }}>
                {this.props.category.title}
              </Card.Title>
              <Card.Text className="text-white text-uppercase fw-semibold fst-italic">
                Category : {this.props.category.category}
              </Card.Text>
              <Card.Text className="text-secondary">
                Price : ${this.props.category.price}
              </Card.Text>
              <Button variant="primary" className="mt-auto">
                Go somewhere
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </>
    )
  }
}

export default SingleBook

import { Row } from "react-bootstrap"

import SingleBook from "./SingleBook"

const BookList = function (props) {
  return (
    <>
      <Row className="g-3 d-flex flex-wrap justify-content-center mb-5">
        {props.category.slice(0, 10).map((book) => {
          return (
            <SingleBook
              category={book}
              key={book.asin}
              categoryColor={props.categoryColor}
            />
          )
        })}
      </Row>
    </>
  )
}

export default BookList

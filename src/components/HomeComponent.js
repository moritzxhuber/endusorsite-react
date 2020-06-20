import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function RenderCard({ item }) {
  return (
    <Card>
      <CardImg src={item.imageBg} alt={item.title} />
      <CardBody>
        <CardTitle>{item.title}</CardTitle>
        <CardText>{item.description}</CardText>
      </CardBody>
    </Card>
  );
}

function Home(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col m-1">
          <RenderCard item={props.blogpost} />
        </div>
      </div>
    </div>
  );
}

export default Home;

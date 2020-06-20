import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

function RenderBlogpost({ blogpost }) {
  return (
    <div className="col-md-5 m-1">
      <Card>
        <CardImg top src={blogpost.imageBg} alt={blogpost.title} />
        <CardBody>
          <CardText>{blogpost.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

function BlogpostInfo(props) {
  if (props.blogpost) {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/directory">Blog</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>{props.blogpost.name}</BreadcrumbItem>
            </Breadcrumb>
            <h2>{props.blogpost.name}</h2>
            <hr />
          </div>
        </div>
        <div className="row">
          <RenderBlogpost blogpost={props.blogpost} />
        </div>
      </div>
    );
  }
  return <div />;
}

export default BlogpostInfo;

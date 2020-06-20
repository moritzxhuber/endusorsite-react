import React from "react";
import {
  Card,
  CardImg,
  CardTitle,
  CardBody,
  CardText,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

function RenderBlogCard({ blogpost }) {
  return (
    <Card>
      <Link to={`/blog/${blogpost.id}`}>
        <CardImg width="100%" src={blogpost.imageBg} alt={blogpost.title} />
        <CardBody>
          <CardTitle>{blogpost.title}</CardTitle>
          <CardText>{blogpost.description}</CardText>
        </CardBody>
      </Link>
    </Card>
  );
}

function Blog(props) {
  const blog = props.blogposts.map((blogpost) => {
    return (
      <div key={blogpost.id} className="col-12 m-1">
        <RenderBlogCard
          blogpost={props.blogposts.filter((blogpost) => blogpost.featured)[0]}
        />
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h3>Blog</h3>
          <hr />
        </div>
      </div>
      <div className="row"> {blog} </div>
    </div>
  );
}

export default Blog;

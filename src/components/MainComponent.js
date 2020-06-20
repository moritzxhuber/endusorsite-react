import React, { Component } from "react";
import Blog from "./BlogComponents";
import CampsiteInfo from "./BlogpostInfoComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import { Switch, Route, Redirect } from "react-router-dom";
import { BLOGPOSTS } from "../shared/blogposts";
import BlogpostInfo from "./BlogpostInfoComponent";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogposts: BLOGPOSTS,
    };
  }
  render() {
    const HomePage = () => {
      return (
        <Home
          blogpost={
            this.state.blogposts.filter((blogpost) => blogpost.featured)[0]
          }
        />
      );
    };

    const blogpostWithId = ({ match }) => {
      return (
        <BlogpostInfo
          campsite={
            this.state.blogposts.filter(
              (blogpost) => blogpost.id === +match.params.blogpostId
            )[0]
          }
        />
      );
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/blog"
            render={() => <Blog blogposts={this.state.blogposts} />}
          />
          <Route path="/blog/:blogpostId" component={blogpostWithId} />
          <Route exact path="/contactus" component={Contact} />
          <Route
            exact
            path="/aboutus"
            render={() => <About partners={this.state.partners} />}
          />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}
export default Main;

import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Progress } from "./ui/progress";
import { Nav } from "./ui/nav";
import { Header } from "./ui/header";
import { Home } from "./pages/home";
import { Resume } from "./pages/resume";
import { Services } from "./pages/services";
import { Portfolio } from "./pages/portfolio";
import { Blog } from "./pages/blog";
import { Contact } from "./pages/contact";
import { Footer } from "./ui/footer";
import { Loader } from "./ui/loader";
import { BlogSingle } from "./ui/blog-single";
import { Errors } from "./ui/errors";

class Website extends Component {
  constructor(props) {
    super(props);

    this.contentsPerPage = 3;
    this.defPageNumRange = 5;

    this.state = {
      pageNumActive: 1,
      pageNumMin: 1,
      pageNumMax: this.defPageNumRange,
      blogGridProps: [],
      fetchSuccess: false,
      error: "",
      navLinkActive: 3,
      blogCount: 0,
    };
  }

  componentDidMount() {
    if (window.location.pathname === "/blog") {
      this.getContentsCount();
      this.fetchContents();
    }
  }

  getContentsCount() {
    let url = "http://localhost:3500/api/blogs/count";
    fetch(url)
      .then((res) => {
        if (res.ok) return res.json();
        throw Error(`Fetch blog size failed: ${res.statusText}`);
      })
      .then((res) => {
        this.setState({ blogCount: res.count });
      })
      .catch((error) => {
        // this.getContentsCount();
      });
  }

  fetchContents() {
    let url = "http://localhost:3500/api/blogs";

    let last = this.state.pageNumActive * this.contentsPerPage;
    let first = last - this.contentsPerPage;
    let filter = `?filter[limit]=${this.contentsPerPage}&filter[skip]=${first}`;

    fetch(url + filter)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw Error(`Blog Fetch Error: ${response.statusText}`);
      })
      .then((response) => {
        this.fetchSuccess(response);
      })
      .catch((error) => {
        this.fetchFailure(error);
      });
  }

  fetchSuccess = (response) => {
    this.numOfpages = Math.ceil(response.length / this.contentsPerPage);

    this.setState({
      blogGridProps: response,
      pageNumMax:
        this.numOfpages < this.defPageNumRange
          ? this.numOfpages
          : this.defPageNumRange,
      fetchSuccess: true,
    });
  };

  fetchFailure = (error) => {
    this.setState({
      fetchSuccess: false,
      error: error,
    });
  };

  pageNumClicked = (e) => {
    let pageNumClickedId = parseInt(e.currentTarget.textContent);
    this.setState({ pageNumActive: pageNumClickedId });
    this.fetchContents();
  };

  incrementPageNumMinAndMax = () => {
    if (this.state.pageNumMax < this.numOfpages) {
      this.setState((prevState) => {
        prevState.pageNumMin++;
        prevState.pageNumActive++;
        prevState.pageNumMax++;
      });
    } else if (this.state.pageNumActive < this.state.pageNumMax) {
      this.setState((prevState) => prevState.pageNumActive++);
    }

    this.fetchContents();
  };

  decrementPageNumMinAndMax = () => {
    if (this.state.pageNumMin > 1) {
      this.setState((prevState) => {
        prevState.pageNumMin--;
        prevState.pageNumActive--;
        prevState.pageNumMax--;
      });
    } else if (this.state.pageNumActive > 1) {
      this.setState((prevState) => prevState.pageNumActive--);
    }

    this.fetchContents();
  };

  setActiveNav(navLink) {
    if (this.state.navLinkActive !== navLink)
      this.setState({
        navLinkActive: navLink,
      });
  }

  render() {
    return (
      <BrowserRouter>
        <>
          <Progress />
          <div className="page">
            <Nav navLinkActive={this.state.navLinkActive} />
          </div>
          <div id="rashtell-page">
            <Header />

            <Switch>
              <Route
                exact
                path="/"
                render={() => {
                  this.setActiveNav(1);
                  return <Home />;
                }}
              />

              <Route
                exact
                path="/resume"
                render={() => {
                  this.setActiveNav(2);
                  return <Resume />;
                }}
              />

              <Route
                exact
                path="/services"
                component={() => {
                  this.setActiveNav(3);
                  return <Services />;
                }}
              />

              <Route
                exact
                path="/portfolio"
                component={() => {
                  this.setActiveNav(4);
                  return <Portfolio />;
                }}
              />

              <Route
                exact
                path="/blog"
                render={() => {
                  this.setActiveNav(5);
                  return (
                    <Blog
                      pageNumClicked={this.pageNumClicked}
                      incrementPageNumMinAndMax={this.incrementPageNumMinAndMax}
                      decrementPageNumMinAndMax={this.decrementPageNumMinAndMax}
                      contentsPerPage={this.contentsPerPage}
                      {...this.state}
                    />
                  );
                }}
              />

              <Route
                exact
                path="/contact"
                render={() => {
                  this.setActiveNav(6);
                  return <Contact />;
                }}
              />

              <Route
                exact
                path="/blog-singles/:id"
                render={(props) => {
                  let id = props.location.pathname.replace(
                    "/blog-singles/",
                    ""
                  );
                  id = parseInt(id);

                  let blog = this.state.blogGridProps[id - 1];

                  return this.state.fetchSuccess ? (
                    <BlogSingle
                      author={blog.author}
                      authorImage={blog.authorImage}
                      authorLink={blog.authorLink}
                      aboutAuthor={blog.aboutAuthor}
                      contentHeading={blog.contentHeading}
                      content={blog.content}
                      tags={blog.tags}
                      comment={blog.comment}
                      commentCount={blog.commentCount}
                      commentCountLink={blog.commentCountLink}
                    />
                  ) : (
                    <Errors
                      title={"Failed to fetch content"}
                      error={"Their was a network problem"}
                      message="Please try again"
                    />
                  );
                }}
              />

              <Route
                render={() => {
                  return (
                    <Errors
                      title={"Comming Soon"}
                      error={"Still In The Making"}
                      message="Requested Page: Not Yet Available. Please Check Back Soon"
                    />
                  );
                }}
              />
            </Switch>

            <Footer />

            <Loader />
          </div>
        </>
      </BrowserRouter>
    );
  }
}

export default Website;

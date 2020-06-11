// @flow
import React, { Component } from "react";
import { PageNumNav } from "../mini-components/listItems";

export class BlogGrid extends Component {
  constructor(props) {
    super(props);

    this.contentsPerPage = this.props.contentsPerPage;
  }

  getDetails = (index) => {
    let props = {
      "data-os-delay": "",
      className: "",
    };

    switch (index % 3) {
      case 0:
        props["data-os-delay"] = 200;
        props.className = "text p-4";
        break;
      case 1:
        props["data-os-delay"] = 100;
        props.className = "text p-4";
        break;
      case 2:
        props["data-os-delay"] = 0;
        props.className = "text p-4 d-block";
        break;
      default:
        break;
    }

    return props;
  };

  getListContents = () => {
    let pageFirstContentId =
        this.props.pageNumActive * this.contentsPerPage -
        this.contentsPerPage +
        1,
      pageLastContentId = pageFirstContentId + this.contentsPerPage - 1,
      start = pageFirstContentId - 1;

    let blogItems = this.props.blogGridProps
      .slice(start, pageLastContentId)
      .map((props, i) => (
        <div className="col-md-4 ftco-animate" key={i}>
          <div
            className="blog-entry"
            data-aos-delay={this.getDetails(i)["data-os-delay"]}
          >
            <a
              href={`/blog-singles/${props.id}`}
              className="block-20"
              style={{ backgroundImage: "url('" + props.tileImage + "')" }}
            ></a>
            <div className={this.getDetails(i).className}>
              <div className="meta mb-3">
                <div>
                  <a href={props.dateLink}>{props.date}</a>
                </div>
                <div>
                  <a href={props.authorLink}>{props.author}</a>
                </div>
                <div>
                  <a href={props.countLink} className="meta-chat">
                    <span className="icon-chat"></span>
                    {props.count}
                  </a>
                </div>
              </div>
              <h3 className="heading">
                <a href={`/blog-singles/${props.id}`}>{props.contentHeading}</a>
              </h3>
            </div>
          </div>
        </div>
      ));
    return blogItems;
  };

  render() {
    return (
      <section className="ftco-section">
        <div className="container mt-5">
          <div className="row justify-content-center mb-5 pb-5">
            <div className="col-md-7 text-center heading-section ftco-animate">
              <span>Blog</span>
              <h2>Read our blog</h2>
            </div>
          </div>

          <div className="row">{this.getListContents()}</div>

          <PageNumNav
            pageNumClicked={this.pageNumClicked}
            incrementPageNumMinAndMax={this.incrementPageNumMinAndMax}
            decrementPageNumMinAndMax={this.decrementPageNumMinAndMax}
            {...this.props}
          />
        </div>
      </section>
    );
  }
}

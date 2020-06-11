import React, { Component } from "react";
import { Tags } from "../mini-components/tags";
import { Form } from "../mini-components/form";

const Content = ({ content, contentHeading }) => (
  <>
    <h2 className="mb-3">{contentHeading}</h2>
    <div dangerouslySetInnerHTML={{ __html: content }} />
  </>
);

const Author = ({ author, authorImage, aboutAuthor }) => (
  <div className="about-author d-flex pt-5">
    <div className="bio align-self-md-center mr-4">
      <img src={authorImage} alt={author} className="img-fluid mb-4" />
    </div>
    <div className="desc align-self-md-center">
      <h3>About The Author</h3>
      <p>{aboutAuthor}</p>
    </div>
  </div>
);

const Comments = ({ comment }) => {
  let count = 0;
  comment.forEach((element) => {
    ++count;
    if (element.replys.length > 0) {
      count = count + element.replys.length;
    }
  });

  return (
    <div className="pt-5 mt-5">
      <h3 className="mb-5">{`${count} Comments`}</h3>
      <ul className="comment-list">
        {comment.map((props, i) => (
          <li className="comment" key={i}>
            <div className="vcard bio">
              <img src={props.image} alt={props.name} />
            </div>
            <div className="comment-body">
              <h3>{props.name}</h3>
              <div className="meta">{props.date}</div>
              <p>{props.text}</p>
              <p>
                <a href={`/reply`} className="reply">
                  Reply
                </a>
              </p>
            </div>

            {props.replys ? (
              <ul className="children">
                {props.replys.map((prop, id) => (
                  <li className="comment" key={id}>
                    <div className="vcard bio">
                      <img src={prop.image} alt={prop.name} />
                    </div>
                    <div className="comment-body">
                      <h3>{prop.name}</h3>
                      <div className="meta">{prop.date}</div>
                      <p>{prop.text}</p>
                      <p>
                        <a href={`/${i}/reply`} className="reply">
                          Reply
                        </a>
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              ""
            )}
          </li>
        ))}
      </ul>

      <Form />
    </div>
  );
};

export class BlogSingle extends Component {
  render = () => {
    let {
      author,
      authorImage,
      authorLink,
      aboutAuthor,
      contentHeading,
      content,
      tags,
      comment,
      commentCount,
      commentCountLink,
    } = this.props;
    return (
      <section className="ftco-section">
        <div className="container mt-5">
          <div className="row justify-content-center mb-5 pb-5">
            <div className="col-md-7 text-center heading-section ftco-animate">
              <span>Blog</span>
              <h2></h2>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-md-8">
              <Content content={content} contentHeading={contentHeading} />

              <Tags tags={tags} />

              <Author
                author={author}
                authorImage={authorImage}
                authorLink={authorLink}
                aboutAuthor={aboutAuthor}
              />

              <Comments
                comment={comment}
                commentCount={commentCount}
                commentCountLink={commentCountLink}
              />
            </div>
          </div>
        </div>
      </section>
    );
  };
}

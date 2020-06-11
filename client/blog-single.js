import React, { Component } from "react";
import { Tags } from "../mini-components/tags";

const Content = () => (
  <>
    <h2 class="mb-3">#1. We Love WordPress Themes</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius
      mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus
      unde architecto optio laboriosam porro adipisci sapiente officiis nemo
      accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim
      praesentium omnis, iste doloremque quia officia optio deserunt molestiae
      voluptates soluta architecto tempora.
    </p>
    <p>
      <img src="images/image_6.jpg" alt="" class="img-fluid" />
    </p>
    <p>
      Molestiae cupiditate inventore animi, maxime sapiente optio, illo est nemo
      veritatis repellat sunt doloribus nesciunt! Minima laborum magni
      reiciendis qui voluptate quisquam voluptatem soluta illo eum ullam
      incidunt rem assumenda eveniet eaque sequi deleniti tenetur dolore amet
      fugit perspiciatis ipsa, odit. Nesciunt dolor minima esse vero ut ea,
      repudiandae suscipit!
    </p>
    <h2 class="mb-3 mt-5">#2. Creative WordPress Themes</h2>
    <p>
      Temporibus ad error suscipit exercitationem hic molestiae totam obcaecati
      rerum, eius aut, in. Exercitationem atque quidem tempora maiores ex
      architecto voluptatum aut officia doloremque. Error dolore voluptas, omnis
      molestias odio dignissimos culpa ex earum nisi consequatur quos odit quasi
      repellat qui officiis reiciendis incidunt hic non? Debitis commodi aut,
      adipisci.
    </p>
    <p>
      <img src="images/image_8.jpg" alt="" class="img-fluid" />
    </p>
    <p>
      Quisquam esse aliquam fuga distinctio, quidem delectus veritatis
      reiciendis. Nihil explicabo quod, est eos ipsum. Unde aut non tenetur
      tempore, nisi culpa voluptate maiores officiis quis vel ab consectetur
      suscipit veritatis nulla quos quia aspernatur perferendis, libero sint.
      Error, velit, porro. Deserunt minus, quibusdam iste enim veniam, modi rem
      maiores.
    </p>
    <p>
      Odit voluptatibus, eveniet vel nihil cum ullam dolores laborum, quo velit
      commodi rerum eum quidem pariatur! Quia fuga iste tenetur, ipsa vel nisi
      in dolorum consequatur, veritatis porro explicabo soluta commodi libero
      voluptatem similique id quidem? Blanditiis voluptates aperiam non magni.
      Reprehenderit nobis odit inventore, quia laboriosam harum excepturi ea.
    </p>
    <p>
      Adipisci vero culpa, eius nobis soluta. Dolore, maxime ullam ipsam quidem,
      dolor distinctio similique asperiores voluptas enim, exercitationem
      ratione aut adipisci modi quod quibusdam iusto, voluptates beatae iure
      nemo itaque laborum. Consequuntur et pariatur totam fuga eligendi vero
      dolorum provident. Voluptatibus, veritatis. Beatae numquam nam ab
      voluptatibus culpa, tenetur recusandae!
    </p>
    <p>
      Voluptas dolores dignissimos dolorum temporibus, autem aliquam ducimus at
      officia adipisci quasi nemo a perspiciatis provident magni laboriosam
      repudiandae iure iusto commodi debitis est blanditiis alias laborum sint
      dolore. Dolores, iure, reprehenderit. Error provident, pariatur cupiditate
      soluta doloremque aut ratione. Harum voluptates mollitia illo minus
      praesentium, rerum ipsa debitis, inventore?
    </p>
  </>
);

let authorProps = {
  imageLink: "/images/person_1.jpg",
  name: "Rashtell rASHTELL",
  heading: "About The Author",
  about:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!",
};

const Author = () => (
  <div class="about-author d-flex pt-5">
    <div class="bio align-self-md-center mr-4">
      <img
        src={authorProps.imageLink}
        alt={authorProps.name}
        class="img-fluid mb-4"
      />
    </div>
    <div class="desc align-self-md-center">
      <h3>{authorProps.heading}</h3>
      <p>{authorProps.about}</p>
    </div>
  </div>
);

const Comments = () => (
  <div class="pt-5 mt-5">
    <h3 class="mb-5">6 Comments</h3>
    <ul class="comment-list">
      <li class="comment">
        <div class="vcard bio">
          <img src="images/person_1.jpg" alt="Image placeholder" />
        </div>
        <div class="comment-body">
          <h3>Jean Doe</h3>
          <div class="meta">July 27, 2018 at 2:21pm</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
            quidem laborum necessitatibus, ipsam impedit vitae autem, eum
            officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum
            impedit necessitatibus, nihil?
          </p>
          <p>
            <a href="#" class="reply">
              Reply
            </a>
          </p>
        </div>
      </li>

      <li class="comment">
        <div class="vcard bio">
          <img src="images/person_1.jpg" alt="Image placeholder" />
        </div>
        <div class="comment-body">
          <h3>Jean Doe</h3>
          <div class="meta">July 27, 2018 at 2:21pm</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
            quidem laborum necessitatibus, ipsam impedit vitae autem, eum
            officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum
            impedit necessitatibus, nihil?
          </p>
          <p>
            <a href="#" class="reply">
              Reply
            </a>
          </p>
        </div>

        <ul class="children">
          <li class="comment">
            <div class="vcard bio">
              <img src="images/person_1.jpg" alt="Image placeholder" />
            </div>
            <div class="comment-body">
              <h3>Jean Doe</h3>
              <div class="meta">July 27, 2018 at 2:21pm</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Pariatur quidem laborum necessitatibus, ipsam impedit vitae
                autem, eum officia, fugiat saepe enim sapiente iste iure! Quam
                voluptas earum impedit necessitatibus, nihil?
              </p>
              <p>
                <a href="#" class="reply">
                  Reply
                </a>
              </p>
            </div>

            <ul class="children">
              <li class="comment">
                <div class="vcard bio">
                  <img src="images/person_1.jpg" alt="Image placeholder" />
                </div>
                <div class="comment-body">
                  <h3>Jean Doe</h3>
                  <div class="meta">July 27, 2018 at 2:21pm</div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Pariatur quidem laborum necessitatibus, ipsam impedit vitae
                    autem, eum officia, fugiat saepe enim sapiente iste iure!
                    Quam voluptas earum impedit necessitatibus, nihil?
                  </p>
                  <p>
                    <a href="#" class="reply">
                      Reply
                    </a>
                  </p>
                </div>

                <ul class="children">
                  <li class="comment">
                    <div class="vcard bio">
                      <img src="images/person_1.jpg" alt="Image placeholder" />
                    </div>
                    <div class="comment-body">
                      <h3>Jean Doe</h3>
                      <div class="meta">July 27, 2018 at 2:21pm</div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Pariatur quidem laborum necessitatibus, ipsam
                        impedit vitae autem, eum officia, fugiat saepe enim
                        sapiente iste iure! Quam voluptas earum impedit
                        necessitatibus, nihil?
                      </p>
                      <p>
                        <a href="#" class="reply">
                          Reply
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </li>

      <li class="comment">
        <div class="vcard bio">
          <img src="images/person_1.jpg" alt="Image placeholder" />
        </div>
        <div class="comment-body">
          <h3>Jean Doe</h3>
          <div class="meta">July 27, 2018 at 2:21pm</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
            quidem laborum necessitatibus, ipsam impedit vitae autem, eum
            officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum
            impedit necessitatibus, nihil?
          </p>
          <p>
            <a href="#" class="reply">
              Reply
            </a>
          </p>
        </div>
      </li>
    </ul>

    <div class="comment-form-wrap pt-5">
      <h3 class="mb-5">Leave a comment</h3>
      <form action="#">
        <div class="form-group">
          <label for="name">Name *</label>
          <input type="text" class="form-control" id="name" />
        </div>
        <div class="form-group">
          <label for="email">Email *</label>
          <input type="email" class="form-control" id="email" />
        </div>
        <div class="form-group">
          <label for="website">Website</label>
          <input type="url" class="form-control" id="website" />
        </div>

        <div class="form-group">
          <label for="message">Message</label>
          <textarea
            name=""
            id="message"
            cols="30"
            rows="10"
            class="form-control"
          ></textarea>
        </div>
        <div class="form-group">
          <input
            type="submit"
            value="Post Comment"
            class="btn py-3 px-4 btn-primary"
          />
        </div>
      </form>
    </div>
  </div>
);

let blogData = {
  heading: "Blog",
  subHeading: "Read our blog",
};

export class BlogSingle extends Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    return (
      <section class="ftco-section">
        <div class="container mt-5">
          <div class="row justify-content-center mb-5 pb-5">
            <div class="col-md-7 text-center heading-section ftco-animate">
              <span>Blog</span>
              <h2>Read our blog</h2>
            </div>
          </div>
          <div class="row d-flex justify-content-center">
            <div class="col-md-8">
              <Content content={this.props.blog.content} />

              <Tags tags={this.props.blog.tags} />

              <Author author={this.props.blog.author} />

              <Comments comment={this.props.blog.comment} />
            </div>
          </div>
        </div>
      </section>
    );
  };
}

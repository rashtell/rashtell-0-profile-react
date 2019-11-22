//@flow
import React from 'react';
// import { Link } from 'react-router-dom'
import { navUlData, SocialMediaDetails } from '../../data/data';



export const NavUl = ({ navLinkActive }) => {

  return (
    <ul>
      {navUlData.map((navUl, i) => {
        return (
          <li
            key={i}
            className={i + 1 === navLinkActive ? "nav-menu-item active" : "nav-menu-item"}
          >
            <a href={navUl.href}
            >
              <span>
                <small>
                  0{i + 1}
                </small>
                {navUl.menuItem}
              </span>
            </a>
          </li>

        );
      })}
    </ul>
  );
}

export const SocialMedia = () =>
  <ul
    className={SocialMediaDetails.className}
  >
    {
      SocialMediaDetails.li.map((detail, i) => {
        return (
          <li
            key={i}
          >
            <a
              href={detail.href}>
              <span
                className={detail.className}
              >
              </span>
            </a>
          </li>
        )
      })}
  </ul>

export class PageNumNav extends React.Component {
  constructor(props) {
    super(props);

    this.numOfpages = Math.ceil(props.blogCount / 3);
  }

  getListItem = () => {
    let pageNumMin = this.props.pageNumMin,
      pageNumMax = this.props.pageNumMax,
      start = pageNumMin - 1;
    let className = '';
    let id = 0;

    let arr = Array(this.props.blogCount)
    for (let i = 0; i < arr.length; i++) {
      arr[i] = i;
    }
    let pageItems = arr.slice(start, pageNumMax).map((pageNumNav, i) => {
      id = pageNumMin + i;
      className = this.props.pageNumActive === id ? "active" : "";

      return (
        <li
          key={id}
          className={className}
          onClick={this.props.pageNumClicked}
        >
          <a
            key={id}
            href={"#" + id}
          >
            {id}
          </a>
        </li >
      );
    })

    return pageItems;
  }

  render() {
    return (
      <div className="row mt-5">
        <div className="col text-center">
          <div className="block-27">
            <ul>
              <li>
                <a
                  href="#prev"
                  onClick={this.props.decrementPageNumMinAndMax}
                >
                  &lt;
                                </a>
              </li>                                       {this.getListItem()}
              <li>
                <a
                  href="#next"
                  onClick={this.props.incrementPageNumMinAndMax}
                >
                  &gt;
                                </a>
              </li>

            </ul>
          </div>
        </div>
      </div>



    );
  }
}

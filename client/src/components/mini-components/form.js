import React from 'react';

export const Form = () =>
  <div className="comment-form-wrap pt-5">
    <h3 className="mb-5">Leave a comment</h3>
    <form id="postComment" >
      <div className="form-group">
        <label htmlFor="comment-name">Name *</label>
        <input type="text" className="form-control" id="comment-name" required />
      </div>
      <div className="form-group">
        <label htmlFor="comment-email">Email *</label>
        <input type="email" className="form-control" id="comment-email" />
      </div>
      <div className="form-group">
        <label htmlFor="comment-website">Website</label>
        <input type="url" className="form-control" id="comment-website" />
      </div>

      <div className="form-group">
        <label htmlFor="comment-message">Message</label>
        <textarea name="" id="comment-message" cols="30" rows="10" className="form-control" required autoComplete="true" autoCorrect="true" autoCapitalize="true"></textarea>
      </div>
      <div className="form-group">
        <input type="submit" value="Post Comment" className="btn py-3 px-4 btn-primary" />
      </div>

    </form>
  </div>

const postComment = (event) => {
  let querySelector = document.querySelector;
  event.addEventListener('submit', (event) => {
    event.preventDefault();
    let name = querySelector('#comment-name').value;
    let email = querySelector('#comment-email').value;
    let website = querySelector('#comment-website').value;
    let message = querySelector('#comment-message').value;

    let newNode = `
    <li className="comment">
      <div className="vcard bio">
          <img src="images/person_2.jpg" alt="${name}" />
      </div>
      <div className="comment-body">
          <h3>${name}</h3>
          <div className="meta">
          ${new Date().toISOString} July 27, 2018 at 2:21pm
          </div>
          <p>${message}</p>
          <p>
          <a href="#" className="reply">Reply</a></p>
      </div>
    </li>`

    let parentNode = querySelector('.comment-list');
    parentNode.appendChild(newNode);

  })
}


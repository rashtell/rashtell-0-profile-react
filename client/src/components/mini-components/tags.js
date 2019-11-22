import React from 'react';

// let tagProps = {
//     "tags": [
//         { "text": "Life", "link": "" },
//         { "text": "Sport", "link": "" },
//         { "text": "Tech", "link": "" },
//         { "text": "Travel", "link": "" }
//     ]
// }

export const Tags = ({ tags }) =>
    <div className="tag-widget post-tag-container mb-5 mt-5">
        <div className="tagcloud"
        >
            {tags.map((tag, i) =>
                <a key={i}
                    href={tag.link}
                    className="tag-cloud-link">{tag.text}
                </a>
            )}

        </div>
    </div>


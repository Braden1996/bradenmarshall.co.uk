import React from 'react';

import PreviewListing from './preview_listing.jsx';

export default class extends React.Component {
  constructor(props) {
    super(props);

    const lorem_ipsum = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially';

    const listings = [
      { id: 1, author: 'Braden1996', title: 'My first blog post', text: lorem_ipsum, date: "2001-05-15T19:00", picture: "https://d3ui957tjb5bqd.cloudfront.net/uploads/images/3/38/38859.homepage.jpg?1471862863"},
      { id: 2, author: 'Braden1996', title: 'My second blog post', text: lorem_ipsum, date: "1996-08-18T13:37", picture: "https://d3ui957tjb5bqd.cloudfront.net/uploads/images/3/38/38343.homepage.jpg?1471613134"},
    ];

    this.state = { listings };
  }

  render() {
    const listingNodes = this.state.listings.map((listing) => (
      <PreviewListing key={ listing.id } { ...listing } />
    ));
    return (
      <article className="m-blogpreviewlist">
        <h1>Blog Posts</h1>
        <div>Showing <em>1</em> to <em>2</em> of 2 posts</div>
        { listingNodes }
      </article>
    );
  }
}
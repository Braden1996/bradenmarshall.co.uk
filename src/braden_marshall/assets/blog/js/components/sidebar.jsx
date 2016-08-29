import React from 'react';

import classNames from 'classnames';

export default class extends React.Component {
  static propTypes = {
    className: React.PropTypes.string,
  }

  showPost() {
    return null;
  }

  render() {
    const { className } = this.props;
    const classNamesStr = classNames('BlogSidebar', className);
    return (
      <aside className={classNamesStr}>
        <nav>
          <header><h2>Popular Topics</h2></header>
          <ul>
            <li>Python</li>
            <li>HTML</li>
            <li>Science</li>
          </ul>
        </nav>
      </aside>
    );
  }
}

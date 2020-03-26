import React, { Component } from "react";
import styles from "./Feeds.module.css";

import FeedContext from "../../context/FeedsContext";
import { Feed, Lists } from "../../components";

/**
 * List of feeds are handled by this component
 *
 * @class Feeds
 * @extends {Component}
 */
class Feeds extends Component {
  static contextType = FeedContext;

  hideFeed = feedId => {
    this.context.hideFeedById(feedId);
  };

  upvoteFeed = (feedId, index, vote) => {
    this.context.upvoteFeedById(feedId, index, vote);
  };

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.lists}>
          <Lists arryOfListSource={this.context.feeds}>
            {(feed, index) => (
              <Feed
                key={feed.objectID}
                index={index}
                {...feed}
                hideFeed={this.hideFeed}
                upvote={this.upvoteFeed}
              />
            )}
          </Lists>
        </div>
      </div>
    );
  }
}

export default Feeds;
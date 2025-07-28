import React from 'react'

const ScrollDown = () => {
  return (
    <div className="home__scroll">
        <a href="#filter" className="home__scroll-button button--flex">
            <span className="home__scroll-text">See More</span>
            <i class="bi bi-caret-down-fill "></i>
        </a>
    </div>
  );
}

export default ScrollDown;
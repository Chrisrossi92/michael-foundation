import React, { useEffect } from 'react';

const FacebookEmbed = () => {
  useEffect(() => {
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }, []);

  return (
    <div className="fb-page"
      data-href="https://www.facebook.com/MichaelRossiFoundation"
      data-tabs="timeline"
      data-width=""
      data-height=""
      data-small-header="false"
      data-adapt-container-width="true"
      data-hide-cover="false"
      data-show-facepile="true"
    >
      <blockquote
        cite="https://www.facebook.com/MichaelRossiFoundation"
        className="fb-xfbml-parse-ignore"
      >
        <a href="https://www.facebook.com/MichaelRossiFoundation">Michael Rossi Foundation</a>
      </blockquote>
    </div>
  );
};

export default FacebookEmbed;

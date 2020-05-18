import React from 'react';
import Detail from './Detail';

import skyscraper from '../images/skyscraper.jpg';
import notebook from '../images/notebook.jpg';

const Details = () => {
  return (
    <div>
      <Detail
        bg="#a7cecb"
        direction="row"
        title="Professional"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet velit rutrum, congue diam quis, ultrices arcu. Nullam mattis molestie eros, eget congue sem. Phasellus convallis at nibh at. "
        url={skyscraper}
        alt="skyscraper"
      />
      <Detail
        bg="#8ba6a9"
        direction="row-reverse"
        title="Reliable"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet velit rutrum, congue diam quis, ultrices arcu. Nullam mattis molestie eros, eget congue sem. Phasellus convallis at nibh at. "
        url={notebook}
        alt="notebook"
      />
    </div>
  );
};

export default Details;

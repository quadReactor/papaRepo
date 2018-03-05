import React from 'react';

import style from './loading.css';

const Loading = () => {
  return (
  <div className={style.title}>
    <img
      className={style.smurf}
      src="https://vignette.wikia.nocookie.net/smurfs/images/2/2f/TGJPKtu.gif/revision/latest?cb=20150516212751" />
  Loading...
  </div>
  );
};

export default Loading;

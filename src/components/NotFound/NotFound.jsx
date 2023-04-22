import React from 'react';
import ImageNotFound from '../../assets/Paper-404-Error.png';

import './notFoundStyles.scss';

function NotFound() {
  return (
    <div>
      <img src={ImageNotFound} alt="Page non trouvée" className="notFound_image" />
    </div>
  );
}

export default React.memo(NotFound);

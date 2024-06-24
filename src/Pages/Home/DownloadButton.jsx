import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload} from '@fortawesome/free-solid-svg-icons'

const DownloadButton = () => {
  const handleDownload = () => {
    const pdfUrl = process.env.PUBLIC_URL + '/CV_Remi_lavigne_EN.pdf';

    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'CV_Remi_lavigne_EN.pdf';
    link.target = '_blank';

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };

  return (
    <button onClick={handleDownload} className="btn btn-outline-primary btn-contact">
      <FontAwesomeIcon icon={faDownload} />
      My resume
    </button>
  );
};

export default DownloadButton;

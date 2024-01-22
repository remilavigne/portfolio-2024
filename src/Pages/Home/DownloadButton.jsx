import React from 'react';

const DownloadButton = () => {
  const handleDownload = () => {
    // Assuming your PDF file is in the public folder
    const pdfUrl = process.env.PUBLIC_URL + '/CV_Remi_Lavigne_EN.pdf';

    // Create an invisible link element
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'CV_Remi_Lavigne_EN.pdf';
    link.target = '_blank'; // Open in a new tab if you want

    // Append the link to the body
    document.body.appendChild(link);

    // Trigger the click event to start the download
    link.click();

    // Remove the link from the body after the download
    document.body.removeChild(link);
  };

  return (
    <button onClick={handleDownload} className="btn btn-outline-primary">
      Download my resume
    </button>
  );
};

export default DownloadButton;

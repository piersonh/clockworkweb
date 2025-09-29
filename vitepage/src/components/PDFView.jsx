import { useState } from 'react';
import './styles/PDFView.css';

const openDocument = (fileName) => {
  window.open(`/clockworkweb/documents/${fileName}`, '_blank');
};

const PDFView = ({ fileName, docName, coverImage }) => {
  console.log(fileName);
  
  const [isHovered, setIsHovered] = useState(false);
  const titleSplit = docName.split(' ');

  return (
    <div
      className={
        docName === "Presentation" ? 
        "pdf-viewer pdf-viewer-video" : 
        "pdf-viewer pdf-viewer-doc"
      }
      onClick={() => openDocument(fileName)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={
        docName === "Presentation" ? 
        { 
          backgroundImage: `url(${coverImage})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center' 
        } : {}
      }
    >
      {!coverImage && 
        <div className='doc-names'>
          <h5>{titleSplit[0]}</h5> {/* Type of Doc */}
          <h5>{titleSplit[1]}</h5> {/* Document */}
          <h5>{titleSplit[2]}</h5> {/* Milestone Number (if applicable) */}
          <h6 
            style={{
              color: 'var(--secondary)',
              opacity: isHovered ? 1 : 0,
              overflow: 'hidden',
              transition: 'max-height 0.3s ease, opacity 0.3s ease'
            }}
          >
            Click to Open
          </h6>
        </div>
      }
    </div>
  );
}

export default PDFView;

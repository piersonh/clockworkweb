import { pdfjs, Document, Page } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = 
  `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PDFView = ({ fileName }) => {
    return (
        <a href={`/public/documents/${fileName}`} target="_blank" rel="noopener noreferrer">
            <div className="w-64 h-80 shadow-lg rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform flex items-center justify-center bg-gray-100">
                <Document file={`/public/documents/${fileName}`}>
                    <Page pageNumber={1} width={250} />
                </Document>
            </div>
        </a>
    );
};

export default PDFView;
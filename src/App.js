import React from 'react';
import './style.css';
import AllPagesPDFViewer from './components/all-pages';
export default function App() {
  const samplePDF = 'https://www.africau.edu/images/default/sample.pdf';
  return (
    <div>
      <h4>All Pages</h4>
      <div className="all-page-container">
        <AllPagesPDFViewer pdf={samplePDF} />
      </div>
    </div>
  );
}

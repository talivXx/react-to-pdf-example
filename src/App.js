import { Button } from '@mui/material';
import './App.css';
import Example from './Example';
import JsPDF from 'jspdf';

function App() {

  const generatePDF = () => {
    const report = new JsPDF('portrait', 'pt', 'a4');
    report.html(document.querySelector('#report')).then(() => {
      report.save('report.pdf');
    })
  }

  return (
    <div className="App">
      <Button onClick={generatePDF} color='primary' variant='contained'>DOWNLOAD PDF</Button>
      <div style={{position: 'absolute', left: 3000}}>
        <Example />
      </div>
      
    </div>
  );
}

export default App;

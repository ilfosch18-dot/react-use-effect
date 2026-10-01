// IMPORTO GLI HOOK useState E useEffect insieme
import {useState, useEffect} from 'react';

export default function WindowSize() {

const [width, setWidth] = useState(window.innerWidth);

function handleWidth(){
setWidth(window.innerWidth);
}
const [height, setHeight] = useState(window.innerHeight);
function handleHeight(){
    setHeight(window.innerHeight);
}

useEffect(() => {
// ESEGUO FUZNIONE HANDLEWIDTH QUANDO SI RIDIMENSIONA LA FINESTRA
window.addEventListener('resize', handleWidth);
// ESEGUO FUZNIONE HANDLEHEIGHT QUANDO SI RIDIMENSIONA LA FINESTRA
window.addEventListener('resize', handleHeight);
// CLEANUP
return () => {
// Quando il componente viene smontato, rimuovo il listener della larghezza
window.removeEventListener("resize", handleWidth);
//Rimuovo il listener dell'altezza
window.removeEventListener("resize", handleHeight);
  };
}, []);

let breakpoint;

if (width < 768) {
  breakpoint = "Mobile";
} else if (width < 992) {
  breakpoint = "Tablet";
} else {
  breakpoint = "Desktop";
}

  return (
<main className="my-5 main-content">
      <div className="container">
        <h4 className="text-center mb-4 text-bg-info p-3 rounded">
          <b>Esercizio 3</b>
          <br />
          Creare un componente WindowSize che mostra in tempo reale larghezza e altezza della finestra.
          <ol className="list-group list-group-numbered py-3">
            <li className="list-group-item bg-info border-0 text-black-50">Stato inizializzato con window.innerWidth e window.innerHeight.</li>
            <li className="list-group-item bg-info border-0 text-black-50">useEffect che registra un listener sull'evento resize.</li>
            <li className="list-group-item bg-info border-0 text-black-50">Mostrare anche un badge con il breakpoint corrente: mobile (minore di 768px), tablet (minore di 992px), desktop.</li>
            <li className="list-group-item bg-info border-0 text-black-50">Cleanup con removeEventListener: la funzione handler deve quindi essere dichiarata con un nome, non anonima.</li>
        </ol>
        </h4>
      </div>
      <div className='container text-center'>
        <p><strong>La larghezza della pagina è: </strong><span className="fw-bold text-success">{width}</span></p>
        <p><strong>L'altezza della pagina è: </strong><span className="fw-bold text-success">{height}</span></p>
      </div>
      <div className="container text-center">
        <span className="badge text-bg-primary fs-5">
            Badge che mostra la dimensione corrente: {breakpoint} — {width} × {height}px
        </span>
        </div>
      </main>
    )
}
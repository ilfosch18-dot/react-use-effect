// IMPORTO GLI HOOK useState E useEffect insieme
import { useState, useEffect } from 'react';

export default function PrimoEsercizio() {

// CREO UNO STATE 
const [text, setText] = useState(() => {
// LOCAL STORAGE PER IMPORTARE I DATI QUESTA VOLTA, SI USA parse E getItem
    const savedText = JSON.parse(localStorage.getItem('text-count'));
// ORERATORE TERNARIO CHE DICE SE ESISTE IL TESTO NELLA VARIABILE savedText INSERISCILO ALTRIMENTI NULLA
    return savedText ? savedText : '';
});

// FUNZIONE DI RESET, USO setText PERCHE' E' LA FUNZIONE CHE PERMETTE A TEXT DI MUTARE
function resetText(){
    setText('');
}

// useEffect PERCHE' L'ESERCIZIO CHIEDE UN LOCAL STORAGE 
useEffect(() => {
    console.log('Salvataggio dati con local storage');

    // LOCAL STORAGE, SI USA PER SALVARE IL VALORE DI text SOTTO LA CHIAVE 'text-count' (nome arbitrario, poteva essere qualsiasi cosa purchè parlante)
    localStorage.setItem('text-count', JSON.stringify(text));
    // CONTEGGIO DEI CARATTERI NELLA TAB DEL BROWSER, ANCHE PER QUESTO MOTIVO SERVE useEffect, PERCHE' BISGONA ACCEDERE A QUESTO ELEMENTO DEL DOM!
    document.title = `Conteggio caratteri: ${text.length}`;
    }, [text]);

  return (
   <main className="main-content">
      <div className="container">
        <h4 className="text-center mb-4 text-bg-info p-3 rounded">
          <b>Esercizio 1</b>
          <br />
          Creare un componente NotePad con una textarea.
          <ol className="list-group list-group-numbered py-3">
            <li className="list-group-item bg-info border-0 text-black-50">Il testo digitato viene salvato in localStorage a ogni modifica.</li>
            <li className="list-group-item bg-info border-0 text-black-50">Al ricaricamento della pagina il testo viene recuperato da localStorage.</li>
            <li className="list-group-item bg-info border-0 text-black-50">Sotto la textarea viene mostrato il numero di caratteri.</li>
            <li className="list-group-item bg-info border-0 text-black-50">Il titolo della tab del browser mostra X caratteri.</li>
            <li className="list-group-item bg-info border-0 text-black-50"><strong>Bonus: un pulsante "Svuota" che cancella testo e chiave dal localStorage.</strong></li>
        </ol>
        </h4>
      </div>
      <div className="container">
        <label className="form-label" htmlFor='area'><h5>Scrivi qui le tue note</h5></label>
        <textarea className="form-control" id='area' type="text" value={text} onChange={e => setText(e.target.value)}></textarea>
        <p className="text-start my-2">Conteggio caratteri: {text.length}</p>
        <button className="my-3 btn btn-warning" onClick={resetText}>Svuota</button>
      </div>
   </main>
  )
}
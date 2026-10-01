// IMPORTO GLI HOOK useState E useEffect insieme
import { useState, useEffect} from 'react';

export default function SecondoEsercizio() {

// Creo uno state "theme" e uso una funzione per recuperare il valore salvato nel localStorage al primo caricamento
const [theme, setTheme] = useState(() => {
// Creo una variabile che controlla se è presente un tema salvato nel localStorage
// non uso JSON.parse perchè non ho nulla di convertito ma semplicemente 'theme'
    const themeSaved = localStorage.getItem('theme');
// operatore ternario, se c'è un tema salvato ok(tema dark) altrimenti tema light come iniziale
    return themeSaved ? themeSaved : 'light';
});

// funzione richiesta per fare switch light/dark
function ThemeToggle() {
    // se il tema è dark imposta la funzione di modifica setTheme su light
    if (theme === "dark") {
        setTheme("light");
    // se il tema è light imposta la funzione di modifica setTheme su dark
    } else {
        setTheme("dark");
    }
}

function resetThemeLight(){
    setTheme("light");
}

useEffect(() => {
// console log di controllo
    console.log('Salva tema in local storage');
// Prendo l'elemento <html> della pagina e imposto il suo attributo data-bs-theme usando il valore contenuto nello state "theme"    
document.documentElement.setAttribute("data-bs-theme", theme);
// Local storage, non mi serve lo stringify perchè non ho nulla da convertire in quanto è uno stato che sto passando
    localStorage.setItem('theme', theme);
// CLEANUP FUNCTION
  return () => {
// Quando il componente viene smontato, ripristino il tema light
    document.documentElement.setAttribute("data-bs-theme", "light");
  };
},[theme]);

  return (
<main className="my-5 main-content">
      <div className="container">
        <h4 className="text-center mb-4 text-bg-success p-3 rounded">
          <b>Esercizio 2</b>
          <br />
          Creare un componente ThemeToggle con un pulsante che alterna tema chiaro e scuro.
          <ol className="list-group list-group-numbered py-3">
            <li className="list-group-item bg-success border-0 text-white-50">Lo stato theme viene salvato in localStorage e recuperato al caricamento.</li>
            <li className="list-group-item bg-success border-0 text-white-50">Un useEffect applica una classe al document per light e dark mode</li>
            <li className="list-group-item bg-success border-0 text-white-50">Il testo del pulsante cambia in base al tema attivo.</li>
            <li className="list-group-item bg-success border-0 text-white-50"><strong>gestire la visibilità del componente con conditional rendering e aggiungere una cleanup function di useEffect() 
                che ripristina il tema light quando il componente viene smontato. Verificare il comportamento.</strong></li>
        </ol>
        </h4>
      </div>
      <div className='my-3 container text-center'>
        <button className='btn btn-success' id='themeChanger' onClick={ThemeToggle}>{`Cambia il tema in: ${theme}`}</button>
        <button className='mx-3 btn btn-warning' id='resetLightTheme' onClick={resetThemeLight}>Torna al tema LIGHT</button>
      </div>
      </main>
    )
}
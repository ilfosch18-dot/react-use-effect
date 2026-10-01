import { useState } from "react";
/* import PrimoEsericizio  from "../sections/PrimoEsercizio";
import SecondoEsercizio from "../sections/SecondoEsercizio"; */
import WindowSize from "../sections/WindowSize";

export default function MainContent() {

  const [showTheme, setShowTheme] = useState(true);

  return (
    <main className="text-center">
{/*         <PrimoEsericizio />
        <hr className="border border-black border-3 opacity-75"></hr>
      <button className="mt-5 btn btn-success" onClick={() => setShowTheme(!showTheme)}>
        Mostra/Nascondi tema
      </button>

      {showTheme && <SecondoEsercizio />} */}
      <WindowSize />
    </main>
  );
}
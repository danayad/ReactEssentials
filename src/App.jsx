import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import { CORE_CONCEPTS, EXAMPLES } from "./data.js";
import TabButton from "./components/TabButton.jsx";
import { useState } from "react";

function App() {
  const [tabContent, setTabContent] = useState();

  function handleTabSelect(selectedButton) {
    setTabContent(selectedButton);
    // console.log(tabContent);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) =><CoreConcept key={concept.title}{...concept}/>)}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={tabContent==='components'} onSelect={() => handleTabSelect("components")}>
              Components
            </TabButton>
            <TabButton isSelected={tabContent==='jsx'} onSelect={() => handleTabSelect("jsx")}>JSX</TabButton>
            <TabButton isSelected={tabContent==='props'} onSelect={() => handleTabSelect("props")}>
              Props
            </TabButton>
            <TabButton isSelected={tabContent==='state'} onSelect={() => handleTabSelect("state")}>
              State
            </TabButton>
          </menu>
          {!tabContent ? (
            <p>Please select a topic.</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[tabContent].title}</h3>
              <p>{EXAMPLES[tabContent].description}</p>
              <pre>
                <code>{EXAMPLES[tabContent].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;

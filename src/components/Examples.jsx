import { useState } from "react";
import { EXAMPLES } from "../data.js";
import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";

export default function Examples() {
      const [tabContent, setTabContent] = useState();
    
      function handleTabSelect(selectedButton) {
        setTabContent(selectedButton);
        // console.log(tabContent);
      }
    return (
        <Section title='Examples' id="examples">
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
      </Section>
    );
}
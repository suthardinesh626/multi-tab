import React, { useState } from "react";
import SideBar from "./components/SideBar";
import Tabs from "./components/Tabs";
import TabData from "./components/TabData";
import "../src/style/App.css";

function App() {
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [selectedTab, setSelectedTab] = useState(null);

  const addEvent = (event) => {
    if (!selectedEvents.find((e) => e.id === event.id)) {
      setSelectedEvents([...selectedEvents, event]);
      setSelectedTab(event);
    }
  };

  const removeEvent = (id) => {
    const newSelectedEvents = selectedEvents.filter((event) => event.id !== id);
    setSelectedEvents(newSelectedEvents);
    if (selectedTab && selectedTab.id === id) {
      setSelectedTab(newSelectedEvents[0] || null);
    }
  };

  return (
    <div className="App">
      <div className="all-components">
        <div className="alleventlist">
          <SideBar addEvent={addEvent} />
        </div>
        <div className="tab-data">
          <div className="tabs-container">
            {selectedEvents.length > 0 ? (
              selectedEvents.map((event, index) => (
                <Tabs
                  key={index}
                  event={event}
                  removeEvent={removeEvent}
                  setSelectedTab={setSelectedTab}
                />
              ))
            ) : (
              <p className="" >(Click on any Event)</p>
            )}
          </div>
          <div className="tab-data-mapping">
            {selectedTab && <TabData event={selectedTab} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

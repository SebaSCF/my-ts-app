import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CalendarWeek from "./CalendarWeek";

function App() {
  const items = [
    {
      label: "Battalion Chief Day Crew",
      id: "1",
    },
    {
      label: "Safety Officer Day Crew",
      id: "2",
    },

    {
      label: "Ladder 91 Day Crew",
      id: "3",
    },
    {
      label: "Engine 2 Day Crew",
      id: "4",
    },
  ];

  return (
    <div className="p-4 " style={{ backgroundColor: "#F1F1F1", height: "100vh", width: "100%" }}>
      <CalendarWeek
        HeaderBackgroundColor={"#112B42"}
        HeaderTextColor={"#fff"}
        ItemContainerColor={"#fff"}
        ItemTextColor={"#112B42"}
        items={items}
      />
    </div>
  );
}

export default App;

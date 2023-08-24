import React, { useRef, useState } from "react";
import { startOfWeek, addDays, format } from "date-fns";

interface CalendarWeekProps {
  HeaderBackgroundColor: string;
  HeaderTextColor?: string;
  ItemContainerColor?: string;
  ItemTextColor?: string;
  items?: itemRow[];
}

interface itemRow {
  label: string;
  id: string;
}

const CalendarWeek = (props: CalendarWeekProps) => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDate = new Date();
  const weekStart = startOfWeek(currentDate, { weekStartsOn: 0 }); // Sunday as the first day of the week
  const daysInWeek = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i));

  const daysOfWeekWithDate = daysOfWeek.map((day, index) => ({
    Day: day,
    Date: daysInWeek[index],
  }));

  function hexToRgb(hex: string) {
    // Remove '#' symbol if present
    hex = hex.replace("#", "");

    // Split hex into red, green, and blue components
    const red = parseInt(hex.substring(0, 2), 16);
    const green = parseInt(hex.substring(2, 4), 16);
    const blue = parseInt(hex.substring(4, 6), 16);

    return `rgb(${red || 0}, ${green || 0}, ${blue || 0})`;
  }
  function addAlpha(color: string, opacity: number) {
    // coerce values so ti is between 0 and 1.
    var _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
    return `${color.substring(0, color.length - 1)}, 0.${+_opacity
      .toString(16)
      .toUpperCase()})`;
  }

  console.log(hexToRgb(props.HeaderBackgroundColor));

  return (
    <div>
      <div
        className="grid grid-cols-9 "
        style={{
          gridAutoRows: "1fr",
          borderRadius: "20%",
        }}
      >
        <div className="col-span-2">
          <div
            style={{
              color: props.HeaderTextColor,
              backgroundColor: props.HeaderBackgroundColor,
              width: "100%",
              height: "80px",
              padding: "13px",
              fontWeight: "100",
              marginBottom: 0,
              marginTop: 0,
            }}
          >
            List
          </div>
        </div>

        {daysOfWeekWithDate.map((day, index) => (
          <div key={index}>
            <div
              style={{
                color: props.HeaderTextColor,
                backgroundColor: props.HeaderBackgroundColor,

                width: "100%",
                height: "80px",
                padding: "13px",
                fontWeight: "100",
                textAlign: "center",
              }}
            >
              <p style={{ marginBottom: 0, marginTop: 0 }}>{day.Day}</p>
              <p style={{ marginBottom: 0, marginTop: 0 }}>
                {format(day.Date, "d")}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className={`grid grid-rows-9  w-100`}>
        {props.items?.map((item, index) => (
          <div className={`grid grid-cols-9  w-100`} key={item.id}>
            <div
              className="col-span-2"
              style={{
                backgroundColor: index % 2 ? "#fff" : "#F3F3F3",
                borderRight: "1px solid #CACACA",
                borderBottom: "1px solid #CACACA",
              }}
            >
              {item.label}
            </div>
          </div>
        ))}
          {/* {daysOfWeekWithDate.map((day, index) => (
              <div
                key={index}
                style={{
                  borderRight: "1px solid #CACACA",
                  borderBottom: "1px solid #CACACA",
                }}
              >
                <div
                  className="m-2 p-2 rounded-r-md"
                  style={{
                    borderLeft: ` 4px solid ${props.HeaderBackgroundColor}`,
                    backgroundColor: "#C2D0DD",
                    color: props.ItemTextColor,
                  }}
                >
                  <b>Lastn, N.</b>
                  <p>06:00 - 18:00</p>
                </div>{" "}
                <div
                  className="m-2 p-2 rounded-r-md"
                  style={{
                    borderLeft: ` 4px solid ${props.HeaderBackgroundColor}`,
                    backgroundColor: "#C2D0DD",
                    color: props.ItemTextColor,
                  }}
                >
                  <b>test</b>
                </div>
              </div>
            ))} */}
      </div>
    </div>
  );
};

export default CalendarWeek;

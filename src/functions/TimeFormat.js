import React from "react";
const TimeFormat = ({ timestamp }) => {
    const date = new Date(timestamp * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const period = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    return `${formattedHours}:${minutes < 10 ? "0" : ""}${minutes} ${period}`;
  };
export default TimeFormat;
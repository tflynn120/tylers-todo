import React, {useState} from 'react'

export function restoreInitialState(setTitleValue, setStartDate, setDueDate, setCategory) {
}

export const disableWeekends = ({activeStartDate, date, view }) =>
    date.getDay() === 0 || date.getDay() === 6;

export const daysToCompleteTask = (deadline, startDate) => {
    const diffInMs   = new Date(deadline) - new Date(startDate)
    let diffInDays = diffInMs / (1000 * 60 * 60 * 24);
    diffInDays = diffInDays.toFixed(0)
    return diffInDays;
}

export const setDates = (startDate, dueDate, e) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    startDate(new Date(e[0]).toLocaleDateString(undefined, options));
    dueDate(new Date(e[1]).toLocaleDateString(undefined, options));
  }

export const makeUpperCase = (text) => {
    return text.toUpperCase();
}
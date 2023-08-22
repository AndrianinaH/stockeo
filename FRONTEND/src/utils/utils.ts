/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "./axios";

export const setToken = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const calculateDaysBetweenDates = (
  startDate: Date | string,
  endDate: Date | string,
) => {
  // Convert the date strings to Date objects
  const start: any = new Date(startDate);
  const end: any = new Date(endDate);

  // Calculate the difference in milliseconds
  const differenceMs = Math.abs(end - start);

  // Convert milliseconds to days
  const days = Math.floor(differenceMs / (1000 * 60 * 60 * 24));

  return days;
};

export const YYYYMMDDtoMonthDDYYYY = (YYYYMMDD) => {
  const formattedDate = YYYYMMDD
    ? new Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(
        new Date(YYYYMMDD)
      )
    : "";

  return formattedDate;
};

export const getDayFromMonthDDYYYY = (formattedDate) => {
  const day = formattedDate ? new Date(formattedDate).getDate() : "";
  return day.toString();
};

export const getMonthFromMonthDDYYYY = (formattedDate) => {
  const month = formattedDate
    ? new Intl.DateTimeFormat("en-US", { month: "short" }).format(new Date(formattedDate))
    : "";
  return month;
};
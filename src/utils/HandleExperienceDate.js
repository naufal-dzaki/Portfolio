const HandleExperienceDate = (start, end) => {
  let dateStart, dateEnd;
  dateStart = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "short",
  }).format(Date.parse(start));

  if (end === "Present") dateEnd = end;

  if (end !== "Present") {
    dateEnd = new Intl.DateTimeFormat("en-GB", {
      year: "numeric",
      month: "short",
    }).format(Date.parse(end));
  }

  return `${dateStart} - ${dateEnd}`;
};

export default HandleExperienceDate;

export const fetchYearsList = (data) => {
  const yearsList = [];
  for (let i = 0; i < data.length; i++) {
    yearsList.push(data[i].launch_year);
  }
  return Array.from(new Set(yearsList));
};

export const highlightSelectedFilter = (evt) => {
  var allFilters = document.getElementsByName(evt.name);
  allFilters.forEach((item) => {
    item.classList.remove("selected");
  });
  evt.classList.add("selected");
};

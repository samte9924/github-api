export const retrieveHistory = () => {
  if (!localStorage.getItem("history")) {
    return null;
  } else {
    return JSON.parse(localStorage.getItem("history"));
  }
};

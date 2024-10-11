export const saveToHistory = (input) => {
  const currentTime = new Date();
  const formattedTime = currentTime.toLocaleString();

  if (!localStorage.getItem("history")) {
    // If history is empty, a new array with the input inside is created
    localStorage.setItem(
      "history",
      JSON.stringify([{ value: input, created_at: formattedTime }])
    );
  } else {
    const newHistory = JSON.parse(localStorage.getItem("history"));
    newHistory.push({ value: input, created_at: formattedTime });
    localStorage.setItem("history", JSON.stringify(newHistory));
  }
};

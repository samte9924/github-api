export const saveToHistory = (input) => {
  const currentTime = new Date();
  const formattedTime = currentTime.toLocaleString();

  const id = generateID();

  // If history is empty, a new array with the input inside is created
  const history = localStorage.getItem("history")
    ? JSON.parse(localStorage.getItem("history"))
    : [];

  const existingEntry = history.find((item) => item.value === input);

  // If entry already exists, the timestamp is updated to the new one
  if (existingEntry) {
    existingEntry.created_at = formattedTime;
  } else {
    history.push({ id: id, value: input, created_at: formattedTime });
  }

  // Add new entry
  localStorage.setItem("history", JSON.stringify(history));
};

function generateID() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 11);
}

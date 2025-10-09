// Load installed apps from localStorage
export const loadApplist = () => {
  try {
    const data = localStorage.getItem("applist");
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.error("Failed to load applist:", err);
    return [];
  }
};

// Save app to localStorage
export const updateApplist = (app) => {
  const applist = loadApplist();

  try {
    const isDuplicate = applist.some((p) => p.id === app.id);
    if (isDuplicate) return alert("App is already installed!");
    const updatedApplist = [...applist, app];
    localStorage.setItem("applist", JSON.stringify(updatedApplist));
  } catch (err) {
    console.error("Failed to update applist:", err);
  }
};

// Remove app from localStorage
export const removeFromApplist = (id) => {
  const applist = loadApplist();
  try {
    const updatedApplist = applist.filter((p) => p.id !== id);
    localStorage.setItem("applist", JSON.stringify(updatedApplist));
  } catch (err) {
    console.error("Failed to remove app from applist:", err);
  }
};

function formatDataSafely(data: any) {
  try {
    return JSON.stringify(data, null, 2);
  } catch (error) {
    return data;
  }
}

export { formatDataSafely };

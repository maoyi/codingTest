function sortByMarksDescending(jsonString) {
    return jsonString.sort(
      (a, b) => b.mark - a.mark || a.name.localeCompare(b.name)
    );
  }
  
  console.log(
    sortByMarksDescending([
      { name: "John", mark: 85 },
      { name: "Alice", mark: 90 },
      { name: "Bob", mark: 88 },
    ])
  );
  
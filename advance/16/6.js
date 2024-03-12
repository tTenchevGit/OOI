const participants = [
    { name: "Alice", points: 10 },
    { name: "Bob", points: 20 },
    { name: "Alice", points: 15 },
    { name: "Charlie", points: 5 },
    { name: "Bob", points: 10 },
    { name: "Alice", points: 20 }
  ];
  

const pointsByName = participants.reduce((acc, { name, points }) => {
    // Initialize the object for the participant if it doesn't exist
    if (!acc[name]) {
      acc[name] = { name, points: 0 };
    }
    
    // Accumulate points for the participant
    acc[name].points += points;
    
    return acc;
  }, {});
  
  // Convert the accumulated object back into an array
  const aggregatedPointsArray = Object.values(pointsByName);
  
  console.log(aggregatedPointsArray[1]);
  
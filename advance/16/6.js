const participants = [
    { name: "Alice", points: 10 },
    { name: "Bob", points: 20 },
    { name: "Alice", points: 15 },
    { name: "Charlie", points: 5 },
    { name: "Bob", points: 10 },
    { name: "Alice", points: 20 }
  ];
  

const pointsByName = participants.reduce((acc, { name, points }) => {
    
    if (!acc[name]) {
      acc[name] = { name, points: 0 };
    }
    
    
    acc[name].points += points;
    
    return acc;
  }, {});
  
  
  const aggregatedPointsArray = Object.values(pointsByName);
  
  console.log(aggregatedPointsArray[1]);
  
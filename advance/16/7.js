const settings = [
    { default: true, mode: "night", brightness: 30 },
    { brightness: 70, color: "blue" }, // Attempts to override 'brightness'
    { mode: "day", volume: 50 } // Attempts to override 'mode'
  ];
  
  const combinedSettings = settings.reduce((accumulator, current) => {
    return { ...current, ...accumulator };
  }, {});
  
  console.log(combinedSettings);
  

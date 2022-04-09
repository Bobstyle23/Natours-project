function printForecast(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`${arr[i]}℃ in ${i + 1} days`);
  }
  return arr;
}

const forecasts = [12, 5, -5, 0, 4];
console.log(printForecast(forecasts));

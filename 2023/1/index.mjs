const inputFile = await import('./index.json', {
  assert: {
    type: 'json'
  }
})

const { values } = inputFile.default;

const total = values.filter(Boolean).reduce((accumulator, value) => {
  const numbers = `${value}`.replace(/([A-Za-z])/g, '').split('');
  const number = Number(`${numbers[0]}${numbers[numbers.length -1]}`);

  return accumulator + Number(number);
}, 0);

console.log(total);

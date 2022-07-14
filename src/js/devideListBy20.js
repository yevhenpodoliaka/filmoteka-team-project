function devideListBy20(list) {
  const devidedList = [];
  const size = 20;

  for (let i = 0; i < Math.ceil(list.length / size); i += 1) {
    const part = list.slice(i * size, i * size + size);
    devidedList.push(part);
  }

  return devidedList;
}

export { devideListBy20 };

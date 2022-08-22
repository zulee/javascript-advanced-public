function bubbleSort(arr) {
  const arrCp = [...arr];
  let swapped = true;
  do {
    swapped = false;
    for (let i = 0; i < arrCp.length; i += 1) {
      if (arrCp[i] > arrCp[i + 1]) {
        const temp = arrCp[i];
        arrCp[i] = arrCp[i + 1];
        arrCp[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return arrCp;
}

export default bubbleSort;

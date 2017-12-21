export default (a, b, sortParam) => {
  let i = 0;
  let j = 0;
  const result = [];
  let lastPushedA = true;
  while (i < a.length && j < b.length) {
    const valueOfA = a[i][sortParam] || a[i];
    const valueOfB = b[j][sortParam] || b[j];
    if (valueOfA > valueOfB) {
      result.push(a[i]);
      i += 1;
      lastPushedA = true;
    } else if (valueOfA === valueOfB) {
      if (lastPushedA) {
        result.push(b[j]);
        j += 1;
        lastPushedA = false;
      } else {
        result.push(a[i]);
        i += 1;
        lastPushedA = true;
      }
    } else {
      result.push(b[j]);
      j += 1;
      lastPushedA = false;
    }
  }
  while (i < a.length) {
    result.push(a[i]);
    i += 1;
  }
  while (j < b.length) {
    result.push(b[j]);
    j += 1;
  }
  return result;
}

/*
|-----2.25-----4.5-----------9|---------
*/
(() => {
  const badApprox = (approx, n) => {
    const result = approx * approx;
    const err = n - result;
    const absErr = Math.abs(err);
    return absErr > 0.00000001;
  }
  const sqrt = (n) => {
    let low = 0;
    let high = n;
    let approx = n / 2;
    while (badApprox(approx, n)) {
      const result = approx * approx;
      if (result > n) {
        // our guess is too high
        low = low;
        high = approx;
      } else if (result < n) {
        // our guess is too low
        low = approx;
        high = high;
      }
      approx = (low + high) / 2;
    }
    return approx;
  }
  console.log(sqrt(9))
})()

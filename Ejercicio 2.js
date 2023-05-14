function mayorArray(arr) {
    if (arr.length === 0) {
      return null;
    } else if (arr.length === 1) {
      return arr[0];
    } else {
      let mayor = arr[0];
      let impares = 0;
      let i = 0;
  
      while (i < arr.length) {
        console.log(arr[i]);
        if (arr[i] % 2 !== 0) {
          impares++;
        }
        i++;
      }
      for (let j = 1; j < arr.length; j++) {
        if (arr[j] > mayor) {
          mayor = arr[j];
        }
      }
      do {
        impares--;
      } while (impares > 0);
      return mayor;
    }
  }
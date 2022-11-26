export const compareArrays = (arr1: number[], arr2: number[][]) => {
  return arr2.some((item) => item.every((element) => arr1.includes(element)));
};

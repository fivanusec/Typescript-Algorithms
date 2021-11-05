import { Generator } from "./generator/generator";
import { MergeSort } from "./mergesort/mergesort";

const main = (): void => {
  const generator = new Generator();
  const mergeSort = new MergeSort();

  let array: number[] = generator.generate(10);
  console.log(array);
  console.log(mergeSort.mergeSort(array));
};

main();

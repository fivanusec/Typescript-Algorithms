interface IMergeSort {
  mergeSort(array: number[]): number[];
  merge(temp1: number[], temp2: number[]): number[];
}

export class MergeSort implements IMergeSort {
  mergeSort(array: number[]): number[] {
    if (array.length <= 1) return array;

    const list1 = array.slice(0, Math.ceil(array.length / 2));
    const list2 = array.slice(list1.length, array.length);
    return this.merge(this.mergeSort(list1), this.mergeSort(list2));
  }

  merge(temp1: number[], temp2: number[]): number[] {
    const merged: number[] = [];
    while (temp1.length && temp2.length) {
      if (temp1[0] <= temp2[0]) {
        merged.push(temp1.shift());
      } else {
        merged.push(temp2.shift());
      }
    }

    while (temp1.length > 0) merged.push(temp1.shift());
    while (temp2.length > 0) merged.push(temp2.shift());
    return merged;
  }
}

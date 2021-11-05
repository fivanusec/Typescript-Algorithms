interface IGenerator {
  generate(size: number): number[];
  getIndex(array: number[], idx: number): number;
}

export class Generator implements IGenerator {
  generate(size: number): number[] {
    let array: number[] = [];
    for (let i = 0; i < size; i++) {
      array.push(Math.floor(Math.random() * 10));
    }
    return array;
  }

  getIndex(array: number[], idx: number): number {
    return array[idx];
  }
}

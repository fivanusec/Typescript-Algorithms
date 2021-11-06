import { QuickSort } from './QuickSort/quciksort'

const main = ():void => {
    const generator = (size: number): number[] => {
       let array: number[] = [];
        for(let i = 0; i < size; i++) array.push(Math.floor(Math.random() * 10));
        return array;
    }

    const array = generator(10);
    const quickSort = new QuickSort<number>();

    console.log(array);
    quickSort.sort(array, 0, array.length);
    console.log(array);
};

main();

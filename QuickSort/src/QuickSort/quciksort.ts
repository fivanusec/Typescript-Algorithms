interface IQuickSort<T> {
    sort(array:T[], p:number, r:number): void;
    partition(array: T[], p: number, r: number): number;
    swap(array: T[], i:number, j:number): void;
}

export class QuickSort<T> implements IQuickSort<T> {
    sort(array: T[], p: number, r: number): void {
        if(p < r) {
            let q = this.partition(array, p, r);
            this.sort(array, p, q - 1);
            this.sort(array, q + 1, r)
        }
    }

    partition(array: T[], p: number, r: number): number {
        let x = array[p];
        let swapIndex = p;
        for(let j = p + 1; j < r; j++) {
            if(array[j] < x) {
                swapIndex++;
                this.swap(array, j, swapIndex);
            }
        }
        this.swap(array, p, swapIndex);
        return swapIndex;
    }

    swap(array: T[], i: number, j:number): void {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

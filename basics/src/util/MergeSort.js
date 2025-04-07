export function mergeSort (originalNumberArray, start=0, end=originalNumberArray.legth-1) {
    if (start < end) {
        let m = (start + end) / 2;
        mergeSort(originalNumberArray, start, m);
        mergeSort(originalNumberArray, m+1, end);
        let tempNumberArray = [];
        for (let i= start; i<=m; i++) {
            tempNumberArray[i] = originalNumberArray[i]; //
        }
        for (let i= m+1; i<=end; i++) {
            let j = end + m+1 - i; //
            tempNumberArray[j] = originalNumberArray[i]; //
        }
        let i = start;
        let j = end;
        for ( let k= start; k<=end; k++) {
            if(tempNumberArray[i] < tempNumberArray[j]) {
                originalNumberArray[k] = tempNumberArray[i];
                i++;
            } else {
                originalNumberArray[k] = tempNumberArray[j];
                j--;
            }
        }
        return tempNumberArray;
    }
}

const test = mergeSort([1, 5, 9, 10, 15, 20]);
console.log(test);
// export const sum = (a: number, b: number): number => {
//     return a + b;
// };

export const merge = (collection_1: number[], collection_2: number[], collection_3: number[]): number[] => {
    
    let merged: number[] = [];
    let source: string = "";
    let i = 0, j = 0, k = collection_3.length - 1;

    while (i < collection_1.length || j < collection_2.length || k >= 0) {
        
        let min = Infinity;
        
        if (i < collection_1.length && collection_1[i] < min) {
            min = collection_1[i];
            source = "c1";
        }

        if (j < collection_2.length && collection_2[j] < min) {
            min = collection_2[j];
            source = "c2";
        }

        if (k >= 0 && collection_3[k] < min) {
            min = collection_3[k];
            source = "c3";
        }

        merged.push(min);

        if (source === "c1") i++;
        else if (source === "c2") j++;
        else k--;
    }

    return merged;
};
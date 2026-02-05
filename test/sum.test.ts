// import { sum } from '../src/sum';
import { merge } from '../src/sum';

// test('adds 1 + 2 to equal 3', () => {
//     expect(sum(1, 2)).toBe(3);
// });

test('empty collections', () => {
    expect(merge([], [], [])).toEqual([]);
});

test('one-empty collections', () => {
    expect(merge([1,4,7], [], [9,6,3])).toEqual([1,3,4,6,7,9]);
});

test('normal collections', () => {
    expect(merge([1,5,9], [2,6,10], [12,11,8,4,3])).toEqual([1,2,3,4,5,6,8,9,10,11,12]);
});

test('collections with negative numbers', () => {
    expect(merge([-3,0,2], [-5,1,4], [3,2,-1,-4])).toEqual([-5,-4,-3,-1,0,1,2,2,3,4]);
});

test('collections with duplicate numbers', () => {
    expect(merge([1,2,2,3], [2,3,4,4], [4,3,2,1])).toEqual([1,1,2,2,2,2,3,3,3,4,4,4]);
});
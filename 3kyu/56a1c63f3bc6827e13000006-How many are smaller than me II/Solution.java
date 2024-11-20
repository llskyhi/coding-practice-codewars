import java.util.Arrays;

// rewritten from Python version by https://github.com/Patxi91/CodeWars_Cloud/blob/master/3kyu-How%20many%20are%20smaller%20than%20me%20II-Patxi.py
public class Solution {
    public static void main(String[] args) {
        assert Arrays.equals(
            smaller(new int[] {5, 4, 7, 9, 2, 4, 1, 4, 5, 6}),
                    new int[] {5, 2, 6, 6, 1, 1, 0, 0, 0, 0}
        );
    }

    public static int[] smaller(int[] unsorted) {
        int[] result = new int[unsorted.length];
        NumberWithIndex[] numbersWithIndex = new NumberWithIndex[unsorted.length];

        for (int index=0; index<unsorted.length; index++) {
            numbersWithIndex[index] = new NumberWithIndex(unsorted[index], index);
        }

        mergeSortWithSmallerResult(numbersWithIndex, result);
        return result;
	}
    /**
     * Apply merge sort on {@code numbersWithIndex} by {@code NumberWithIndex}'s {@code number} field,
     * in the progress also update {@code smallerResult} by {@code NumberWithIndex}'s {@code index} field.
     * 
     * @param numbersWithIndex
     * @param smallerResult
     * @return
     */
    static NumberWithIndex[] mergeSortWithSmallerResult(NumberWithIndex[] numbersWithIndex, int[] smallerResult) {
        if (numbersWithIndex.length <= 1) {
            return numbersWithIndex;
        }

        int middle = numbersWithIndex.length / 2;
        NumberWithIndex[]
            left = mergeSortWithSmallerResult(Arrays.copyOfRange(numbersWithIndex, 0, middle), smallerResult),
            right = mergeSortWithSmallerResult(Arrays.copyOfRange(numbersWithIndex, middle, numbersWithIndex.length), smallerResult),
            merged = new NumberWithIndex[numbersWithIndex.length];
        int indexLeft = 0, indexRight = 0;
        int smallerThenLeftCount = 0;
        while (indexLeft < left.length && indexRight < right.length) {
            if (left[indexLeft].number > right[indexRight].number) {
                smallerThenLeftCount++;
                merged[indexLeft + indexRight] = right[indexRight];
                indexRight++;
            }
            else {
                smallerResult[left[indexLeft].index] += smallerThenLeftCount;
                merged[indexLeft + indexRight] = left[indexLeft];
                indexLeft++;
            }
        }
        for (; indexLeft < left.length; indexLeft++) {
            merged[indexLeft + indexRight] = left[indexLeft];
            smallerResult[left[indexLeft].index] += smallerThenLeftCount;
        }
        for (; indexRight < right.length; indexRight++) {
            merged[indexLeft + indexRight] = right[indexRight];
        }
        return merged;
    }
    static class NumberWithIndex {
        public final int number;
        public final int index;
        public NumberWithIndex(int number, int index) {
            super();
            this.number = number;
            this.index = index;
        }
    }
}

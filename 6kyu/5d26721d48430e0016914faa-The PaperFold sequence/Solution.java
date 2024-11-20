import java.util.function.IntSupplier;

public class Solution implements IntSupplier {
    public static void main(String[] args) {
        var p = new Solution();
        int testArray[] = {1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1};
        for (int n=0; n<testArray.length; n++) {
            assert testArray[n] == p.getAsInt();
        }
    }
    // https://en.wikipedia.org/wiki/Regular_paperfolding_sequence
    int n = 0;
    public int getAsInt() {
        int m = ++n;
        while (m % 2 == 0) {
            m /= 2;
        }
        return m % 4 == 1 ? 1 : 0;

        // Others' solution: only 2 bits of n matter: the right-most 1, and its left one bit.
        // If it's 11, output 0; otherwise it will be 01, output 1.
        // return (++n & Integer.lowestOneBit(n) << 1) == 0 ? 1 : 0;
    }
}

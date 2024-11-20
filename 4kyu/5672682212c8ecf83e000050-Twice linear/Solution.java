import java.util.*;

public class Solution {
    public static void main(String[] args) {
        assert dblLinear(10) == 22;
        assert dblLinear(20) == 57;
        assert dblLinear(30) == 91;
        System.out.println("test");
    }

    public static int dblLinear(int n) {
        SortedSet<Integer> uCandidates = new TreeSet<Integer>();
        int x = 1;

        uCandidates.add(1);
        for (int n_ = 0; n_ <= n; n_++) {
            // or combine these two to `.removeFirst()` after Java 21
            x = uCandidates.first();
            uCandidates.remove(x);

            uCandidates.add(2*x + 1);
            uCandidates.add(3*x + 1);
        }
        return x;
    }
}

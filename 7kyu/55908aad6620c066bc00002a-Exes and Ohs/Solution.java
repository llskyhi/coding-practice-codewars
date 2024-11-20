public class Solution {

    public static boolean getXO (String str) {
        int diff = 0;
        char c;
        for (int index=0; index<str.length(); index++) {
            c = str.charAt(index);
            System.out.println(c);
            switch (c) {
                case 'x':
                case 'X':
                    diff++;
                    break;
                case 'o':
                case 'O':
                    diff--;
                    break;
                default:
                    break;
            }
        }
        return diff == 0;
    }
}

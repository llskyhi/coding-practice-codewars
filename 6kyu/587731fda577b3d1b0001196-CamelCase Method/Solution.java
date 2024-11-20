public class Solution {
    public static String camelCase(String str) {
        StringBuilder builder = new StringBuilder();
        for (var word: str.split(" +")) {
            if (word.length() == 0) continue;
            builder
                .append(word.substring(0, 1).toUpperCase())
                .append(word.substring(1).toLowerCase());
        }
        return builder.toString();
    }
}

import java.util.*;

public class LambdaExpressions {
    public static void main(String[] args) {

        List<String> list =
        Arrays.asList(
        "John",
        "David",
        "Alex"
        );

        Collections.sort(
        list,
        (a,b) -> a.compareTo(b)
        );

        System.out.println(list);
    }
}
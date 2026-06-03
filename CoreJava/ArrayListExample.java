import java.util.*;

public class ArrayListExample {
    public static void main(String[] args) {
        ArrayList<String> names = new ArrayList<>();

        names.add("John");
        names.add("David");
        names.add("Sam");

        for(String name : names) {
            System.out.println(name);
        }
    }
}
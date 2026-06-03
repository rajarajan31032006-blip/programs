import java.util.*;

public class HashMapExample {
    public static void main(String[] args) {

        HashMap<Integer,String> map =
        new HashMap<>();

        map.put(101,"John");
        map.put(102,"David");
        map.put(103,"Sam");

        Scanner sc = new Scanner(System.in);

        int id = sc.nextInt();

        System.out.println(map.get(id));
    }
}
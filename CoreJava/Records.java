import java.util.*;

record Person(String name,int age){}

public class Records {
    public static void main(String[] args) {

        List<Person> list =
        Arrays.asList(
        new Person("John",20),
        new Person("David",17),
        new Person("Alex",25)
        );

        list.stream()
        .filter(p -> p.age() >= 18)
        .forEach(System.out::println);
    }
}
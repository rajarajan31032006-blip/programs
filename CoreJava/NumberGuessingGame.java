import java.util.*;
import java.util.Random;

public class NumberGuessingGame {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        Random r = new Random();

        int num = r.nextInt(100)+1;

        int guess;

        do{

            guess = sc.nextInt();

            if(guess > num)
                System.out.println("Too High");

            else if(guess < num)
                System.out.println("Too Low");

        }

        while(guess != num);

        System.out.println("Correct");
    }
}
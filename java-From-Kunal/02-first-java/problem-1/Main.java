// number is even or odd

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        System.out.print("Enter your number to print even or odd : ");
        Scanner input = new Scanner(System.in);
        int number =  input.nextInt();
        if (number % 2 == 0) {
            System.out.println("your number is even");
        } else {
            System.out.println("your number is odd");
        }
    }
}
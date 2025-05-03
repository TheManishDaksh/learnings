// palindrome string

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        System.out.print("Enter your text : ");
        Scanner input = new Scanner(System.in);
        String text = input.nextLine();

        String reverse = new StringBuilder(text).reverse().toString();
        if (reverse.equalsIgnoreCase(text)) {
            System.out.println(text + " is a polindrome");
        }else{
            System.out.println(text+" is not a polindrome");
        }
    }
}
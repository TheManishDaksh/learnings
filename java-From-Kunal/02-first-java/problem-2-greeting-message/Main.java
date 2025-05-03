//take a name as input and print them as a greeting message

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        System.out.print("Enter your name : ");
        Scanner name = new Scanner(System.in);
        String person = name.nextLine();
        System.out.println("congratulations on your first program"+ person);
    }
}
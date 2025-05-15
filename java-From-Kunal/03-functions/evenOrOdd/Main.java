import java.util.Scanner;

public class Main {
public static void main(String[] args) {
    Scanner number = new Scanner(System.in);
    System.out.print("enter Your number");
    int num = number.nextInt();
    if (num%2 == 0) {
        System.out.println("number is even");
    }else{
        System.out.println("number is odd");
    }
}    
}

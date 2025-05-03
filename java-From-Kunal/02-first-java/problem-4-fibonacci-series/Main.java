// fibonacci series

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        System.out.println("Enter your number : ");
        Scanner number = new Scanner(System.in);
        int num1 = number.nextInt();
        int a = 0;
        int b = 1;
        System.out.println(a+" "+b);
        for(int i=2; i<num1; i++){
            int next = a+b;
            a=b;
            b=next;
            System.out.println(next);
        }
    }
}
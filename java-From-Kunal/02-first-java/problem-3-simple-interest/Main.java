// take Principle, time, money as input and find the interest value

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        System.out.print("Enter your principle amount : ");
        Scanner principleAmount = new Scanner(System.in);
        int amount = principleAmount.nextInt();
        System.out.print("Enter your interestRate : ");
        Scanner principleInterest = new Scanner(System.in);
        int interest = principleInterest.nextInt();
        System.out.print("Enter your time(in Years) : ");
        Scanner principleTime = new Scanner(System.in);
        float time = principleTime.nextFloat();
        if (amount > 0 && interest > 0 && time > 0) {
                float interestAmount = (amount*time*interest)/100 ;
                System.out.println(" your interestAmount is : " + interestAmount);
        } else {
            System.out.println("please enter valid inputs");
        }
    }
}
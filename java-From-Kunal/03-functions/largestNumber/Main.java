import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner number = new Scanner(System.in);
        System.out.print("Enter first number : ");
        int num1 = number.nextInt();
         System.out.print("Enter Second number : ");
        int num2 = number.nextInt();
         System.out.print("Enter Third number : ");
        int num3 = number.nextInt();

        int largest = largest(num1, num2, num3);
        System.out.println("largest is : " + largest);
        int smallest = smallest(num1, num2, num3);
        System.out.println("smallest is : " + smallest);
    }
    
    public static int largest(int num1, int num2, int num3){
        int max = num1;
        if (num2 > max) {
            max = num2;
        }
        if(num3 > max){
            max = num3;
        }
        return max;
    }

    public static int smallest(int num1, int num2, int num3){
        int min = num1;
        if (num2 < min) {
            min = num2;
        }
        if(num3 < min){
            min = num3;
        }
        return min;
    }

}

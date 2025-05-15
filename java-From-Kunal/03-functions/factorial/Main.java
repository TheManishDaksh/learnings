import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner number = new Scanner(System.in);
        System.out.print("Enter yout number : ");
        int num = number.nextInt();
        int ans = 1;
        if (num == 1) {
            System.out.println("can not be factorial");
        }else{
            for( int i=1; i<num; i++){
                ans *= i;
            }
        }
        System.out.println("factorial is :"+ans);
    }    
}

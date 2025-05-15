import java.util.Scanner;

public class Main {
public static void main(String[] args) {
    Scanner number = new Scanner(System.in);
    System.out.print("Enter Your number : ");
    int num = number.nextInt();
    boolean prime = true;

    if (num == 1) {
        prime = true;
    }else{
        for( int i=2; i<num; i++){
            if (num%i ==0) {
                prime = false;
            }
        }
    }
    if (prime) {
        System.out.println("prime");
    }else{
        System.out.println("even");
    }
}    
}

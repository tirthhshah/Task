public class p8{
    public static void main(String[] args) {
        int n = 4;

        // Upper pyramid
        for (int i = 0; i <= n; i++) {

            // spaces
            for (int s = 0; s < n - i; s++) {
                System.out.print("  ");
            }

            // stars + numbers
            for (int j = 0; j < i; j++) {
                System.out.print("* " + i + " ");
            }

            // last star
            System.out.print("*");
            System.out.println();
        }

        // Lower inverted pyramid
        for (int i = n - 1; i >= 0; i--) {

            // spaces
            for (int s = 0; s < n - i; s++) {
                System.out.print("  ");
            }

            // stars + numbers
            for (int j = 0; j < i; j++) {
                System.out.print("* " + i + " ");
            }

            // last star
            System.out.print("*");
            System.out.println();
        }
    }
}

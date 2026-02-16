public class HollowPyramidFiveBase {
    public static void main(String[] args) {

        int rows = 5;
        int baseStars = 5;   // bottom row stars

        for (int i = 1; i <= rows; i++) {

            // spacing for center alignment
            for (int j = 1; j <= rows - i; j++) {
                System.out.print(" ");
            }

            if (i == rows) {
                // print only 5 stars on last row
                for (int j = 1; j <= baseStars; j++) {
                    System.out.print("* ");
                }
            } else {
                // print hollow sides
                for (int k = 1; k <= 2*i - 1; k++) {
                    if (k == 1 || k == 2*i - 1)
                        System.out.print("*");
                    else
                        System.out.print(" ");
                }
            }

            System.out.println();
        }
    }
}

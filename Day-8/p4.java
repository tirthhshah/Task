public class p4 {

    public static void printPattern(int size) {
    

        for (int i = 0; i < size; i++) {
            for (int j = 0; j < size; j++) {
                // Conditions for the boundary of the '8' shape (approximate)
                if ((j == 0 || j == size - 1) && (i > 0 && i < size - 1) ||
                    (i == 0 || i == size - 1 || i == size / 2) && (j > 0 && j < size - 1)) {
                    System.out.print("*"); // Or "*" for a star pattern
                } else {
                    System.out.print(" ");
                }
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        System.out.println("Pattern of digit 8 (Size 7):");
        printPattern(7);
    }
}

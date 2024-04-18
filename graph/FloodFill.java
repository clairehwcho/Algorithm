package graph;

import java.util.Arrays;
import java.util.LinkedList;
import java.util.Queue;

public class FloodFill {
    /**
     * An image is represented by an m x n integer grid image
     * where image[i][j] represents the pixel value of the image.
     *
     * You are also given three integers sr, sc, and color.
     * You should perform a flood fill on the image
     * starting from the pixel image[sr][sc].
     *
     * To perform a flood fill, consider the starting pixel,
     * plus any pixels connected 4-directionally
     * to the starting pixel of the same color as the starting pixel,
     * plus any pixels connected 4-directionally to those pixels
     * (also with the same color), and so on.
     * Replace the color of all of the aforementioned pixels with color.
     *
     * Return the modified image after performing the flood fill.
     *
     */

    /**
     * Approach 1: Recursion (Depth-First Search)
     * Time Complexity: O(m * n), where m is the number of rows
     * and n is the number of columns.
     * - The flood fill might need to visit each pixel once in the worst case.
     * Space Complexity: O(m * n)
     * - The recursion stack may go up to the number of pixels in the image.
     *
     * @param image The 2D array representing the image where each element is a
     *              pixel value.
     * @param sr    The row index of the starting pixel.
     * @param sc    The column index of the starting pixel.
     * @param color The new color to replace the old color.
     * @return A 2D array representing the modified image after the flood fill
     *         operation.
     */

    // Helper method to perform depth-first search (DFS) to perform the flood fill
    // operation.
    private static void dfs(int[][] image, int sr, int sc, int color, int oldColor) {
        // Base case: If the current pixel is out of bounds or not the old color,
        // return.
        if (sr < 0 || sr >= image.length || sc < 0 || sc >= image[0].length || image[sr][sc] != oldColor) {
            return;
        }

        // Replace the color of the current pixel.
        image[sr][sc] = color;

        // Recursive case:
        // Recursively perform DFS in all 4 possible directions (up, down, left, right).
        dfs(image, sr - 1, sc, color, oldColor); // Up
        dfs(image, sr + 1, sc, color, oldColor); // Down
        dfs(image, sr, sc - 1, color, oldColor); // Left
        dfs(image, sr, sc + 1, color, oldColor); // Right
    }

    public static int[][] solutionOne(int[][] image, int sr, int sc, int color) {
        // If the starting pixel does not have the new color
        int oldColor = image[sr][sc];
        if (oldColor != color) {
            // Perform the flood fill using DFS.
            dfs(image, sr, sc, color, oldColor);
        }
        // Return the original or modified image.
        return image;
    }

    /**
     * Approach 2: Iteration (Breadth-First Search)
     * Time Complexity: O(m * n), where m is the number of rows
     * and n is the number of columns.
     * - Each pixel is visited once and added to the queue once.
     * Space Complexity: O(m * n)
     * - In the worst case, the queue may store up to all elements at a time.
     * - It takes a constant amount of extra space to store the directions array.
     *
     * @param image The 2D array representing the image where each element is a
     *              pixel value.
     * @param sr    The row index of the starting pixel.
     * @param sc    The column index of the starting pixel.
     * @param color The new color to replace the old color.
     * @return A 2D array representing the modified image after the flood fill
     *         operation.
     */

    public static int[][] solutionTwo(int[][] image, int sr, int sc, int color) {
        // Early exit check: If the starting pixel already has the new color
        int oldColor = image[sr][sc];
        if (oldColor == color) {
            // Return the image as it is.
            return image;
        }

        // Create a 2D array to represent movement in four possible directions.
        int[][] directions = {
                { -1, 0 }, // Move up one row in the image.
                { 1, 0 }, // Move down one row in the image.
                { 0, -1 }, // Move left one column in the image.
                { 0, 1 } // Move right one column in the image.
        };

        // Initialize a queue to perform BFS.
        Queue<int[]> queue = new LinkedList<>();

        // Add the starting pixel to the queue to start the BFS.
        queue.offer(new int[] { sr, sc });
        // Update the color of the starting pixel.
        image[sr][sc] = color;

        // Process each pixel in the queue.
        while (!queue.isEmpty()) {
            // Remove the front node of the queue and retrieve the row and column values.
            int[] curr = queue.poll();
            int r = curr[0];
            int c = curr[1];

            // Explore neighbors in all four directions.
            for (int[] direction : directions) {
                int newR = r + direction[0];
                int newC = c + direction[1];

                // Check if the new coordinates are within bounds and have the old color.
                if (newR >= 0 && newR < image.length && newC >= 0 && newC < image[0].length
                        && image[newR][newC] == oldColor) {
                    // Update the color and add the pixel to the queue.
                    image[newR][newC] = color;
                    queue.offer(new int[] { newR, newC });
                }
            }
        }
        // Return the modified image.
        return image;
    }

    public static void main(String[] args) {
        // Test case 1
        int[][] image1 = {
                { 1, 1, 1 },
                { 1, 1, 0 },
                { 1, 0, 1 }
        };
        int sr1 = 1;
        int sc1 = 1;
        int color1 = 2;
        int[][] expectedOutput1 = {
                { 2, 2, 2 },
                { 2, 2, 0 },
                { 2, 0, 1 }
        };

        // Test case 2
        int[][] image2 = {
                { 0, 0, 0 },
                { 0, 0, 0 }
        };
        int sr2 = 0;
        int sc2 = 0;
        int color2 = 0;
        int[][] expectedOutput2 = {
                { 0, 0, 0 },
                { 0, 0, 0 }
        };

        // Test solutionOne
        System.out.println("*****Testing solutionOne*****");
        System.out.println("Test Case 1:");
        System.out.println("Input Image: " + Arrays.deepToString(image1));
        System.out.println("Expected Output: " + Arrays.deepToString(expectedOutput1));
        int[][] image1Copy1 = {
                { 1, 1, 1 },
                { 1, 1, 0 },
                { 1, 0, 1 }
        };
        int[][] solutionOneResult1 = FloodFill.solutionOne(image1Copy1, sr1, sc1, color1);
        System.out.println("Actual Output: " + Arrays.deepToString(solutionOneResult1));
        System.out.println(Arrays.deepEquals(solutionOneResult1, expectedOutput1) ? "Test Passed" : "Test Failed");
        System.out.println();

        System.out.println("Test Case 2:");
        System.out.println("Input Image: " + Arrays.deepToString(image2));
        System.out.println("Expected Output: " + Arrays.deepToString(expectedOutput2));
        int[][] image2Copy1 = {
                { 0, 0, 0 },
                { 0, 0, 0 }
        };
        int[][] solutionOneResult2 = FloodFill.solutionOne(image2Copy1, sr2, sc2, color2);
        System.out.println("Actual Output: " + Arrays.deepToString(solutionOneResult2));
        System.out.println(Arrays.deepEquals(solutionOneResult2, expectedOutput2) ? "Test Passed" : "Test Failed");
        System.out.println();

        // Test solutionTwo
        System.out.println("*****Testing solutionTwo*****");
        System.out.println("Test Case 1:");
        System.out.println("Input Image: " + Arrays.deepToString(image1));
        System.out.println("Expected Output: " + Arrays.deepToString(expectedOutput1));
        int[][] image1Copy2 = {
                { 1, 1, 1 },
                { 1, 1, 0 },
                { 1, 0, 1 }
        };
        int[][] solutionTwoResult1 = FloodFill.solutionTwo(image1Copy2, sr1, sc1, color1);
        System.out.println("Actual Output: " + Arrays.deepToString(solutionTwoResult1));
        System.out.println(Arrays.deepEquals(solutionTwoResult1, expectedOutput1) ? "Test Passed" : "Test Failed");
        System.out.println();

        System.out.println("Test Case 2:");
        System.out.println("Input Image: " + Arrays.deepToString(image2));
        System.out.println("Expected Output: " + Arrays.deepToString(expectedOutput2));
        int[][] image2Copy2 = {
                { 0, 0, 0 },
                { 0, 0, 0 }
        };
        int[][] solutionTwoResult2 = FloodFill.solutionTwo(image2Copy2, sr2, sc2, color2);
        System.out.println("Actual Output: " + Arrays.deepToString(solutionTwoResult2));
        System.out.println(Arrays.deepEquals(solutionTwoResult2, expectedOutput2) ? "Test Passed" : "Test Failed");
        System.out.println();
    }
}

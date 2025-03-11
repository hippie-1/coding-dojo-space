class SkipListNode {
    int value;
    SkipListNode[] forward; // Array to hold references to the next nodes in each level

    public SkipListNode(int value, int level) {
        this.value = value;
        this.forward = new SkipListNode[level + 1];
    }
}

public class SkipList {
    private static final int MAX_LEVEL = 5; // Maximum number of levels in the skip list
    private int level; // Current maximum level of the skip list
    private SkipListNode header; // Header node

    public SkipList() {
        level = 0;
        header = new SkipListNode(Integer.MIN_VALUE, MAX_LEVEL);
        for (int i = 0; i <= MAX_LEVEL; i++) {
            header.forward[i] = null; // Initialize all forward references to null
        }
    }

    // Generate a random level for a new node
    private int randomLevel() {
        Random rand = new Random();
        int level = 0;
        while (rand.nextDouble() < 0.5 && level < MAX_LEVEL) {
            level++;
        }
        return level;
    }

    // Insert a new node into the skip list
    public void insert(int value) {
        SkipListNode[] update = new SkipListNode[MAX_LEVEL + 1];
        SkipListNode current = header;

        // Find the position to insert the new node
        for (int i = level; i >= 0; i--) {
            while (current.forward[i] != null && current.forward[i].value < value) {
                current = current.forward[i];
            }
            update[i] = current;
        }

        current = current.forward[0];

        // If the node with the given value already exists, do nothing
        if (current == null || current.value != value) {
            int newLevel = randomLevel();

            if (newLevel > level) {
                for (int i = level + 1; i <= newLevel; i++) {
                    update[i] = header;
                }
                level = newLevel;
            }

            // Create a new node with the given value
            SkipListNode newNode = new SkipListNode(value, newLevel);

            // Insert the new node into the skip list
            for (int i = 0; i <= newLevel; i++) {
                newNode.forward[i] = update[i].forward[i];
                update[i].forward[i] = newNode;
            }
        }
    }

    // Search for a value in the skip list
    public boolean search(int value) {
        SkipListNode current = header;
        for (int i = level; i >= 0; i--) {
            while (current.forward[i] != null && current.forward[i].value < value) {
                current = current.forward[i];
            }
        }
        current = current.forward[0];
        return current != null && current.value == value;
    }

    // Display the skip list
    public void display() {
        for (int i = 0; i <= level; i++) {
            SkipListNode current = header.forward[i];
            System.out.print("Level " + i + ": ");
            while (current != null) {
                System.out.print(current.value + " ");
                current = current.forward[i];
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        SkipList skipList = new SkipList();
        skipList.insert(3);
        skipList.insert(6);
        skipList.insert(7);
        skipList.insert(9);
        skipList.insert(12);
        skipList.insert(19);
        skipList.insert(21);
        skipList.insert(25);
        skipList.insert(26);
        skipList.insert(31);

        System.out.println("Skip List after insertion:");
        skipList.display();

        System.out.println("\nSearch for 12: " + skipList.search(12));
        System.out.println("Search for 20: " + skipList.search(20));
    }
}
import QuestionCard from "@/components/QuestionCard";
import UnitHeader from "@/components/UnitHeader";
import CodeBlock from "@/components/CodeBlock";
import TipBox from "@/components/TipBox";

const Unit4Section = () => (
  <section id="unit4">
    <UnitHeader badge="U4" badgeColor="hsl(330,70%,55%)" title="Trees" subtitle="8 hrs · Binary Tree · BST · AVL Tree · Huffman · B-Tree · Tree Traversals" />

    <QuestionCard priority="HIGH" marks="7–8 Marks" years="2022·2023·2024·2025" title="Perform Inorder, Preorder, and Postorder traversals on a binary tree." questionText="How do you traverse a Binary tree? Perform In-order, Pre-order and Post-order traversal of the given tree.">
      <h4 className="font-bold text-foreground mt-2">Binary Tree</h4>
      <p>A <strong>Binary Tree</strong> is a hierarchical data structure in which each node has at most two children, referred to as the <strong>left child</strong> and the <strong>right child</strong>. The topmost node is called the <strong>root</strong>. Nodes with no children are called <strong>leaf nodes</strong>. Binary trees are used to represent hierarchical relationships and form the basis for more specialized trees like BST, AVL, and Heap.</p>

      <h4 className="font-bold text-foreground mt-4">Tree Traversal Methods</h4>
      <p><strong>Traversal</strong> means visiting every node in the tree exactly once in a systematic order. There are three depth-first traversal methods, each differing in when the root node is visited:</p>
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>Inorder (Left → Root → Right):</strong> Visit the left subtree first, then the root, then the right subtree. For a BST, this gives elements in sorted (ascending) order. Used to get sorted output from a BST.</li>
        <li><strong>Preorder (Root → Left → Right):</strong> Visit the root first, then the left subtree, then the right subtree. Used to create a copy of the tree or to get prefix expression from an expression tree.</li>
        <li><strong>Postorder (Left → Right → Root):</strong> Visit the left subtree, then the right subtree, then the root last. Used to delete the tree (children deleted before parent) or to evaluate postfix expressions.</li>
      </ul>

      <CodeBlock>{`Example Tree:
           P
          / \\
         Q   R
        / \\   \\
       S   T   U
          /
         V

Inorder (LNR):   S → Q → V → T → P → R → U
Preorder (NLR):  P → Q → S → T → V → R → U
Postorder (LRN): S → V → T → Q → U → R → P`}</CodeBlock>

      <CodeBlock>{`// Recursive implementations — all O(n) time, O(h) space
void inorder(struct Node* root) {
    if (root == NULL) return;
    inorder(root->left);         // L
    printf("%d ", root->data);   // N (visit)
    inorder(root->right);        // R
}

void preorder(struct Node* root) {
    if (root == NULL) return;
    printf("%d ", root->data);   // N (visit)
    preorder(root->left);        // L
    preorder(root->right);       // R
}

void postorder(struct Node* root) {
    if (root == NULL) return;
    postorder(root->left);       // L
    postorder(root->right);      // R
    printf("%d ", root->data);   // N (visit)
}`}</CodeBlock>

      <TipBox>Remember the mnemonics: Inorder = LNR, Preorder = NLR, Postorder = LRN (N = Node/Root). Always trace through the specific tree given in the question step by step. Draw arrows showing the traversal path for clarity. This is one of the most frequently asked questions — practice with different tree shapes.</TipBox>
    </QuestionCard>

    <QuestionCard priority="HIGH" marks="7–8 Marks" years="2023·2024·2025" title="Define BST. Write algorithm for insertion and deletion." questionText="Define Binary search tree. Create an AVL Tree from the following data and show the deletion of the root.">
      <h4 className="font-bold text-foreground mt-2">Binary Search Tree (BST)</h4>
      <p>A <strong>Binary Search Tree (BST)</strong> is a special type of binary tree that maintains a specific ordering property: for every node in the tree, all values in its <strong>left subtree are strictly less</strong> than the node's value, and all values in its <strong>right subtree are strictly greater</strong>. This ordering property enables efficient searching — instead of checking every element like in an array, you can eliminate half the remaining elements at each step, similar to binary search.</p>
      <p className="mt-2">BST provides O(log n) average-case time complexity for search, insertion, and deletion operations. However, if elements are inserted in sorted order, the BST becomes skewed (degenerates into a linked list), and all operations become O(n). This is the main motivation for self-balancing trees like AVL.</p>

      <CodeBlock>{`BST Property:
         50
        /  \\
      30    70
     / \\   / \\
   20  40 60  80

Search for 40:
50 → go left (40 < 50)
30 → go right (40 > 30)
40 → FOUND! (3 comparisons vs 7 in linear search)`}</CodeBlock>

      <CodeBlock>{`// BST Insertion — O(log n) average
struct Node* insert(struct Node* root, int key) {
    if (root == NULL) {
        struct Node* newNode = malloc(sizeof(struct Node));
        newNode->data = key;
        newNode->left = newNode->right = NULL;
        return newNode;
    }
    if (key < root->data)
        root->left = insert(root->left, key);
    else if (key > root->data)
        root->right = insert(root->right, key);
    return root;
}

// BST Search — O(log n) average, O(n) worst
struct Node* search(struct Node* root, int key) {
    if (root == NULL || root->data == key)
        return root;
    if (key < root->data)
        return search(root->left, key);
    return search(root->right, key);
}`}</CodeBlock>

      <h4 className="font-bold text-foreground mt-4">BST Deletion — Three Cases</h4>
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>Case 1 — Leaf node (no children):</strong> Simply remove the node. No restructuring needed.</li>
        <li><strong>Case 2 — One child:</strong> Replace the node with its only child. The child takes the deleted node's position.</li>
        <li><strong>Case 3 — Two children:</strong> Find the <strong>inorder successor</strong> (the smallest node in the right subtree), copy its value to the node being deleted, then recursively delete the inorder successor.</li>
      </ul>

      <TipBox>BST deletion with two children is the tricky part and the most commonly tested. The inorder successor is always the leftmost node in the right subtree. Always draw the tree before and after deletion to show the structural change.</TipBox>
    </QuestionCard>

    <QuestionCard priority="HIGH" marks="7–8 Marks" years="2022·2023·2024·2025" title="How does AVL Tree solve BST issues? Construct AVL tree from given data." questionText="How does an AVL tree solve the issues of Binary Search Tree? Construct an AVL Tree from the following data.">
      <h4 className="font-bold text-foreground mt-2">AVL Tree</h4>
      <p>An <strong>AVL Tree</strong> (named after inventors Adelson-Velskii and Landis) is a <strong>self-balancing Binary Search Tree</strong> where the difference between the heights of the left and right subtrees of any node (called the <strong>balance factor</strong>) is always −1, 0, or +1. If an insertion or deletion causes any node's balance factor to go beyond this range, the tree automatically performs <strong>rotations</strong> to restore balance.</p>

      <h4 className="font-bold text-foreground mt-4">Why AVL over BST?</h4>
      <p>A regular BST can become <strong>skewed</strong> (like a linked list) when data is inserted in sorted or nearly sorted order. For example, inserting 1, 2, 3, 4, 5 creates a right-skewed tree with height 5, making all operations O(n). An AVL tree prevents this by rebalancing after every insertion/deletion, guaranteeing O(log n) time for search, insert, and delete in <strong>all cases</strong> — not just the average case.</p>

      <h4 className="font-bold text-foreground mt-4">Balance Factor</h4>
      <p><strong>Balance Factor (BF) = Height of Left Subtree − Height of Right Subtree.</strong> For an AVL tree, BF must be −1, 0, or +1 for every node. If BF becomes +2 or −2 after an insertion, a rotation is needed.</p>

      <h4 className="font-bold text-foreground mt-4">Four Types of Rotations</h4>
      <CodeBlock>{`1. LL Rotation (Left-Left) — Single Right Rotation
   BF = +2 at root, +1 at left child
   
       30(+2)        20
      /              / \\
    20(+1)    →    10   30
   /
  10

2. RR Rotation (Right-Right) — Single Left Rotation
   BF = -2 at root, -1 at right child
   
   10(-2)           20
     \\              / \\
     20(-1)   →   10   30
       \\
       30

3. LR Rotation (Left-Right) — Left then Right
   BF = +2 at root, -1 at left child
   
     30(+2)      30(+2)       20
    /            /            / \\
   10(-1)  →   20(+1)   →  10   30
     \\        /
     20      10

4. RL Rotation (Right-Left) — Right then Left
   BF = -2 at root, +1 at right child
   
   10(-2)    10(-2)         20
     \\         \\           / \\
     30(+1) → 20(-1)  →  10   30
    /            \\
   20            30`}</CodeBlock>

      <CodeBlock>{`Example: Insert 35, 33, 42, 10, 14, 19, 27, 44, 26

Step 1: Insert 35          35
Step 2: Insert 33       33-35 (balanced)
Step 3: Insert 42       33-35-42 (balanced)
Step 4: Insert 10     10-33-35-42
                       BF(35)=+2, BF(33)=+1 → LL Rotation

After all insertions with rotations:
              33
            /    \\
          14      42
         / \\     / \\
       10   27  35  44
            /
           19

(Balance factors all within {-1, 0, +1})`}</CodeBlock>

      <TipBox>AVL is asked every single year. Master all 4 rotations — LL and RR are single rotations, LR and RL are double rotations. When constructing from data, insert one by one, calculate BF at each step, and rotate if |BF| &gt; 1. Draw the tree at each step for full marks. Show the BF values on the nodes.</TipBox>
    </QuestionCard>

    <QuestionCard priority="MEDIUM" marks="7 Marks" years="2024 Spr·2025" title="Construct Huffman Tree and determine Huffman codes." questionText="Construct the Huffman Tree for the given message and determine the Huffman code for each character.">
      <h4 className="font-bold text-foreground mt-2">Huffman Encoding</h4>
      <p><strong>Huffman coding</strong> is a widely used lossless data compression algorithm developed by David Huffman. It works on the principle that more frequently occurring characters should be assigned shorter binary codes, while less frequent characters get longer codes. This variable-length encoding ensures that the total number of bits used is minimized, achieving optimal compression for character-by-character encoding.</p>

      <h4 className="font-bold text-foreground mt-4">Algorithm Steps</h4>
      <ol className="list-decimal pl-5 space-y-1">
        <li>Count the frequency of each character in the message</li>
        <li>Create a leaf node for each character and add to a min-heap (priority queue) based on frequency</li>
        <li>While more than one node remains in the heap: extract the two nodes with the lowest frequency, create a new internal node with their combined frequency, and insert it back into the heap</li>
        <li>The last remaining node becomes the root of the Huffman Tree</li>
        <li>Assign codes: traverse from root — left edge = 0, right edge = 1. The code for each character is the sequence of 0s and 1s along the path from root to its leaf</li>
      </ol>

      <CodeBlock>{`Example: Message = "BCAADDCCACACAC"

Frequencies: A=5, C=5, B=1, D=2

Step 1: Min-heap: B(1), D(2), A(5), C(5)
Step 2: Combine B(1)+D(2) → (3)
        Heap: (3), A(5), C(5)
Step 3: Combine (3)+A(5) → (8)
        Heap: C(5), (8)
Step 4: Combine C(5)+(8) → (13) ← ROOT

Huffman Tree:
         (13)
        /    \\
      C(5)   (8)
     [0]    /   \\
          (3)   A(5)
         /  \\   [11]
       B(1) D(2)
      [100] [101]

Codes: C=0, A=11, B=100, D=101
Total bits = 5×1 + 5×2 + 1×3 + 2×3 = 5+10+3+6 = 24 bits
Without Huffman: 14 chars × 2 bits = 28 bits (at minimum)
Compression achieved!`}</CodeBlock>

      <TipBox>Always show the frequency table first, then build the tree step by step (combine the two smallest frequencies each time). Draw the final tree clearly with 0/1 labels on edges. Calculate total bits at the end to demonstrate the compression benefit.</TipBox>
    </QuestionCard>

    <QuestionCard priority="MEDIUM" marks="8 Marks" years="2022·2024 Spr·2025" title="Why is B-Tree needed? Create a B-Tree of given order from data." questionText="Why B-Tree is needed? Create a B-Tree of order 5 from the following set of data.">
      <h4 className="font-bold text-foreground mt-2">B-Tree</h4>
      <p>A <strong>B-Tree</strong> is a self-balancing, multi-way search tree specifically designed for storage systems that read and write large blocks of data — such as hard disks and databases. Unlike a BST (which is 2-way), a B-Tree of order m can have up to m children and m−1 keys per node. This means each node stores multiple keys, which reduces the height of the tree significantly and minimizes the number of disk accesses needed to find a key.</p>

      <h4 className="font-bold text-foreground mt-4">Why B-Tree is Needed</h4>
      <p>In disk-based storage, each level of a tree requires one disk read, which is very slow compared to RAM access. A BST with 1 million keys could have a height of 20 (meaning 20 disk reads). A B-Tree of order 1000 with the same data has a height of about 2–3, meaning only 2–3 disk reads. This dramatic reduction in disk I/O is why B-Trees are the standard data structure for database indexing (MySQL, PostgreSQL) and file systems (NTFS, HFS+).</p>

      <h4 className="font-bold text-foreground mt-4">Properties of B-Tree of order m</h4>
      <ul className="list-disc pl-5 space-y-1">
        <li>Every node has at most m children and m−1 keys</li>
        <li>Every non-root node has at least ⌈m/2⌉ children</li>
        <li>The root has at least 2 children (if it is not a leaf)</li>
        <li>All leaves appear at the same level (perfectly balanced)</li>
        <li>Keys within each node are stored in sorted order</li>
      </ul>

      <h4 className="font-bold text-foreground mt-4">Insertion Rule</h4>
      <p>Insert keys into the appropriate leaf node. If a node overflows (gets more than m−1 keys), split it at the median key: the median moves up to the parent, and the node splits into two nodes. If the parent also overflows, split propagates upward. The tree grows in height only when the root splits.</p>

      <TipBox>Know the properties by heart and understand the insertion split rule. For exam: when they give you data and ask to construct a B-Tree of order 5, insert keys one by one and split when a node gets 5 keys (split at median, push it up). B-Tree is frequently asked both as a full question and as a short note.</TipBox>
    </QuestionCard>
  </section>
);

export default Unit4Section;

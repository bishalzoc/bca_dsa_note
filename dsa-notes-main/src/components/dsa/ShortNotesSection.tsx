import QuestionCard from "@/components/QuestionCard";
import UnitHeader from "@/components/UnitHeader";
import TipBox from "@/components/TipBox";

const ShortNotesSection = () => (
  <section id="shortnotes">
    <UnitHeader badge="Q7" badgeColor="#4a5070" title="Short Notes — Q7 (Any Two, 2×5 = 10 Marks)" subtitle="Prepare all of these — pick any 2 in the exam" />

    <QuestionCard priority="HIGH" marks="5 Marks" years="2024 Spr·2024 Fall·2025" title="Short Note: Priority Queue">
      <h4 className="font-bold text-foreground mt-2">Priority Queue</h4>
      <p>A <strong>Priority Queue</strong> is an abstract data type similar to a regular queue, but with an important difference: each element has an associated <strong>priority</strong>, and elements are dequeued based on their priority rather than their insertion order. The element with the highest priority is always served first, regardless of when it was added. This makes it fundamentally different from a regular FIFO queue.</p>
      <p className="mt-2">There are two types: a <strong>Max-Priority Queue</strong> (the largest element has the highest priority and is dequeued first) and a <strong>Min-Priority Queue</strong> (the smallest element is dequeued first). The most efficient implementation uses a <strong>Binary Heap</strong>, which provides O(log n) for both insertion and deletion, and O(1) for peeking at the highest-priority element.</p>
      <ul className="list-disc pl-5 space-y-1 mt-2">
        <li><strong>Insert:</strong> O(log n) — add element and "bubble up" to maintain heap property</li>
        <li><strong>Delete max/min:</strong> O(log n) — remove root, replace with last, "heapify down"</li>
        <li><strong>Peek:</strong> O(1) — simply return the root element</li>
        <li><strong>Applications:</strong> CPU scheduling, Dijkstra's algorithm, Huffman coding, event-driven simulation</li>
      </ul>
      <TipBox>Priority Queue can be implemented using arrays (O(n) insert or delete), linked lists, or heaps (O(log n) both). Always mention the heap implementation for best marks — it gives the optimal performance.</TipBox>
    </QuestionCard>

    <QuestionCard priority="HIGH" marks="5 Marks" years="2022·2024 Spr·2025" title="Short Note: B-Tree">
      <h4 className="font-bold text-foreground mt-2">B-Tree</h4>
      <p>A <strong>B-Tree</strong> of order m is a self-balancing, multi-way search tree designed for efficient disk-based storage. Unlike a BST where each node has at most 2 children, a B-Tree node can have up to m children and stores up to m−1 keys in sorted order. All leaf nodes are always at the same level, ensuring the tree remains perfectly balanced. B-Trees are the standard data structure used in database indexing systems (MySQL, PostgreSQL) and file systems (NTFS, HFS+).</p>
      <p className="mt-2">The key advantage of B-Trees is that they minimize disk I/O operations. Since each node can store many keys, the tree has a very low height — a B-Tree of order 1000 with 1 billion keys has a height of only about 3, meaning only 3 disk reads are needed to find any key.</p>
      <ul className="list-disc pl-5 space-y-1 mt-2">
        <li>Every node has at most m children and m−1 keys</li>
        <li>Every non-root node has at least ⌈m/2⌉ children</li>
        <li>Search, Insert, Delete: all O(log n)</li>
        <li>Insertion overflow → split at median and push median to parent</li>
      </ul>
    </QuestionCard>

    <QuestionCard priority="HIGH" marks="5 Marks" years="2022·2025" title="Short Note: Abstract Data Type (ADT)">
      <h4 className="font-bold text-foreground mt-2">Abstract Data Type (ADT)</h4>
      <p>An <strong>Abstract Data Type (ADT)</strong> is a mathematical model for data types that defines the data type purely by its <strong>behavior</strong> — the set of operations that can be performed on it, the types of parameters those operations accept, and the types of results they return. Crucially, an ADT does not specify <strong>how</strong> these operations are implemented. This separation of interface from implementation is a fundamental principle of software engineering called <strong>abstraction</strong>.</p>
      <p className="mt-2">For example, the Stack ADT specifies operations like push, pop, peek, and isEmpty — but it says nothing about whether the stack is implemented using an array or a linked list. The user of the ADT only needs to know what operations are available, not how they work internally. This allows the implementation to be changed or optimized without affecting the code that uses the ADT.</p>
      <ul className="list-disc pl-5 space-y-1 mt-2">
        <li><strong>Stack ADT:</strong> push, pop, peek, isEmpty — implemented via array or linked list</li>
        <li><strong>Queue ADT:</strong> enqueue, dequeue, front, isEmpty — implemented via array, circular array, or linked list</li>
        <li><strong>List ADT:</strong> insert, delete, search, traverse — implemented via array or linked list</li>
      </ul>
      <p className="mt-2">ADTs provide abstraction, encapsulation, modularity, and allow changing implementation without affecting dependent code.</p>
    </QuestionCard>

    <QuestionCard priority="MEDIUM" marks="5 Marks" years="2023·2024 Fall" title="Short Note: Divide and Conquer">
      <h4 className="font-bold text-foreground mt-2">Divide and Conquer</h4>
      <p><strong>Divide and Conquer</strong> is a fundamental algorithm design paradigm that solves complex problems by breaking them into smaller, independent sub-problems of the same type, solving each sub-problem recursively, and combining their solutions to produce the answer to the original problem. It is most effective when the sub-problems are roughly equal in size and can be solved independently.</p>
      <ul className="list-disc pl-5 space-y-1 mt-2">
        <li><strong>Divide:</strong> Break the problem into two or more smaller sub-problems of the same type</li>
        <li><strong>Conquer:</strong> Solve each sub-problem recursively; base case solves directly</li>
        <li><strong>Combine:</strong> Merge the sub-problem solutions into the final answer</li>
        <li><strong>Examples:</strong> Merge Sort O(n log n), Quick Sort O(n log n avg), Binary Search O(log n)</li>
        <li><strong>vs DP:</strong> D&C has independent sub-problems; DP has overlapping sub-problems that are stored to avoid recomputation</li>
      </ul>
    </QuestionCard>

    <QuestionCard priority="MEDIUM" marks="5 Marks" years="2022·2024 Fall" title="Short Note: Dynamic Programming">
      <h4 className="font-bold text-foreground mt-2">Dynamic Programming (DP)</h4>
      <p><strong>Dynamic Programming</strong> is an optimization technique for solving problems that exhibit two properties: <strong>overlapping subproblems</strong> (the same subproblems are solved repeatedly) and <strong>optimal substructure</strong> (the optimal solution to the problem can be constructed from optimal solutions of its subproblems). DP avoids redundant computation by storing the results of subproblems and reusing them.</p>
      <ul className="list-disc pl-5 space-y-1 mt-2">
        <li><strong>Memoization (Top-Down):</strong> Recursive approach with a cache — solve subproblems on demand and store results</li>
        <li><strong>Tabulation (Bottom-Up):</strong> Iterative approach — fill a table starting from base cases, building up to the final answer</li>
        <li><strong>Examples:</strong> Fibonacci (reduces O(2ⁿ) to O(n)), Longest Common Subsequence, 0/1 Knapsack, Matrix Chain Multiplication</li>
        <li>Transforms exponential-time algorithms into polynomial-time by eliminating redundant computation</li>
      </ul>
    </QuestionCard>

    <QuestionCard priority="MEDIUM" marks="5 Marks" years="2023·2022" title="Short Note: Backtracking Algorithm">
      <h4 className="font-bold text-foreground mt-2">Backtracking</h4>
      <p><strong>Backtracking</strong> is a systematic algorithmic technique for finding solutions to computational problems by building candidates incrementally, one piece at a time, and <strong>abandoning</strong> ("backtracking" from) a candidate as soon as it is determined that it cannot possibly lead to a valid complete solution. It explores the solution space using a depth-first search approach, but unlike brute force, it prunes invalid branches early — making it significantly more efficient in practice.</p>
      <ul className="list-disc pl-5 space-y-1 mt-2">
        <li>Uses DFS-like exploration of the solution space tree</li>
        <li>At each step: if the current partial solution is valid, extend it; if not, backtrack to the previous step and try the next option</li>
        <li><strong>Examples:</strong> N-Queens problem (placing N queens on N×N board without conflicts), Sudoku solver, graph coloring, subset sum problem</li>
        <li>Time complexity varies by problem; often exponential but much faster than brute force due to pruning</li>
      </ul>
    </QuestionCard>

    <QuestionCard priority="LOW" marks="5 Marks" years="2023" title="Short Note: Bucket Sort">
      <h4 className="font-bold text-foreground mt-2">Bucket Sort</h4>
      <p><strong>Bucket Sort</strong> is a distribution-based sorting algorithm that works by distributing elements into a number of "buckets" based on their values, sorting each bucket individually (usually with insertion sort or another simple algorithm), and then concatenating all the buckets in order. It is not a comparison-based sort and works best when the input is uniformly distributed over a known range.</p>
      <ul className="list-disc pl-5 space-y-1 mt-2">
        <li>Best for uniformly distributed numeric data within a known range</li>
        <li>Time: O(n + k) average case, O(n²) worst case (all elements in one bucket)</li>
        <li>Space: O(n + k) where k is the number of buckets</li>
        <li>Not comparison-based — can achieve better than O(n log n) in favorable cases</li>
      </ul>
    </QuestionCard>

    <QuestionCard priority="LOW" marks="5 Marks" years="2023" title="Short Note: Splay Tree">
      <h4 className="font-bold text-foreground mt-2">Splay Tree</h4>
      <p>A <strong>Splay Tree</strong> is a self-adjusting binary search tree that automatically moves recently accessed elements to the root of the tree through a series of rotations called <strong>splaying</strong>. Unlike AVL trees, splay trees do not store any balance factor — they achieve balance through the splaying operation itself. The key idea is that frequently accessed elements stay near the top of the tree, providing faster access for repeated queries.</p>
      <ul className="list-disc pl-5 space-y-1 mt-2">
        <li>No explicit balance factor stored — simpler structure than AVL</li>
        <li>Amortized O(log n) for search, insert, and delete operations</li>
        <li>Uses three types of rotations: <strong>Zig</strong> (single rotation), <strong>Zig-Zig</strong> (two same-direction rotations), and <strong>Zig-Zag</strong> (two opposite-direction rotations)</li>
        <li>Good for caches, memory allocators, and situations where some elements are accessed much more frequently than others</li>
      </ul>
    </QuestionCard>
  </section>
);

export default ShortNotesSection;

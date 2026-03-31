import QuestionCard from "@/components/QuestionCard";
import UnitHeader from "@/components/UnitHeader";
import CodeBlock from "@/components/CodeBlock";
import TipBox from "@/components/TipBox";

const Unit1Section = () => (
  <section id="unit1">
    <UnitHeader badge="U1" badgeColor="hsl(210,70%,50%)" title="Introduction to Data Structures and Algorithms" subtitle="7 hrs · ADTs · Classification · Algorithm Analysis · Time Complexity · Asymptotic Notation" />

    <QuestionCard priority="HIGH" marks="7–8 Marks" years="2022·2023·2024·2025" title="What is Data Structure? Explain types with examples." questionText="What is data structure? Explain the types of data structure with examples. / Why is the study of Data Structures and Algorithms essential?">
      <h4 className="font-bold text-foreground mt-2">What is a Data Structure?</h4>
      <p>A <strong>data structure</strong> is a systematic way of organizing, storing, and managing data in a computer so that it can be accessed, modified, and processed efficiently. It defines both the logical relationship between individual data elements and the set of operations that can be performed on the stored data. Without proper data structures, even simple programs become slow, consume excessive memory, and are difficult to maintain or scale.</p>
      <p className="mt-2">The study of data structures is essential because the choice of data structure directly impacts the performance of an algorithm. For example, searching in an array takes O(n) time, but in a balanced BST it takes O(log n). Choosing the right data structure means faster programs, less memory usage, and cleaner code.</p>

      <h4 className="font-bold text-foreground mt-4">Classification of Data Structures</h4>
      <CodeBlock>{`Data Structures
├── Primitive
│   ├── int, float, char, boolean
│
└── Non-Primitive
    ├── Linear
    │   ├── Array
    │   ├── Linked List
    │   ├── Stack
    │   └── Queue
    │
    └── Non-Linear
        ├── Tree
        ├── Graph
        └── Hash Table`}</CodeBlock>

      <h4 className="font-bold text-foreground mt-4">1. Linear Data Structures</h4>
      <p>In linear data structures, elements are arranged in a sequential, one-after-another order. Each element has a unique predecessor and successor (except the first and last elements). They are easier to implement and traverse.</p>
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>Array:</strong> A fixed-size collection of elements of the same data type stored in contiguous memory locations. Elements are accessed using an index, which allows O(1) random access. However, insertion and deletion are costly (O(n)) because elements must be shifted. Example: storing marks of 50 students.</li>
        <li><strong>Linked List:</strong> A dynamic collection of nodes where each node contains data and a pointer to the next node. Unlike arrays, linked lists do not require contiguous memory and can grow or shrink at runtime. Insertion and deletion are efficient (O(1) at head), but random access is not possible — you must traverse from the head.</li>
        <li><strong>Stack:</strong> A LIFO (Last In, First Out) structure where elements are added and removed from the same end called the "top." Used in function call management, expression evaluation, undo operations, and backtracking algorithms.</li>
        <li><strong>Queue:</strong> A FIFO (First In, First Out) structure where elements are added at the rear and removed from the front. Used in CPU scheduling, print job management, and BFS graph traversal.</li>
      </ul>

      <h4 className="font-bold text-foreground mt-4">2. Non-Linear Data Structures</h4>
      <p>In non-linear data structures, elements are not arranged sequentially. One element can be connected to multiple elements, forming hierarchical or network-like relationships. They are used to represent complex real-world relationships.</p>
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>Tree:</strong> A hierarchical structure consisting of nodes connected by edges. It has a root node at the top, and every other node has exactly one parent. Trees are used for hierarchical data like file systems, organization charts, and database indexing. Examples: Binary Tree, BST, AVL Tree, B-Tree.</li>
        <li><strong>Graph:</strong> A collection of vertices (nodes) connected by edges. Unlike trees, graphs can have cycles, multiple paths between nodes, and no strict hierarchy. Used for modeling networks, maps, social media connections, and routing algorithms.</li>
        <li><strong>Hash Table:</strong> A data structure that maps keys to values using a hash function. It provides O(1) average-case access time for search, insert, and delete operations.</li>
      </ul>

      <TipBox>This question appears every single year. Always draw the classification tree diagram — examiners expect it. Mention at least 2 examples for each category. If asked about ADT separately — an ADT specifies what operations are performed (push, pop, enqueue) but not how they are implemented internally.</TipBox>
    </QuestionCard>

    <QuestionCard priority="HIGH" marks="7–8 Marks" years="2022·2023·2024·2025" title="Define Algorithm. Explain Time Complexity and Asymptotic Notation." questionText="What do you mean by complexity of algorithms? Why do we need asymptotic notation? Describe about Big O notation with example.">
      <h4 className="font-bold text-foreground mt-2">What is an Algorithm?</h4>
      <p>An <strong>algorithm</strong> is a finite, well-defined sequence of instructions designed to solve a specific computational problem. It takes some input, processes it through a series of clearly defined steps, and produces a meaningful output. An algorithm must always terminate after a finite number of steps — it cannot run forever.</p>

      <h4 className="font-bold text-foreground mt-4">Key Characteristics of an Algorithm</h4>
      <ul className="list-disc pl-5 space-y-1">
        <li><strong>Finiteness:</strong> Must terminate after a finite number of steps — no infinite loops</li>
        <li><strong>Definiteness:</strong> Each step must be precisely and unambiguously defined</li>
        <li><strong>Input:</strong> Takes zero or more well-defined inputs</li>
        <li><strong>Output:</strong> Produces at least one meaningful output</li>
        <li><strong>Effectiveness:</strong> Each step must be basic enough to be carried out in finite time</li>
      </ul>

      <h4 className="font-bold text-foreground mt-4">What is Algorithm Complexity?</h4>
      <p><strong>Algorithm complexity</strong> measures the amount of resources (time and space) an algorithm requires as the input size grows. <strong>Time complexity</strong> counts the number of basic operations performed as a function of input size n. <strong>Space complexity</strong> measures the amount of memory used. We analyze complexity to compare algorithms and choose the most efficient one for a given problem.</p>

      <h4 className="font-bold text-foreground mt-4">Why Do We Need Asymptotic Notation?</h4>
      <p>Exact operation counts vary by hardware, language, and implementation. Asymptotic notation provides a hardware-independent way to describe how an algorithm's performance scales with input size. It focuses on the growth rate rather than exact numbers, making it possible to compare algorithms fairly regardless of the machine they run on.</p>

      <h4 className="font-bold text-foreground mt-4">Asymptotic Notations</h4>
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>Big O (O) — Upper Bound (Worst Case):</strong> Describes the maximum time an algorithm can take. If we say an algorithm is O(n²), it means in the worst scenario, the running time will not exceed n² operations (up to a constant factor). This is the most commonly used notation because we want to guarantee performance.</li>
        <li><strong>Big Omega (Ω) — Lower Bound (Best Case):</strong> Describes the minimum time an algorithm will take. For example, Ω(n) for linear search means even in the best case, we need at least n operations (in general).</li>
        <li><strong>Big Theta (Θ) — Tight Bound (Average Case):</strong> When both upper and lower bounds are the same order, we use Θ. For example, Merge Sort is Θ(n log n) because it takes n log n time in all cases.</li>
      </ul>

      <CodeBlock>{`// Example: Analyzing time complexity step by step
int a = 0;                    // O(1) — runs once
for (i = 0; i < N; i++)       // O(N) — outer loop runs N times
    for (j = N; j > i; j--)   // O(N) — inner loop runs ~N times
        a = a + i + j;        // O(1) — constant work inside

// Total: O(1) + O(N) × O(N) × O(1) = O(N²)

// Common complexities (best to worst):
// O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ) < O(n!)
//
// O(1)       — Array access by index
// O(log n)   — Binary Search
// O(n)       — Linear Search
// O(n log n) — Merge Sort, Quick Sort (avg)
// O(n²)      — Bubble Sort, Selection Sort
// O(2ⁿ)      — Recursive Fibonacci (without DP)`}</CodeBlock>

      <TipBox>Always show step-by-step analysis of the given code. Count loops: single loop = O(n), nested loop = O(n²), halving loop = O(log n). If they give specific code, compute T(n) for best, worst, and average cases. Know the complexity hierarchy by heart — it's asked every year.</TipBox>
    </QuestionCard>

    <QuestionCard priority="MEDIUM" marks="7–8 Marks" years="2024 Fall·2025" title="Explain Divide & Conquer and Dynamic Programming approaches." questionText="Explain Divide & Conquer and Dynamic Programming approaches. Illustrate your answer with suitable algorithmic examples.">
      <h4 className="font-bold text-foreground mt-2">Divide and Conquer</h4>
      <p><strong>Divide and Conquer</strong> is a powerful algorithm design strategy that solves a large problem by breaking it into smaller, independent sub-problems of the same type, solving each sub-problem recursively, and then combining their results to produce the final answer. The key idea is that smaller problems are easier to solve, and their solutions can be combined efficiently.</p>
      <p className="mt-2">It works in three steps:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li><strong>Divide:</strong> Break the problem into two or more smaller sub-problems</li>
        <li><strong>Conquer:</strong> Solve each sub-problem recursively (base case: problem is small enough to solve directly)</li>
        <li><strong>Combine:</strong> Merge the solutions of sub-problems to get the final answer</li>
      </ul>
      <p className="mt-2"><strong>Examples:</strong> Merge Sort (divide array, sort halves, merge), Quick Sort (partition around pivot, sort halves), Binary Search (halve search space each step).</p>

      <CodeBlock>{`// Merge Sort — Classic Divide & Conquer example
MergeSort(arr, low, high):
    if low < high:
        mid = (low + high) / 2
        MergeSort(arr, low, mid)      // Divide left half
        MergeSort(arr, mid+1, high)   // Divide right half
        Merge(arr, low, mid, high)    // Combine sorted halves

// Time: O(n log n) — always  |  Space: O(n)
// Divides into log n levels, each level does O(n) merging work`}</CodeBlock>

      <h4 className="font-bold text-foreground mt-4">Dynamic Programming (DP)</h4>
      <p><strong>Dynamic Programming</strong> is an optimization technique used for problems that have two key properties: <strong>overlapping subproblems</strong> (the same subproblems are solved multiple times) and <strong>optimal substructure</strong> (the optimal solution can be built from optimal solutions of subproblems). Instead of recomputing the same result again and again, DP stores the result the first time and reuses it — this is called <strong>memoization</strong>.</p>
      <p className="mt-2">DP can be implemented in two ways: <strong>Top-Down (Memoization)</strong> — recursive with a cache, and <strong>Bottom-Up (Tabulation)</strong> — iterative, filling a table from base cases upward.</p>
      <p className="mt-2"><strong>Examples:</strong> Fibonacci sequence, Longest Common Subsequence, 0/1 Knapsack problem, Matrix Chain Multiplication.</p>

      <CodeBlock>{`// Fibonacci — WITHOUT DP: O(2ⁿ) — very slow!
fib(5) calls fib(4)+fib(3), fib(4) calls fib(3)+fib(2)...
// fib(3) is computed multiple times — wasted work!

// Fibonacci — WITH DP (Memoization): O(n)
int memo[100] = {0};
int fib(int n) {
    if (n <= 1) return n;
    if (memo[n] != 0) return memo[n];  // already computed
    memo[n] = fib(n-1) + fib(n-2);    // store result
    return memo[n];
}
// Each subproblem solved only ONCE — stored and reused`}</CodeBlock>

      <h4 className="font-bold text-foreground mt-4">Key Differences</h4>
      <ul className="list-disc pl-5 space-y-1">
        <li><strong>D&C:</strong> Sub-problems are independent (no overlap). Example: left and right halves in Merge Sort never share elements.</li>
        <li><strong>DP:</strong> Sub-problems overlap (same sub-problem appears multiple times). Example: fib(3) is needed by both fib(4) and fib(5).</li>
        <li><strong>D&C:</strong> Uses recursion without storing results. <strong>DP:</strong> Stores results to avoid recomputation.</li>
      </ul>

      <TipBox>The key exam differentiator: D&C = independent subproblems, DP = overlapping subproblems + storage. Always give Merge Sort as a D&C example and Fibonacci as a DP example. Mention both memoization and tabulation approaches for DP.</TipBox>
    </QuestionCard>

    <QuestionCard priority="MEDIUM" marks="7 Marks" years="2022·2024 Spr" title="What is an Abstract Data Type (ADT)? Explain with examples." questionText="What is ADT? Explain with suitable examples showing difference between ADT and data structure.">
      <h4 className="font-bold text-foreground mt-2">Abstract Data Type (ADT)</h4>
      <p>An <strong>Abstract Data Type (ADT)</strong> is a theoretical concept that defines a data type purely by its behavior — that is, the set of operations that can be performed on it, the types of inputs those operations accept, and the outputs they produce. Importantly, an ADT does <strong>not</strong> specify how these operations are implemented internally. It separates the "what" from the "how," providing a clean abstraction layer.</p>
      <p className="mt-2">Think of an ADT like a vending machine: you know you can insert money and press a button to get a drink (the operations), but you don't need to know the internal mechanics of how it works. This abstraction allows programmers to change the underlying implementation without affecting the code that uses the ADT.</p>

      <h4 className="font-bold text-foreground mt-4">Common ADT Examples</h4>
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>Stack ADT:</strong> Operations — push(item), pop(), peek(), isEmpty(). Can be implemented using an array or a linked list. The user only knows the operations; the implementation is hidden.</li>
        <li><strong>Queue ADT:</strong> Operations — enqueue(item), dequeue(), front(), isEmpty(). Implementation choices include array, circular array, or linked list.</li>
        <li><strong>List ADT:</strong> Operations — insert(pos, item), delete(pos), get(pos), size(). Can be implemented as an array list or a linked list.</li>
      </ul>

      <h4 className="font-bold text-foreground mt-4">ADT vs Data Structure</h4>
      <p><strong>ADT</strong> is the logical description (what operations are available), while a <strong>Data Structure</strong> is the actual implementation (how those operations are coded in memory). For example, "Stack" as an ADT defines push/pop/peek; "Stack using Array" or "Stack using Linked List" is the data structure that implements that ADT.</p>

      <TipBox>ADT is a very popular short note and definition question. Remember: ADT = interface (what), Data Structure = implementation (how). Always give Stack and Queue as examples with their operations listed.</TipBox>
    </QuestionCard>
  </section>
);

export default Unit1Section;

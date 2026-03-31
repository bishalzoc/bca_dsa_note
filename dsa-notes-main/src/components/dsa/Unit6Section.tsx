import QuestionCard from "@/components/QuestionCard";
import UnitHeader from "@/components/UnitHeader";
import CodeBlock from "@/components/CodeBlock";
import TipBox from "@/components/TipBox";

const Unit6Section = () => (
  <section id="unit6">
    <UnitHeader badge="U6" badgeColor="hsl(190,70%,45%)" title="Searching Algorithm and Hashing" subtitle="4 hrs · Linear Search · Binary Search · Hash Functions · Collision Resolution" />

    <QuestionCard priority="HIGH" marks="7–8 Marks" years="2022·2023·2024·2025" title="What is Hashing? Explain Linear Probing and Separate Chaining." questionText="What is perfect hashing? Explain linear probing and Separate chaining, providing suitable examples. / Construct a hash table of size 11 using h(k) = k % 11.">
      <h4 className="font-bold text-foreground mt-2">Hashing</h4>
      <p><strong>Hashing</strong> is a technique that maps data of arbitrary size to fixed-size values (called hash values or hash codes) using a mathematical function called a <strong>hash function</strong>. A <strong>hash table</strong> is a data structure that uses hashing to store key-value pairs, where the hash function determines the index (slot) in the table where a value should be stored. The main advantage of hashing is that it provides O(1) average-case time for search, insert, and delete operations — much faster than arrays (O(n)) or BSTs (O(log n)).</p>
      <p className="mt-2">A <strong>perfect hash function</strong> maps every key to a unique slot with no collisions. In practice, perfect hashing is rare, so we use collision resolution techniques to handle cases where two different keys hash to the same index.</p>

      <h4 className="font-bold text-foreground mt-4">Hash Function</h4>
      <p>The most common hash function is the <strong>division method</strong>: <strong>h(k) = k % table_size</strong>, where k is the key. A good hash function distributes keys uniformly across the table to minimize collisions. The table size should ideally be a prime number for better distribution.</p>

      <h4 className="font-bold text-foreground mt-4">Collision</h4>
      <p>A <strong>collision</strong> occurs when two different keys produce the same hash value — that is, h(k1) = h(k2) but k1 ≠ k2. Since multiple keys can map to the same slot, we need strategies to handle collisions. The two main approaches are <strong>Separate Chaining</strong> and <strong>Open Addressing</strong> (Linear Probing).</p>

      <h4 className="font-bold text-foreground mt-4">1. Separate Chaining (Open Hashing)</h4>
      <p>In separate chaining, each slot in the hash table points to a <strong>linked list</strong>. When a collision occurs, the new element is simply appended to the linked list at that slot. This method never runs out of space (the linked lists can grow as needed), but performance degrades if many elements hash to the same slot.</p>

      <CodeBlock>{`Example: Keys = {5, 40, 18, 22, 16, 30, 27}
Hash function: h(k) = k % 11, Table size = 11

h(5)  = 5   → slot 5
h(40) = 7   → slot 7
h(18) = 7   → slot 7 (collision! chain with 40)
h(22) = 0   → slot 0
h(16) = 5   → slot 5 (collision! chain with 5)
h(30) = 8   → slot 8
h(27) = 5   → slot 5 (collision! chain with 5,16)

Hash Table (Separate Chaining):
[0] → 22
[1] → NULL
[2] → NULL
[3] → NULL
[4] → NULL
[5] → 5 → 16 → 27
[6] → NULL
[7] → 40 → 18
[8] → 30
[9] → NULL
[10]→ NULL`}</CodeBlock>

      <h4 className="font-bold text-foreground mt-4">2. Linear Probing (Open Addressing)</h4>
      <p>In linear probing, all elements are stored directly in the hash table (no linked lists). If a collision occurs at index i, we probe the next slot sequentially: try (i+1) % size, then (i+2) % size, and so on until an empty slot is found. This method is simple but can cause <strong>clustering</strong> — groups of consecutive occupied slots that grow larger over time, reducing performance.</p>

      <CodeBlock>{`Same keys: {5, 40, 18, 22, 16, 30, 27}, h(k) = k % 11

h(5)  = 5   → slot 5 ✓
h(40) = 7   → slot 7 ✓
h(18) = 7   → collision! try 8 ✓
h(22) = 0   → slot 0 ✓
h(16) = 5   → collision! try 6 ✓
h(30) = 8   → collision! try 9 ✓
h(27) = 5   → collision! 6→collision! 7→collision! 
              8→collision! 9→collision! try 10 ✓

Hash Table (Linear Probing):
[0]  22
[1]  __
[2]  __
[3]  __
[4]  __
[5]  5
[6]  16
[7]  40
[8]  18
[9]  30
[10] 27`}</CodeBlock>

      <h4 className="font-bold text-foreground mt-4">Load Factor</h4>
      <p><strong>Load Factor (α) = n / m</strong> where n = number of keys stored and m = table size. A high load factor means more collisions and slower operations. When α exceeds a threshold (typically 0.7), the table is <strong>rehashed</strong> — a new larger table is created and all existing keys are re-inserted using the hash function.</p>

      <TipBox>Hashing is asked EVERY year — it's one of the most predictable questions. Practice both methods with numerical examples. Always show: (1) the hash function computation for each key, (2) collision detection and resolution step by step, and (3) the final table state. Also know Quadratic Probing: probe at (i+1²), (i+2²), (i+3²)... — it reduces clustering.</TipBox>
    </QuestionCard>

    <QuestionCard priority="MEDIUM" marks="5–7 Marks" years="2023·2025" title="Explain Linear Search and Binary Search with examples." questionText="Explain binary search algorithm with an example. / Compare linear and binary search.">
      <h4 className="font-bold text-foreground mt-2">Linear Search</h4>
      <p><strong>Linear Search</strong> (also called Sequential Search) is the simplest searching algorithm. It works by checking each element of the array one by one, starting from the first element, until the target is found or the end of the array is reached. It does not require the array to be sorted and works on any collection of data.</p>
      <p className="mt-2">Time complexity: O(n) in the worst and average case, O(1) in the best case (target is the first element). Space: O(1).</p>

      <h4 className="font-bold text-foreground mt-4">Binary Search</h4>
      <p><strong>Binary Search</strong> is a highly efficient searching algorithm that works only on <strong>sorted arrays</strong>. It repeatedly divides the search interval in half by comparing the target value with the middle element. If the target equals the middle element, the search is successful. If the target is less, search the left half; if greater, search the right half. This halving process continues until the target is found or the interval becomes empty.</p>
      <p className="mt-2">Binary Search eliminates half of the remaining elements in each step, making it dramatically faster than linear search for large datasets. For example, searching in 1 million sorted elements takes at most 20 comparisons with Binary Search, compared to up to 1 million comparisons with Linear Search.</p>

      <CodeBlock>{`int binarySearch(int arr[], int n, int target) {
    int low = 0, high = n - 1;
    while (low <= high) {
        int mid = (low + high) / 2;
        if (arr[mid] == target) return mid;      // Found!
        else if (arr[mid] < target) low = mid + 1;  // Search right
        else high = mid - 1;                         // Search left
    }
    return -1;  // Not found
}

Example: arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]
Search for 23:

Step 1: low=0, high=9, mid=4 → arr[4]=16 < 23 → low=5
Step 2: low=5, high=9, mid=7 → arr[7]=56 > 23 → high=6
Step 3: low=5, high=6, mid=5 → arr[5]=23 ✓ FOUND at index 5!

Only 3 comparisons instead of 6 (linear search would check 2,5,8,12,16,23)

Time: O(log n)  |  Space: O(1) iterative, O(log n) recursive
PREREQUISITE: Array MUST be sorted`}</CodeBlock>

      <h4 className="font-bold text-foreground mt-4">Comparison</h4>
      <ul className="list-disc pl-5 space-y-1">
        <li><strong>Time:</strong> Linear = O(n), Binary = O(log n)</li>
        <li><strong>Prerequisite:</strong> Linear works on unsorted data; Binary requires sorted data</li>
        <li><strong>Approach:</strong> Linear checks sequentially; Binary halves search space</li>
        <li><strong>Best for:</strong> Linear for small/unsorted data; Binary for large sorted data</li>
      </ul>

      <TipBox>Binary Search is commonly combined with sorting questions. Always mention the prerequisite of a sorted array — this is a key exam point. Show the step-by-step trace with low, high, and mid values at each step.</TipBox>
    </QuestionCard>

    <QuestionCard priority="LOW" marks="5 Marks" years="2024" title="What is Quadratic Probing? How does it differ from Linear Probing?" questionText="Explain quadratic probing as a collision resolution technique.">
      <h4 className="font-bold text-foreground mt-2">Quadratic Probing</h4>
      <p><strong>Quadratic Probing</strong> is a collision resolution technique in open addressing where, instead of probing the next slot linearly (i+1, i+2, i+3...), the probe sequence uses quadratic increments: try slots at (h(k) + 1²) % m, (h(k) + 2²) % m, (h(k) + 3²) % m, and so on. This reduces the <strong>primary clustering</strong> problem seen in linear probing, where long chains of occupied slots form.</p>
      <p className="mt-2">However, quadratic probing can lead to <strong>secondary clustering</strong> (keys with the same hash value follow the same probe sequence) and may not probe all slots in the table, so it doesn't guarantee finding an empty slot even if one exists (unless the table size is prime and less than half full).</p>

      <TipBox>Know the formula: probe position = (h(k) + i²) % m for i = 0, 1, 2, 3... Linear probing causes primary clustering; quadratic probing reduces it but can cause secondary clustering. Double hashing eliminates both types of clustering.</TipBox>
    </QuestionCard>
  </section>
);

export default Unit6Section;

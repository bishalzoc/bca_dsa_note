import QuestionCard from "@/components/QuestionCard";
import UnitHeader from "@/components/UnitHeader";
import CodeBlock from "@/components/CodeBlock";
import TipBox from "@/components/TipBox";

const Unit5Section = () => (
  <section id="unit5">
    <UnitHeader badge="U5" badgeColor="hsl(38,90%,50%)" title="Sorting" subtitle="6 hrs · Bubble · Selection · Insertion · Merge · Quick · Radix · Heap Sort" />

    <QuestionCard priority="HIGH" marks="7–8 Marks" years="2022·2023·2024·2025" title="Perform Quick Sort on given array. Write algorithm and time complexity." questionText="Perform a quicksort algorithm on the following array of numbers: (68, 34, 21, 43, 7, 18, 8, 56, 28, 17).">
      <h4 className="font-bold text-foreground mt-2">Quick Sort</h4>
      <p><strong>Quick Sort</strong> is one of the most efficient and widely used sorting algorithms, based on the <strong>Divide and Conquer</strong> strategy. It works by selecting a <strong>pivot element</strong> from the array, then rearranging (partitioning) the remaining elements so that all elements smaller than the pivot go to its left, and all elements greater go to its right. After partitioning, the pivot is in its final sorted position. The algorithm then recursively sorts the left and right sub-arrays.</p>
      <p className="mt-2">Quick Sort is preferred in practice because it has excellent average-case performance O(n log n), works in-place (no extra array needed), and has good cache performance. However, its worst case is O(n²) when the pivot is consistently the smallest or largest element (e.g., when the array is already sorted).</p>

      <CodeBlock>{`Algorithm:
QuickSort(arr, low, high):
    if low < high:
        pivotIndex = Partition(arr, low, high)
        QuickSort(arr, low, pivotIndex - 1)   // Sort left of pivot
        QuickSort(arr, pivotIndex + 1, high)  // Sort right of pivot

Partition(arr, low, high):
    pivot = arr[high]       // Choose last element as pivot
    i = low - 1             // Index of smaller element
    for j = low to high - 1:
        if arr[j] <= pivot:
            i++
            swap(arr[i], arr[j])
    swap(arr[i+1], arr[high])  // Place pivot in correct position
    return i + 1`}</CodeBlock>

      <CodeBlock>{`Example: Sort [68, 34, 21, 43, 7, 18, 8, 56, 28, 17]

Pass 1: pivot = 17
  Compare each element with 17:
  7 ≤ 17 → swap; 8 ≤ 17 → swap
  After partition: [8, 7] [17] [43, 68, 18, 34, 56, 28, 21]
  
Pass 2 (left): [8, 7] → pivot=7 → [7, 8] — sorted
Pass 2 (right): [43, 68, 18, 34, 56, 28, 21] → pivot=21
  After partition: [18] [21] [68, 34, 56, 28, 43]

Pass 3 (right sub): [68, 34, 56, 28, 43] → pivot=43
  After partition: [34, 28] [43] [68, 56]

Continue until all sub-arrays have ≤ 1 elements...

Final: [7, 8, 17, 18, 21, 28, 34, 43, 56, 68]

Time Complexity:
  Best/Average: O(n log n) — pivot divides array roughly in half
  Worst (already sorted): O(n²) — pivot always at extreme end
Space: O(log n) — recursive call stack`}</CodeBlock>

      <TipBox>Quick Sort is the MOST asked sorting question — appears every year. Always show the partition step by step with the array state after each partition. Use the last element as pivot unless the question states otherwise. Mention that worst case O(n²) occurs with sorted input and can be avoided by choosing a random pivot.</TipBox>
    </QuestionCard>

    <QuestionCard priority="HIGH" marks="7 Marks" years="2024 Fall·2025" title="Write algorithm for Selection Sort / Insertion Sort with time complexity." questionText="Write an algorithm/function to sort the below array using selection sort: 12, 8, 9, 3, 11, 5, 4. And also write its time complexity.">
      <h4 className="font-bold text-foreground mt-2">Selection Sort</h4>
      <p><strong>Selection Sort</strong> works by repeatedly finding the <strong>minimum element</strong> from the unsorted portion of the array and placing it at the beginning of the unsorted portion. In each pass, it selects the smallest remaining element and swaps it with the element at the current position. After i passes, the first i elements are in their final sorted positions.</p>
      <p className="mt-2">Selection Sort is simple to understand and implement, but it always performs O(n²) comparisons regardless of the input order. It is <strong>not adaptive</strong> (doesn't take advantage of partially sorted data) and <strong>not stable</strong> (may change the relative order of equal elements).</p>

      <CodeBlock>{`void selectionSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        int minIdx = i;
        for (int j = i + 1; j < n; j++)
            if (arr[j] < arr[minIdx])
                minIdx = j;
        swap(&arr[i], &arr[minIdx]);
    }
}

Example: [12, 8, 9, 3, 11, 5, 4]
Pass 1: min=3 at idx 3  → [3, 8, 9, 12, 11, 5, 4]
Pass 2: min=4 at idx 6  → [3, 4, 9, 12, 11, 5, 8]
Pass 3: min=5 at idx 5  → [3, 4, 5, 12, 11, 9, 8]
Pass 4: min=8 at idx 6  → [3, 4, 5, 8, 11, 9, 12]
Pass 5: min=9 at idx 5  → [3, 4, 5, 8, 9, 11, 12]
Pass 6: already sorted  → [3, 4, 5, 8, 9, 11, 12]

Time: O(n²) for ALL cases  |  Space: O(1)  |  Not Stable`}</CodeBlock>

      <h4 className="font-bold text-foreground mt-4">Insertion Sort</h4>
      <p><strong>Insertion Sort</strong> builds the final sorted array one element at a time. It works by taking each element and inserting it into its correct position within the already-sorted portion of the array. Think of it like sorting playing cards in your hand — you pick up each new card and slide it into the right spot among the cards you've already sorted.</p>
      <p className="mt-2">Insertion Sort is <strong>adaptive</strong> — it performs very well on nearly sorted data with O(n) best-case time. It is also <strong>stable</strong> (preserves the relative order of equal elements) and works well for small arrays.</p>

      <CodeBlock>{`void insertionSort(int arr[], int n) {
    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];   // shift larger elements right
            j--;
        }
        arr[j + 1] = key;          // insert key at correct position
    }
}

Time: Best O(n) — nearly sorted | Average/Worst O(n²)
Space: O(1) | Stable: Yes | Adaptive: Yes`}</CodeBlock>

      <TipBox>Show each pass clearly with array state. Key difference: Selection Sort always does O(n²) comparisons; Insertion Sort is adaptive — O(n) for nearly sorted data. Selection Sort does fewer swaps (exactly n−1); Insertion Sort does more element movements. Know these differences for exam comparison questions.</TipBox>
    </QuestionCard>

    <QuestionCard priority="MEDIUM" marks="8 Marks" years="2022·2025" title="Explain Merge Sort using Divide and Conquer." questionText="Explain how divide and conquer strategy is used to sort a list of data using Merge Sort.">
      <h4 className="font-bold text-foreground mt-2">Merge Sort</h4>
      <p><strong>Merge Sort</strong> is a stable, comparison-based sorting algorithm that uses the <strong>Divide and Conquer</strong> strategy. It works by dividing the array into two halves, recursively sorting each half, and then merging the two sorted halves back into a single sorted array. Unlike Quick Sort, Merge Sort guarantees O(n log n) time complexity in <strong>all cases</strong> (best, average, and worst), making it highly predictable and reliable.</p>
      <p className="mt-2">The trade-off is that Merge Sort requires O(n) additional space for the temporary arrays used during merging. This makes it less space-efficient than Quick Sort, which sorts in-place.</p>

      <CodeBlock>{`MergeSort(arr, l, r):
    if l < r:
        mid = (l + r) / 2
        MergeSort(arr, l, mid)       // Sort left half
        MergeSort(arr, mid+1, r)     // Sort right half
        Merge(arr, l, mid, r)        // Merge sorted halves

Merge(arr, l, mid, r):
    Create temp arrays L[] and R[]
    Copy arr[l..mid] to L[], arr[mid+1..r] to R[]
    Compare elements of L[] and R[] one by one
    Place the smaller element back into arr[]
    Copy remaining elements (if any)

Example: [38, 27, 43, 3, 9, 82, 10]
Split: [38,27,43,3] [9,82,10]
Split: [38,27] [43,3] [9,82] [10]
Split: [38] [27] [43] [3] [9] [82] [10]
Merge: [27,38] [3,43] [9,82] [10]
Merge: [3,27,38,43] [9,10,82]
Merge: [3,9,10,27,38,43,82]

Time: O(n log n) — ALWAYS  |  Space: O(n)  |  Stable: Yes`}</CodeBlock>

      <TipBox>Merge Sort vs Quick Sort is a common comparison question. Merge Sort: stable, always O(n log n), but uses O(n) extra space. Quick Sort: in-place, O(n log n) average but O(n²) worst case. Use Merge Sort when stability matters or worst-case guarantee is needed.</TipBox>
    </QuestionCard>

    <QuestionCard priority="MEDIUM" marks="7–8 Marks" years="2024 Spr·2022" title="Define Heap. Explain Heap Sort and Priority Queue." questionText="Define external and internal sorting. / What is heap? How is heap used to implement priority queue?">
      <h4 className="font-bold text-foreground mt-2">Internal vs External Sorting</h4>
      <p><strong>Internal Sorting</strong> refers to sorting algorithms where all the data to be sorted fits entirely in the main memory (RAM). Since data access in RAM is fast, these algorithms can randomly access any element efficiently. Most common sorting algorithms — Quick Sort, Merge Sort, Heap Sort, Insertion Sort — are internal sorting algorithms.</p>
      <p className="mt-2"><strong>External Sorting</strong> is used when the data is too large to fit in main memory and must be stored on external storage devices like hard disks. These algorithms minimize disk I/O by reading and writing large blocks of data at a time. The most common external sorting technique is <strong>External Merge Sort</strong>, which divides data into chunks, sorts each chunk in memory, and then merges the sorted chunks.</p>

      <h4 className="font-bold text-foreground mt-4">Heap Data Structure</h4>
      <p>A <strong>Heap</strong> is a specialized complete binary tree that satisfies the <strong>heap property</strong>. In a <strong>Max-Heap</strong>, every parent node is greater than or equal to its children (the root contains the maximum element). In a <strong>Min-Heap</strong>, every parent is less than or equal to its children (the root contains the minimum). Heaps are typically implemented using arrays where for a node at index i: left child is at 2i+1, right child is at 2i+2, and parent is at (i−1)/2.</p>

      <h4 className="font-bold text-foreground mt-4">Heap Sort</h4>
      <CodeBlock>{`Heap Sort Algorithm:
1. Build a Max-Heap from the input array     — O(n)
2. Swap the root (maximum) with the last element
3. Reduce the heap size by 1
4. Heapify the root to restore heap property  — O(log n)
5. Repeat steps 2–4 until heap size is 1

Time: O(n log n) — ALWAYS  |  Space: O(1) — in-place
Stable: No  |  Not adaptive`}</CodeBlock>

      <h4 className="font-bold text-foreground mt-4">Heap as Priority Queue</h4>
      <p>A <strong>Priority Queue</strong> is an ADT where each element has a priority, and elements with higher priority are served first. Heaps provide the most efficient implementation: insertion takes O(log n) and extracting the highest-priority element takes O(log n). Use a Min-Heap for minimum-priority-first (like Dijkstra's algorithm) and Max-Heap for maximum-priority-first.</p>

      <TipBox>Heap Sort is in-place and always O(n log n), but not stable. For Priority Queue implementation: insert = add at the end and "bubble up"; extract = remove root, replace with last, and "heapify down." Both operations are O(log n). Know the array representation of a heap — parent at i, children at 2i+1 and 2i+2.</TipBox>
    </QuestionCard>

    <QuestionCard priority="LOW" marks="5–7 Marks" years="2023" title="Compare all sorting algorithms — when to use which?" questionText="Compare various sorting algorithms based on time complexity, space, and stability.">
      <h4 className="font-bold text-foreground mt-2">Sorting Algorithm Comparison</h4>
      <CodeBlock>{`Algorithm     | Best      | Average   | Worst     | Space | Stable
--------------+-----------+-----------+-----------+-------+-------
Bubble Sort   | O(n)      | O(n²)     | O(n²)     | O(1)  | Yes
Selection Sort| O(n²)     | O(n²)     | O(n²)     | O(1)  | No
Insertion Sort| O(n)      | O(n²)     | O(n²)     | O(1)  | Yes
Merge Sort    | O(n logn) | O(n logn) | O(n logn) | O(n)  | Yes
Quick Sort    | O(n logn) | O(n logn) | O(n²)     | O(logn)| No
Heap Sort     | O(n logn) | O(n logn) | O(n logn) | O(1)  | No`}</CodeBlock>

      <h4 className="font-bold text-foreground mt-4">When to Use Which</h4>
      <ul className="list-disc pl-5 space-y-1">
        <li><strong>Small arrays (n &lt; 20):</strong> Insertion Sort — simple, low overhead</li>
        <li><strong>General purpose:</strong> Quick Sort — fastest in practice on average</li>
        <li><strong>Stability needed:</strong> Merge Sort — stable and O(n log n) guaranteed</li>
        <li><strong>Memory constrained:</strong> Heap Sort — in-place, O(n log n) guaranteed</li>
        <li><strong>Nearly sorted data:</strong> Insertion Sort — O(n) best case</li>
      </ul>

      <TipBox>Memorize this comparison table — it appears in exams as a standalone question or as part of sorting discussions. Know what "stable" means: a stable sort preserves the relative order of equal elements.</TipBox>
    </QuestionCard>
  </section>
);

export default Unit5Section;

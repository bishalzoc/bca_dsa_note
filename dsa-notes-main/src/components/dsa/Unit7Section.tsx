import QuestionCard from "@/components/QuestionCard";
import UnitHeader from "@/components/UnitHeader";
import CodeBlock from "@/components/CodeBlock";
import TipBox from "@/components/TipBox";

const Unit7Section = () => (
  <section id="unit7">
    <UnitHeader badge="U7" badgeColor="hsl(0,70%,50%)" title="Graphs" subtitle="4 hrs · Representations · BFS · DFS · MST (Kruskal/Prim) · Dijkstra's Algorithm" />

    <QuestionCard priority="HIGH" marks="7–8 Marks" years="2022·2023·2024·2025" title="Define Graph. Explain Adjacency Matrix and Adjacency List representations." questionText="What is a graph? Explain different ways to represent a graph in computer memory.">
      <h4 className="font-bold text-foreground mt-2">Graph</h4>
      <p>A <strong>Graph</strong> is a non-linear data structure consisting of a set of <strong>vertices</strong> (also called nodes) and a set of <strong>edges</strong> that connect pairs of vertices. Formally, a graph G is defined as G = (V, E) where V is the set of vertices and E is the set of edges. Graphs are used to model relationships between objects — social networks (users and friendships), maps (cities and roads), computer networks (devices and connections), and web pages (pages and hyperlinks).</p>
      <p className="mt-2">Graphs can be <strong>directed</strong> (edges have a direction, like one-way roads) or <strong>undirected</strong> (edges go both ways). They can be <strong>weighted</strong> (edges have costs/distances) or <strong>unweighted</strong>. A graph with no cycles is called a <strong>tree</strong>.</p>

      <h4 className="font-bold text-foreground mt-4">Graph Representations</h4>
      <p><strong>1. Adjacency Matrix:</strong> A 2D array of size V×V where matrix[i][j] = 1 (or weight) if there is an edge from vertex i to vertex j, and 0 otherwise. Space: O(V²). Good for dense graphs. Checking if an edge exists is O(1).</p>
      <p className="mt-1"><strong>2. Adjacency List:</strong> An array of linked lists where each index represents a vertex and the linked list contains all its neighbors. Space: O(V+E). Good for sparse graphs. More memory efficient for most real-world graphs.</p>

      <CodeBlock>{`Graph:     A --- B
           |   / |
           |  /  |
           D --- C

Adjacency Matrix:       Adjacency List:
    A  B  C  D          A → B → D
A [ 0  1  0  1 ]       B → A → C → D
B [ 1  0  1  1 ]       C → B → D
C [ 0  1  0  1 ]       D → A → B → C
D [ 1  1  1  0 ]`}</CodeBlock>

      <TipBox>Know both representations and when to use each. Adjacency matrix is better for dense graphs (many edges); adjacency list is better for sparse graphs (few edges). Most graph algorithms use adjacency lists because real-world graphs are typically sparse.</TipBox>
    </QuestionCard>

    <QuestionCard priority="HIGH" marks="7–8 Marks" years="2022·2023·2024·2025" title="Define Minimum Spanning Tree. Find MST using Kruskal's/Prim's algorithm." questionText="What do you mean by minimum spanning tree of graph? Find the minimal spanning tree of the following graph using Kruskal's/Prim's algorithm.">
      <h4 className="font-bold text-foreground mt-2">Minimum Spanning Tree (MST)</h4>
      <p>A <strong>spanning tree</strong> of a connected, undirected graph is a subgraph that includes <strong>all vertices</strong> of the original graph, connected by the minimum number of edges (exactly V−1 edges for V vertices), with no cycles. A <strong>Minimum Spanning Tree</strong> is a spanning tree whose total edge weight (sum of all edge weights) is the smallest possible among all spanning trees of that graph. MSTs have important applications in network design — designing the cheapest network of cables, pipelines, or roads that connects all locations.</p>

      <h4 className="font-bold text-foreground mt-4">Kruskal's Algorithm (Edge-based, Greedy)</h4>
      <p>Kruskal's algorithm builds the MST by processing edges in order of increasing weight. It picks the cheapest available edge and adds it to the MST, as long as it does not create a cycle. It uses a <strong>Union-Find</strong> data structure to efficiently detect cycles.</p>
      <ol className="list-decimal pl-5 space-y-1">
        <li>Sort all edges by weight in ascending order</li>
        <li>Pick the smallest edge. If including it doesn't form a cycle, add it to the MST</li>
        <li>Repeat until V−1 edges are added to the MST</li>
      </ol>

      <CodeBlock>{`Example Graph:
    A ---1--- B
    |\\       /|
    6  5   3  4
    |    \\ /  |
    D ---2--- C

Edges sorted by weight: (A,B)=1, (C,D)=2, (B,C)=3, (B,D)=4, (A,C)=5, (A,D)=6

Step 1: Add (A,B)=1  ✓  No cycle — connects A and B
Step 2: Add (C,D)=2  ✓  No cycle — connects C and D
Step 3: Add (B,C)=3  ✓  No cycle — connects {A,B} with {C,D}
Step 4: Skip (B,D)=4  ✗  Would form cycle B-C-D-B

MST edges: (A,B)=1, (C,D)=2, (B,C)=3
Total MST weight: 1 + 2 + 3 = 6
Time: O(E log E) due to sorting edges`}</CodeBlock>

      <h4 className="font-bold text-foreground mt-4">Prim's Algorithm (Vertex-based, Greedy)</h4>
      <p>Prim's algorithm grows the MST one vertex at a time. Starting from any vertex, it repeatedly adds the cheapest edge that connects a vertex already in the MST to a vertex not yet in the MST. It uses a priority queue for efficiency.</p>
      <ol className="list-decimal pl-5 space-y-1">
        <li>Start from any vertex, add it to the MST set</li>
        <li>Find the minimum weight edge connecting the MST set to a vertex not in the MST</li>
        <li>Add that vertex and edge to the MST</li>
        <li>Repeat until all vertices are included</li>
      </ol>

      <CodeBlock>{`Same graph, starting from vertex A:

Step 1: MST = {A}
        Edges from A: (A,B)=1, (A,C)=5, (A,D)=6
        Min = (A,B)=1 → Add B

Step 2: MST = {A, B}
        Edges to non-MST: (B,C)=3, (B,D)=4, (A,C)=5, (A,D)=6
        Min = (B,C)=3 → Add C

Step 3: MST = {A, B, C}
        Edges to non-MST: (C,D)=2, (B,D)=4, (A,D)=6
        Min = (C,D)=2 → Add D

Step 4: MST = {A, B, C, D} — all vertices included ✓

MST: (A,B)=1, (B,C)=3, (C,D)=2  |  Total weight: 6
Time: O(V²) with adjacency matrix, O(E log V) with priority queue`}</CodeBlock>

      <TipBox>MST is asked almost every year — know BOTH algorithms. Kruskal's: sort edges globally, avoid cycles (good for sparse graphs). Prim's: grow from a vertex, pick cheapest edge to new vertex (good for dense graphs). Both always produce the same total MST weight, though the specific edges chosen may differ.</TipBox>
    </QuestionCard>

    <QuestionCard priority="HIGH" marks="8 Marks" years="2022·2024 Fall·2025" title="Find shortest path using Dijkstra's Algorithm." questionText="Define Shortest path. Find shortest path algorithm using Dijkstra's algorithm for the given graph starting from vertex A.">
      <h4 className="font-bold text-foreground mt-2">Shortest Path Problem</h4>
      <p>The <strong>shortest path problem</strong> involves finding a path between two vertices in a weighted graph such that the sum of the edge weights along the path is minimized. This has real-world applications in GPS navigation (finding the fastest route), network routing (sending data through the shortest path), and logistics (optimizing delivery routes).</p>

      <h4 className="font-bold text-foreground mt-4">Dijkstra's Algorithm</h4>
      <p><strong>Dijkstra's algorithm</strong> is a greedy algorithm that finds the shortest path from a single <strong>source vertex</strong> to all other vertices in a weighted graph. It works only with <strong>non-negative edge weights</strong>. The algorithm maintains a set of vertices whose shortest distance from the source is known, and repeatedly selects the unvisited vertex with the smallest tentative distance, updating distances of its neighbors.</p>

      <h4 className="font-bold text-foreground mt-4">Algorithm Steps</h4>
      <ol className="list-decimal pl-5 space-y-1">
        <li>Set distance of source = 0, all other vertices = ∞ (infinity)</li>
        <li>Mark all vertices as unvisited</li>
        <li>Pick the unvisited vertex with the smallest current distance</li>
        <li>For each unvisited neighbor v: if dist[u] + weight(u,v) {"<"} dist[v], update dist[v]</li>
        <li>Mark the current vertex as visited (its shortest distance is now finalized)</li>
        <li>Repeat from step 3 until all vertices are visited</li>
      </ol>

      <CodeBlock>{`Example: Find shortest path from A to all vertices

Graph:
    A --4-- B --3-- C
    |      /|       |
    2    1  6       5
    |  /    |       |
    D --7-- E --2-- F

Initialization:
  dist[A]=0, dist[B]=∞, dist[C]=∞, dist[D]=∞, dist[E]=∞, dist[F]=∞

Step 1: Visit A (dist=0) — smallest unvisited
  Update neighbors: B=min(∞, 0+4)=4, D=min(∞, 0+2)=2
  
Step 2: Visit D (dist=2) — smallest unvisited
  Update neighbors: B=min(4, 2+1)=3, E=min(∞, 2+7)=9

Step 3: Visit B (dist=3) — smallest unvisited
  Update neighbors: C=min(∞, 3+3)=6, E=min(9, 3+6)=9

Step 4: Visit C (dist=6) — smallest unvisited
  Update neighbors: F=min(∞, 6+5)=11

Step 5: Visit E (dist=9) — smallest unvisited
  Update neighbors: F=min(11, 9+2)=11

Step 6: Visit F (dist=11) — last vertex

Final shortest distances from A:
  A=0, D=2, B=3, C=6, E=9, F=11

Shortest paths:
  A→D: A→D (cost 2)
  A→B: A→D→B (cost 3)
  A→C: A→D→B→C (cost 6)

Time: O(V²) with adjacency matrix
      O((V+E) log V) with priority queue (min-heap)`}</CodeBlock>

      <TipBox>Dijkstra's is asked every year. In the exam, draw a clear table with columns: Vertex, Distance, Visited, Previous. Update this table at each step. Key rule: always process the unvisited vertex with the SMALLEST distance first. Remember: Dijkstra does NOT work with negative edge weights — use Bellman-Ford for that.</TipBox>
    </QuestionCard>

    <QuestionCard priority="MEDIUM" marks="7 Marks" years="2024 Spr·2022" title="Explain BFS and DFS graph traversal algorithms." questionText="What is Backtracking Algorithm? Explain Breadth First Search in Graph.">
      <h4 className="font-bold text-foreground mt-2">BFS (Breadth-First Search)</h4>
      <p><strong>BFS</strong> is a graph traversal algorithm that explores vertices level by level — it visits all vertices at distance 1 from the source first, then all vertices at distance 2, and so on. It uses a <strong>Queue</strong> data structure to keep track of vertices to visit next. BFS is guaranteed to find the shortest path in an <strong>unweighted graph</strong> because it explores closer vertices before farther ones.</p>

      <CodeBlock>{`BFS Algorithm:
1. Start from source vertex, enqueue it, mark as visited
2. While queue is not empty:
   a. Dequeue a vertex u
   b. Process u (print it, check condition, etc.)
   c. For each unvisited neighbor v of u:
      - Mark v as visited
      - Enqueue v

Time: O(V + E)  |  Space: O(V) for the queue
Applications: Shortest path in unweighted graph, level-order 
traversal, finding connected components, social network analysis`}</CodeBlock>

      <h4 className="font-bold text-foreground mt-4">DFS (Depth-First Search)</h4>
      <p><strong>DFS</strong> is a graph traversal algorithm that explores as deep as possible along each branch before backtracking. It follows one path all the way to a dead end, then backtracks and tries the next path. DFS uses a <strong>Stack</strong> (either explicitly or through recursion's call stack). DFS is useful for problems that require exploring all possible paths, detecting cycles, or performing topological sorting.</p>

      <CodeBlock>{`DFS Algorithm (Recursive):
void DFS(int v, bool visited[]) {
    visited[v] = true;
    printf("%d ", v);
    for each neighbor u of v:
        if (!visited[u])
            DFS(u, visited);
}

DFS Algorithm (Iterative with Stack):
1. Start from source, push to stack, mark visited
2. While stack is not empty:
   a. Pop vertex u
   b. Process u
   c. For each unvisited neighbor v of u:
      - Mark v as visited
      - Push v to stack

Time: O(V + E)  |  Space: O(V) for the stack
Applications: Cycle detection, topological sorting, connected 
components, maze solving, finding strongly connected components`}</CodeBlock>

      <h4 className="font-bold text-foreground mt-4">BFS vs DFS Comparison</h4>
      <ul className="list-disc pl-5 space-y-1">
        <li><strong>Data structure:</strong> BFS uses Queue; DFS uses Stack (or recursion)</li>
        <li><strong>Traversal order:</strong> BFS = level by level (breadth); DFS = depth first (one path fully before backtracking)</li>
        <li><strong>Shortest path:</strong> BFS finds shortest path in unweighted graphs; DFS does not guarantee shortest path</li>
        <li><strong>Memory:</strong> BFS may use more memory (stores all vertices at current level); DFS uses less memory for deep graphs</li>
        <li><strong>Time complexity:</strong> Both are O(V + E)</li>
      </ul>

      <TipBox>BFS uses Queue (FIFO — level by level), DFS uses Stack (LIFO — deep first). Both have the same time complexity O(V+E). For exam: BFS is better for shortest path problems; DFS is better for cycle detection and topological sort. Always trace through a small graph to show the traversal order.</TipBox>
    </QuestionCard>
  </section>
);

export default Unit7Section;

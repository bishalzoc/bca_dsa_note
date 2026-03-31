const AnalysisSection = () => (
  <section id="analysis" className="mb-10">
    <div className="rounded-xl border border-border bg-card p-5 md:p-7">
      <h2 className="text-xl font-bold text-primary mb-4">📊 Deep Pattern Analysis — 2022 to 2025</h2>
      <div className="text-sm text-foreground/80 mb-5">
        <p>Exam: 7 questions. Q1–Q6 have part (a) and (b) with 7–8 marks each. Q7 = "Any two short notes" (2×5 = 10 marks). Total = 100, Time = 3 hrs. Course Code: <strong>CMP 227</strong>. The 2025 paper is titled <strong>"Data Structure and Algorithms (New)"</strong> — updated syllabus with more emphasis on algorithm design and analysis.</p>
      </div>

      <div className="overflow-x-auto mb-6">
        <table className="w-full text-xs font-mono border-collapse">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-2 px-2 text-primary">TOPIC</th>
              <th className="py-2 px-2 text-text-dim">2022</th>
              <th className="py-2 px-2 text-text-dim">2023</th>
              <th className="py-2 px-2 text-text-dim">2024 Spr</th>
              <th className="py-2 px-2 text-text-dim">2024 Fall</th>
              <th className="py-2 px-2 text-text-dim">2025</th>
              <th className="py-2 px-2 text-text-dim">VERDICT</th>
            </tr>
          </thead>
          <tbody className="text-foreground/80">
            <Row topic="ADT / Data Structures Definition" y={["✓","✓","✓","✓","✓"]} stars={5} />
            <Row topic="Time & Space Complexity / Big O" y={["✓","","✓","✓","✓"]} stars={5} />
            <Row topic="Stack (Push/Pop / Linked Stack)" y={["✓","✓","✓","✓","✓"]} stars={5} />
            <Row topic="Infix to Postfix Conversion" y={["","✓","","✓","✓"]} stars={5} />
            <Row topic="Queue (Circular / Priority)" y={["","✓","✓","✓","✓"]} stars={5} />
            <Row topic="Recursion (Tower of Hanoi / Factorial)" y={["","✓","","","✓"]} stars={4} />
            <Row topic="Singly / Doubly Linked List" y={["","✓","✓","✓","✓"]} stars={5} />
            <Row topic="Binary Tree Traversal (In/Pre/Post)" y={["","","✓","","✓"]} stars={5} />
            <Row topic="BST (Insert / Delete / Search)" y={["","✓","✓","✓","✓"]} stars={5} />
            <Row topic="AVL Tree (Rotations)" y={["","✓","✓","✓","✓"]} stars={5} />
            <Row topic="Huffman Encoding" y={["","","✓","","✓"]} stars={4} />
            <Row topic="Quick Sort" y={["✓","✓","✓","✓","✓"]} stars={5} />
            <Row topic="Selection / Insertion Sort" y={["","","","✓","✓"]} stars={4} />
            <Row topic="Merge Sort" y={["✓","","","","✓"]} stars={4} />
            <Row topic="Hashing (Linear Probing / Chaining)" y={["✓","✓","✓","✓","✓"]} stars={5} />
            <Row topic="Binary Search" y={["","✓","","","✓"]} stars={4} />
            <Row topic="MST (Kruskal / Prim)" y={["","✓","✓","✓",""]} stars={5} />
            <Row topic="Dijkstra's Shortest Path" y={["✓","","","✓","✓"]} stars={5} />
            <Row topic="B-Tree" y={["✓","","✓","","✓"]} stars={4} />
            <Row topic="Divide & Conquer / Dynamic Programming" y={["","","✓","✓","✓"]} stars={4} />
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <Card title="Must-Prepare (Will Definitely Come)" text="Stack operations & applications · Queue (circular/priority) · BST + AVL Trees · Quick Sort · Hashing (linear probing + chaining) · Dijkstra's algorithm · MST (Kruskal/Prim) · Linked List operations" />
        <Card title="High Chance (Likely)" text="Infix to Postfix · Huffman encoding · Merge Sort · Binary Search · B-Tree · Divide & Conquer · Tree Traversals · Recursion (Tower of Hanoi)" />
        <Card title="Key Exam Pattern" text="Q1 always on fundamentals (ADT, complexity). Q2–Q3 on stacks/queues/linked lists. Q4 on trees. Q5 on sorting. Q6 on hashing/graphs. Q7 short notes." />
        <Card title="Q7 Short Notes — Best Bets" text="Priority Queue · B-Tree · Abstract Data Type · Divide and Conquer · Dynamic Programming · Backtracking · Splay Tree · Breadth First Search" />
      </div>
    </div>

    <div className="flex items-center gap-4 mt-4 text-[10px] font-mono text-text-dim">
      <span>PRIORITY:</span>
      <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-priority-high" />HIGH — Very likely</span>
      <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-priority-med" />MEDIUM — Good chance</span>
      <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-priority-low" />LOW — Know basics</span>
    </div>
  </section>
);

const Row = ({ topic, y, stars }: { topic: string; y: string[]; stars: number }) => (
  <tr className="border-b border-border/50 hover:bg-accent/30">
    <td className="py-2 px-2 text-left">{topic}</td>
    {y.map((v, i) => <td key={i} className="py-2 px-2 text-center">{v}</td>)}
    <td className="py-2 px-2 text-center text-stars">{"★".repeat(stars)}{"☆".repeat(5 - stars)}</td>
  </tr>
);

const Card = ({ title, text }: { title: string; text: string }) => (
  <div className="rounded-lg border border-border bg-accent/30 p-4">
    <h4 className="text-sm font-bold text-primary mb-1">{title}</h4>
    <p className="text-xs text-foreground/75 leading-relaxed">{text}</p>
  </div>
);

export default AnalysisSection;

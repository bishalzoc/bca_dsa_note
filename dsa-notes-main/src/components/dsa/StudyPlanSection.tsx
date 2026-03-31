import { useState } from "react";
import { ChevronDown } from "lucide-react";
import TipBox from "@/components/TipBox";

const StudyPlanSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="studyplan" className="mb-10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full rounded-xl border border-border bg-card p-5 md:p-7 text-left flex items-center justify-between gap-4 hover:border-primary/50 transition-colors"
      >
        <div>
          <h2 className="text-xl font-bold text-primary mb-0.5">🚀 Last 1 Day Study Plan — Score 50–60 Marks</h2>
          <p className="text-sm text-text-dim">Click to {isOpen ? "hide" : "open"} your 24-hour survival plan</p>
        </div>
        <ChevronDown className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[5000px] opacity-100 mt-0" : "max-h-0 opacity-0"}`}
      >
        <div className="rounded-b-xl border border-t-0 border-border bg-card p-5 md:p-7">

      {/* TIME ALLOCATION */}
      <div className="mb-6">
        <h3 className="text-base font-bold text-foreground mb-3">⏰ Time Allocation (24 Hours)</h3>
        <div className="space-y-2 text-sm">
          {[
            { time: "Morning (3 hrs)", task: "Unit 2: Stack, Queue, Infix→Postfix — these come EVERY year", color: "text-priority-high" },
            { time: "Late Morning (2.5 hrs)", task: "Unit 4: BST definition + AVL rotations + tree traversals", color: "text-priority-high" },
            { time: "Afternoon (2.5 hrs)", task: "Unit 5: Quick Sort full trace + Selection/Insertion Sort code", color: "text-priority-high" },
            { time: "Late Afternoon (2 hrs)", task: "Unit 6–7: Hashing (Linear Probing + Chaining) + Dijkstra's", color: "text-priority-high" },
            { time: "Evening (2 hrs)", task: "Unit 1 & 3: DS definition + types + Linked List insert/delete", color: "text-priority-med" },
            { time: "Night (1.5 hrs)", task: "Q7 Short Notes: Priority Queue, ADT, B-Tree (pick best 3–4)", color: "text-priority-med" },
            { time: "Late Night (1 hr)", task: "Quick revision of all code snippets and diagrams", color: "text-stars" },
            { time: "Before Sleep", task: "Read exam tips, review key formulas, sleep early", color: "text-text-dim" },
          ].map((item) => (
            <div key={item.time} className="flex gap-3 items-start">
              <span className={`font-mono text-xs min-w-[140px] ${item.color}`}>{item.time}</span>
              <span className="text-foreground/80">{item.task}</span>
            </div>
          ))}
        </div>
      </div>

      {/* PRIORITY ORDER */}
      <div className="mb-6">
        <h3 className="text-base font-bold text-foreground mb-3">🎯 Study Priority — What to Read First</h3>
        <div className="space-y-3">
          <PriorityBlock level="CRITICAL — Do These First (30+ marks depend on this)" color="bg-priority-high" items={[
            "Stack push/pop code (array + linked list) — asked every single year",
            "Infix to Postfix conversion using stack — step-by-step table format",
            "Circular Queue insertion & deletion with modular arithmetic",
            "Quick Sort — full partition trace on a given array",
            "AVL Tree — 4 rotations (LL, RR, LR, RL) + construct from data",
            "Hashing — Linear Probing & Separate Chaining with numerical example",
            "Dijkstra's algorithm — step-by-step shortest path table",
          ]} />
          <PriorityBlock level="IMPORTANT — Do These Next (15–20 marks)" color="bg-priority-med" items={[
            "Data Structure definition + classification diagram (tree diagram)",
            "BST definition, insertion code, and deletion 3 cases",
            "Singly Linked List insert/delete at beginning and end",
            "Binary Tree traversals — Inorder, Preorder, Postorder with example",
            "MST — Kruskal's algorithm (sort edges, avoid cycles)",
            "Selection Sort or Insertion Sort — code + trace one example",
          ]} />
          <PriorityBlock level="NICE TO HAVE — Only If Time Remains" color="bg-text-dim" items={[
            "Merge Sort algorithm",
            "Doubly Linked List",
            "B-Tree properties and insertion",
            "Huffman encoding tree construction",
            "Recursion concept + Tower of Hanoi",
          ]} />
        </div>
      </div>

      {/* MOST REPEATED QUESTIONS */}
      <div className="mb-6">
        <h3 className="text-base font-bold text-foreground mb-3">🔁 Most Repeated Questions (appeared 3+ years)</h3>
        <ol className="list-decimal pl-5 space-y-1.5 text-sm text-foreground/80">
          <li>What is data structure? Explain types with examples. <span className="text-priority-high font-mono text-xs">(every year)</span></li>
          <li>Write push and pop operations in Stack using array/linked list. <span className="text-priority-high font-mono text-xs">(every year)</span></li>
          <li>Convert infix to postfix using stack — show table. <span className="text-priority-high font-mono text-xs">(4/5 years)</span></li>
          <li>What is circular queue? Write enqueue/dequeue with code. <span className="text-priority-high font-mono text-xs">(4/5 years)</span></li>
          <li>Construct AVL Tree from given data, show rotations. <span className="text-priority-high font-mono text-xs">(every year)</span></li>
          <li>Perform Quick Sort on given array — show each pass. <span className="text-priority-high font-mono text-xs">(every year)</span></li>
          <li>Construct hash table using h(k)=k%size — linear probing + chaining. <span className="text-priority-high font-mono text-xs">(every year)</span></li>
          <li>Find shortest path using Dijkstra's algorithm. <span className="text-priority-high font-mono text-xs">(4/5 years)</span></li>
          <li>Singly linked list insertion and deletion with code. <span className="text-priority-high font-mono text-xs">(4/5 years)</span></li>
          <li>Perform Inorder, Preorder, Postorder tree traversal. <span className="text-priority-high font-mono text-xs">(4/5 years)</span></li>
        </ol>
      </div>

      {/* WHAT TO SKIP */}
      <div className="mb-6">
        <h3 className="text-base font-bold text-foreground mb-3">❌ What to Skip If Short on Time</h3>
        <ul className="list-disc pl-5 space-y-1 text-sm text-foreground/60">
          <li>Splay Tree — asked only once (2023), low probability</li>
          <li>Bucket Sort — appeared once, unlikely to repeat soon</li>
          <li>Radix Sort — rarely asked as a full question</li>
          <li>Detailed B-Tree insertion step-by-step — know properties only</li>
          <li>Graph representations (adjacency matrix/list) — rarely asked alone</li>
          <li>Deep theory on algorithm paradigms — just know basic definitions</li>
        </ul>
      </div>

      {/* FINAL CHECKLIST */}
      <div className="mb-4">
        <h3 className="text-base font-bold text-foreground mb-3">✅ Final Checklist — Before You Enter the Exam</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
          {[
            "Can I write Stack push/pop code from memory?",
            "Can I convert an infix expression to postfix with table?",
            "Can I draw circular queue and write enqueue/dequeue?",
            "Can I trace Quick Sort partition on 10 numbers?",
            "Can I construct an AVL tree and perform rotations?",
            "Can I build a hash table with both probing & chaining?",
            "Can I run Dijkstra's on a small graph?",
            "Can I write linked list insert/delete code?",
            "Can I do Inorder/Preorder/Postorder on a tree?",
            "Do I have 2–3 short notes prepared for Q7?",
          ].map((item) => (
            <div key={item} className="flex items-start gap-2">
              <span className="text-primary mt-0.5">☐</span>
              <span className="text-foreground/80">{item}</span>
            </div>
          ))}
        </div>
      </div>

        <TipBox>This plan is designed for passing with 50–60 marks. If you want 70+, you need to cover all units properly. But if you're short on time, this plan covers the highest-probability questions that appear almost every year. Focus on understanding the step-by-step process rather than memorizing code.</TipBox>
        </div>
      </div>
    </section>
  );
};

const PriorityBlock = ({ level, color, items }: { level: string; color: string; items: string[] }) => (
  <div className="rounded-lg border border-border bg-accent/20 p-4">
    <h4 className="text-sm font-bold text-foreground mb-2 flex items-center gap-2">
      <span className={`w-2.5 h-2.5 rounded-full ${color}`} />
      {level}
    </h4>
    <ul className="list-disc pl-5 space-y-1 text-sm text-foreground/80">
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  </div>
);

export default StudyPlanSection;

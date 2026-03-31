import QuestionCard from "@/components/QuestionCard";
import UnitHeader from "@/components/UnitHeader";
import CodeBlock from "@/components/CodeBlock";
import TipBox from "@/components/TipBox";

const Unit3Section = () => (
  <section id="unit3">
    <UnitHeader badge="U3" badgeColor="hsl(280,60%,55%)" title="Linked List" subtitle="8 hrs · Singly · Doubly · Circular · Insertion · Deletion · Stack/Queue using LL" />

    <QuestionCard priority="HIGH" marks="8 Marks" years="2023·2024·2025" title="Define Singly Linked List. Write functions to insert and delete nodes." questionText="Define singly LinkedList. Write a function in C or Java to delete a node at the beginning and at the end of singly linked list.">
      <h4 className="font-bold text-foreground mt-2">Singly Linked List</h4>
      <p>A <strong>Singly Linked List</strong> is a linear data structure consisting of a sequence of nodes, where each node contains two parts: a <strong>data field</strong> (which stores the actual value) and a <strong>pointer/link field</strong> (which stores the address of the next node in the sequence). The last node's pointer is set to NULL, indicating the end of the list. The first node is accessed through a special pointer called the <strong>head</strong>.</p>
      <p className="mt-2">Unlike arrays, linked lists do not require contiguous memory allocation. Each node can be stored anywhere in memory, connected through pointers. This makes insertion and deletion very efficient (no shifting needed), and the list can grow or shrink dynamically at runtime. However, random access is not possible — to reach the kth element, you must traverse from the head through k nodes.</p>

      <CodeBlock>{`Node Structure:
┌──────┬──────┐    ┌──────┬──────┐    ┌──────┬──────┐
│ Data │ Next │───→│ Data │ Next │───→│ Data │ NULL │
└──────┴──────┘    └──────┴──────┘    └──────┴──────┘
  head                                    last node`}</CodeBlock>

      <h4 className="font-bold text-foreground mt-4">Advantages over Arrays</h4>
      <ul className="list-disc pl-5 space-y-1">
        <li>Dynamic size — no need to declare size in advance</li>
        <li>Efficient insertion/deletion — no shifting of elements needed</li>
        <li>No memory wastage — allocates memory only when needed</li>
      </ul>
      <h4 className="font-bold text-foreground mt-2">Disadvantages</h4>
      <ul className="list-disc pl-5 space-y-1">
        <li>No random access — must traverse sequentially (O(n) to access kth element)</li>
        <li>Extra memory for storing pointers in each node</li>
        <li>Not cache-friendly (nodes scattered in memory)</li>
      </ul>

      <CodeBlock>{`struct Node {
    int data;
    struct Node* next;
};

// Insert at beginning — O(1)
void insertAtBeginning(struct Node** head, int value) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = value;
    newNode->next = *head;
    *head = newNode;
}

// Insert at end — O(n)
void insertAtEnd(struct Node** head, int value) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = value;
    newNode->next = NULL;
    if (*head == NULL) { *head = newNode; return; }
    struct Node* temp = *head;
    while (temp->next != NULL) temp = temp->next;
    temp->next = newNode;
}

// Delete from beginning — O(1)
void deleteFromBeginning(struct Node** head) {
    if (*head == NULL) { printf("List is empty\\n"); return; }
    struct Node* temp = *head;
    *head = (*head)->next;
    free(temp);
}

// Delete from end — O(n)
void deleteFromEnd(struct Node** head) {
    if (*head == NULL) { printf("List is empty\\n"); return; }
    if ((*head)->next == NULL) { free(*head); *head = NULL; return; }
    struct Node* temp = *head;
    while (temp->next->next != NULL) temp = temp->next;
    free(temp->next);
    temp->next = NULL;
}`}</CodeBlock>

      <TipBox>Always draw the node diagram showing pointer changes step by step. Insertion at beginning is O(1) because we just change the head pointer. Deletion from end is O(n) because we must traverse to the second-last node. Show both insertion and deletion at both ends for complete coverage.</TipBox>
    </QuestionCard>

    <QuestionCard priority="HIGH" marks="8 Marks" years="2022·2024 Spr" title="Define Doubly Linked List. Write insertion at beginning." questionText="Define Doubly Linked-list. Write a complete function in C/C++ or Java to insert a node at the beginning of singly linked list.">
      <h4 className="font-bold text-foreground mt-2">Doubly Linked List</h4>
      <p>A <strong>Doubly Linked List (DLL)</strong> is a type of linked list where each node contains three parts: a <strong>previous pointer</strong> (pointing to the preceding node), the <strong>data</strong>, and a <strong>next pointer</strong> (pointing to the following node). This two-way linking allows traversal in both forward and backward directions, unlike a singly linked list which only supports forward traversal.</p>
      <p className="mt-2">The main advantage of a DLL is that deletion of a node becomes O(1) if you already have a pointer to that node (because you can access both the previous and next nodes directly). In a singly linked list, you would need to traverse from the head to find the previous node, making deletion O(n).</p>

      <CodeBlock>{`Node Structure:
NULL ←──┌──────┬──────┬──────┐    ┌──────┬──────┬──────┐──→ NULL
        │ Prev │ Data │ Next │←──→│ Prev │ Data │ Next │
        └──────┴──────┴──────┘    └──────┴──────┴──────┘`}</CodeBlock>

      <CodeBlock>{`struct DNode {
    int data;
    struct DNode* prev;
    struct DNode* next;
};

// Insert at beginning of Doubly Linked List
void insertAtBeginning(struct DNode** head, int value) {
    struct DNode* newNode = (struct DNode*)malloc(sizeof(struct DNode));
    newNode->data = value;
    newNode->prev = NULL;
    newNode->next = *head;
    if (*head != NULL)
        (*head)->prev = newNode;
    *head = newNode;
}`}</CodeBlock>

      <h4 className="font-bold text-foreground mt-4">Comparison: Singly vs Doubly Linked List</h4>
      <ul className="list-disc pl-5 space-y-1">
        <li><strong>Traversal:</strong> SLL → forward only; DLL → both directions</li>
        <li><strong>Memory:</strong> SLL → 1 pointer per node; DLL → 2 pointers per node (more memory)</li>
        <li><strong>Deletion:</strong> SLL → O(n) to find previous; DLL → O(1) if pointer is known</li>
        <li><strong>Complexity:</strong> DLL has more complex pointer manipulation during insertion/deletion</li>
        <li><strong>Use cases:</strong> DLL is used in browser history (back/forward), undo/redo systems, and music playlists</li>
      </ul>

      <TipBox>Draw the node with all three fields clearly. Show how both prev and next pointers change during insertion. The comparison between SLL and DLL (advantages + disadvantages) is commonly asked as a short question worth 3–5 marks.</TipBox>
    </QuestionCard>

    <QuestionCard priority="MEDIUM" marks="7 Marks" years="2024·2025" title="What is a Circular Linked List? Explain its advantages." questionText="What is circular linked list? How does it differ from a singly linked list?">
      <h4 className="font-bold text-foreground mt-2">Circular Linked List</h4>
      <p>A <strong>Circular Linked List</strong> is a variation of a linked list where the last node's next pointer, instead of being NULL, points back to the first node, forming a circle. This means there is no natural "end" to the list — traversal can continue indefinitely by going around the circle. Both singly and doubly linked lists can be made circular.</p>
      <p className="mt-2">Circular linked lists are particularly useful in applications that require repeated cycling through data, such as round-robin CPU scheduling, circular buffers in streaming applications, and multiplayer game turn management where the turn order cycles continuously.</p>

      <h4 className="font-bold text-foreground mt-4">Key Differences from Singly Linked List</h4>
      <ul className="list-disc pl-5 space-y-1">
        <li>Last node points to head instead of NULL</li>
        <li>No NULL pointer anywhere in the list (unless the list is empty)</li>
        <li>Any node can serve as a starting point for traversal</li>
        <li>Traversal requires a stopping condition (e.g., stop when we return to the starting node)</li>
      </ul>

      <TipBox>Know the concept and use cases. Circular LL is sometimes asked as a short note or as part of a linked list comparison question. Remember: the key difference is that the last node links back to the first node instead of pointing to NULL.</TipBox>
    </QuestionCard>

    <QuestionCard priority="MEDIUM" marks="5 Marks" years="2023·2025" title="Compare Array vs Linked List — when to use which?" questionText="Compare array and linked list. When would you prefer one over the other?">
      <h4 className="font-bold text-foreground mt-2">Array vs Linked List Comparison</h4>
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>Size:</strong> Arrays have fixed size (declared at compile time); linked lists grow and shrink dynamically at runtime.</li>
        <li><strong>Memory:</strong> Arrays store elements in contiguous memory locations; linked list nodes can be scattered anywhere in memory, connected via pointers.</li>
        <li><strong>Access:</strong> Arrays support O(1) random access using index; linked lists require O(n) sequential traversal.</li>
        <li><strong>Insertion/Deletion:</strong> Arrays need O(n) shifting of elements; linked lists can insert/delete in O(1) at the head (and O(n) at arbitrary positions).</li>
        <li><strong>Memory overhead:</strong> Arrays have no extra overhead; each linked list node stores an extra pointer (4 or 8 bytes).</li>
      </ul>
      <p className="mt-2"><strong>Use Array when:</strong> You need fast random access, the size is known in advance, and insertion/deletion is rare.</p>
      <p><strong>Use Linked List when:</strong> The size is unknown or changes frequently, insertion/deletion is frequent, and sequential access is sufficient.</p>

      <TipBox>This comparison is worth easy marks — write it in a table format in the exam for maximum clarity. Mention at least 4 comparison points with examples.</TipBox>
    </QuestionCard>
  </section>
);

export default Unit3Section;

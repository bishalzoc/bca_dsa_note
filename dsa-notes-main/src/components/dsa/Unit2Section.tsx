import QuestionCard from "@/components/QuestionCard";
import UnitHeader from "@/components/UnitHeader";
import CodeBlock from "@/components/CodeBlock";
import TipBox from "@/components/TipBox";

const Unit2Section = () => (
  <section id="unit2">
    <UnitHeader badge="U2" badgeColor="hsl(160,60%,42%)" title="Stack, Queues and Recursion" subtitle="8 hrs · Stack ADT · Infix to Postfix · Queue Types · Recursion · Tower of Hanoi" />

    <QuestionCard priority="HIGH" marks="8 Marks" years="2022·2023·2024·2025" title="What is a Stack? Write push and pop operations using array." questionText="What is a stack? How is it used in recursion? / Write a complete program in C/C++ to demonstrate push and pop operation in a Stack using Linked list.">
      <h4 className="font-bold text-foreground mt-2">Stack</h4>
      <p>A <strong>Stack</strong> is a linear data structure that follows the <strong>LIFO (Last In, First Out)</strong> principle — the element that is inserted last is the first one to be removed. You can think of a stack like a pile of plates: you always add a new plate on top, and when you need to remove one, you take the topmost plate first. All operations happen at one end only, called the <strong>top</strong> of the stack.</p>
      <p className="mt-2">Stacks are widely used in computer science for managing function calls (call stack), evaluating arithmetic expressions, converting between expression notations (infix to postfix), implementing undo/redo functionality in editors, and backtracking algorithms like maze solving.</p>

      <h4 className="font-bold text-foreground mt-4">Stack Operations</h4>
      <ul className="list-disc pl-5 space-y-1">
        <li><strong>Push:</strong> Insert an element at the top of the stack — O(1) time</li>
        <li><strong>Pop:</strong> Remove and return the top element — O(1) time</li>
        <li><strong>Peek/Top:</strong> View the top element without removing it — O(1) time</li>
        <li><strong>isEmpty:</strong> Check if the stack has no elements — O(1) time</li>
        <li><strong>isFull:</strong> Check if the stack is full (only in array implementation) — O(1) time</li>
      </ul>

      <h4 className="font-bold text-foreground mt-4">Stack using Array</h4>
      <CodeBlock>{`#define MAX 100
int stack[MAX], top = -1;

void push(int value) {
    if (top == MAX - 1)
        printf("Stack Overflow\\n");
    else
        stack[++top] = value;
}

int pop() {
    if (top == -1) {
        printf("Stack Underflow\\n");
        return -1;
    }
    return stack[top--];
}

int peek() {
    if (top == -1) return -1;
    return stack[top];
}

int isEmpty() {
    return top == -1;
}`}</CodeBlock>

      <h4 className="font-bold text-foreground mt-4">Stack using Linked List</h4>
      <p>In the linked list implementation, the top of the stack is the head of the linked list. Push adds a new node at the head, and pop removes the head node. This approach has no overflow problem since memory is allocated dynamically.</p>
      <CodeBlock>{`struct Node {
    int data;
    struct Node* next;
};

struct Node* top = NULL;

void push(int value) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = value;
    newNode->next = top;
    top = newNode;
}

int pop() {
    if (top == NULL) {
        printf("Stack Underflow\\n");
        return -1;
    }
    int value = top->data;
    struct Node* temp = top;
    top = top->next;
    free(temp);
    return value;
}`}</CodeBlock>

      <TipBox>Both array and linked list implementations are frequently asked. Array has fixed size (overflow possible); linked list has dynamic size (no overflow but uses extra memory for pointers). Always mention LIFO principle and draw the stack diagram showing top pointer.</TipBox>
    </QuestionCard>

    <QuestionCard priority="HIGH" marks="7 Marks" years="2022·2024·2025" title="Convert Infix to Postfix using Stack." questionText="Convert following infix expression to postfix using stack: A + B * (C ^ D - E) ^ (F + G * H) – I">
      <h4 className="font-bold text-foreground mt-2">Infix to Postfix Conversion</h4>
      <p><strong>Infix notation</strong> is the standard mathematical notation where the operator is placed between operands (e.g., A + B). <strong>Postfix notation</strong> (also called Reverse Polish Notation) places the operator after the operands (e.g., A B +). Computers prefer postfix because it eliminates the need for parentheses and operator precedence rules — expressions can be evaluated left to right using a simple stack.</p>

      <h4 className="font-bold text-foreground mt-4">Conversion Algorithm</h4>
      <ol className="list-decimal pl-5 space-y-1">
        <li>Scan the infix expression from left to right</li>
        <li>If the scanned character is an <strong>operand</strong>, add it directly to the output</li>
        <li>If it is <strong>'('</strong>, push it onto the stack</li>
        <li>If it is <strong>')'</strong>, pop and add to output until '(' is found, then discard '('</li>
        <li>If it is an <strong>operator</strong>, pop all operators from the stack that have higher or equal precedence (for left-associative) and add them to output, then push the current operator</li>
        <li>After the entire expression is scanned, pop all remaining operators from the stack</li>
      </ol>

      <p className="mt-3"><strong>Operator Precedence:</strong> ^ (highest, right-associative) → * / (middle, left-associative) → + - (lowest, left-associative).</p>

      <CodeBlock>{`Example: A + B * (C ^ D - E) ^ (F + G * H) - I

Symbol | Stack        | Output
-------|--------------|------------------
A      |              | A
+      | +            | A
B      | +            | A B
*      | + *          | A B
(      | + * (        | A B
C      | + * (        | A B C
^      | + * ( ^      | A B C
D      | + * ( ^      | A B C D
-      | + * ( -      | A B C D ^
E      | + * ( -      | A B C D ^ E
)      | + *          | A B C D ^ E -
^      | + * ^        | A B C D ^ E -
(      | + * ^ (      | A B C D ^ E -
F      | + * ^ (      | A B C D ^ E - F
+      | + * ^ ( +    | A B C D ^ E - F
G      | + * ^ ( +    | A B C D ^ E - F G
*      | + * ^ ( + *  | A B C D ^ E - F G
H      | + * ^ ( + *  | A B C D ^ E - F G H
)      | + * ^        | A B C D ^ E - F G H * +
-      | -            | A B C D ^ E - F G H * + ^ * +
I      | -            | A B C D ^ E - F G H * + ^ * + I
END    |              | A B C D ^ E - F G H * + ^ * + I -

Postfix: A B C D ^ E - F G H * + ^ * + I -`}</CodeBlock>

      <TipBox>This is asked almost every year with different expressions. Practice the step-by-step table format — examiners love it. Remember: ^ is right-associative (don't pop ^ when current is ^). Always show both the stack and output columns clearly at every step.</TipBox>
    </QuestionCard>

    <QuestionCard priority="HIGH" marks="7–8 Marks" years="2023·2024·2025" title="What is a Circular Queue? Explain insertion and deletion with algorithm." questionText="What is a circular queue? Explain with algorithm how insertion and deletion are performed in circular queue using array.">
      <h4 className="font-bold text-foreground mt-2">Circular Queue</h4>
      <p>A <strong>Circular Queue</strong> is an improved version of a linear queue that solves the problem of wasted space. In a linear queue, once elements are dequeued from the front, those positions remain empty and cannot be reused even if the rear has reached the end — this leads to a "false overflow" situation. A circular queue overcomes this by connecting the last position back to the first position, forming a circle. This means when the rear reaches the end of the array, it wraps around to the beginning if there is free space.</p>
      <p className="mt-2">Circular queues are used in CPU scheduling (round-robin), memory management (buffer pools), traffic light control systems, and data streaming applications where a fixed-size buffer continuously receives and processes data.</p>

      <CodeBlock>{`Circular Queue Visualization:
       front               rear
         ↓                   ↓
    [10] [20] [30] [__] [__]
     0    1    2    3    4

After dequeue and enqueue(40, 50, 60):
              front    rear
                ↓       ↓
    [60] [__] [30] [40] [50]
     0    1    2    3    4
    ↑ wraps around from position 4 to 0`}</CodeBlock>

      <CodeBlock>{`#define MAX 5
int queue[MAX], front = -1, rear = -1;

void enqueue(int value) {
    if ((rear + 1) % MAX == front) {
        printf("Queue is Full\\n");
        return;
    }
    if (front == -1) front = 0;  // first element
    rear = (rear + 1) % MAX;     // circular increment
    queue[rear] = value;
}

int dequeue() {
    if (front == -1) {
        printf("Queue is Empty\\n");
        return -1;
    }
    int value = queue[front];
    if (front == rear)            // last element removed
        front = rear = -1;       // reset queue
    else
        front = (front + 1) % MAX; // circular increment
    return value;
}`}</CodeBlock>

      <TipBox>Key formula: next position = (current + 1) % MAX. Full condition: (rear+1) % MAX == front. Empty condition: front == -1. Always draw the circular diagram showing how the rear wraps around to the beginning. This makes the answer visually clear.</TipBox>
    </QuestionCard>

    <QuestionCard priority="HIGH" marks="7 Marks" years="2023·2025" title="What is Recursion? Write recursive program for Factorial." questionText="What is recursion? Write a recursive program in C to find the factorial of a given number. / Explain how recursion and stack are related.">
      <h4 className="font-bold text-foreground mt-2">What is Recursion?</h4>
      <p><strong>Recursion</strong> is a programming technique where a function calls itself to solve a smaller version of the same problem. Every recursive function must have two essential components: a <strong>base case</strong> (the simplest version of the problem that can be solved directly without further recursion) and a <strong>recursive case</strong> (where the function calls itself with a reduced or simpler input, moving closer to the base case with each call).</p>
      <p className="mt-2">Recursion works because each function call creates a new frame on the <strong>call stack</strong>, storing its own local variables and return address. When the base case is reached, the function starts returning, and each stored frame is popped from the stack in LIFO order. This is why every recursive solution can be converted into an iterative one using an explicit stack data structure.</p>

      <h4 className="font-bold text-foreground mt-4">Factorial — Definition</h4>
      <p>The factorial of a non-negative integer n (written as n!) is the product of all positive integers from 1 to n. By definition, 0! = 1. For example: 5! = 5 × 4 × 3 × 2 × 1 = 120.</p>
      <p className="mt-1"><strong>Recursive definition:</strong> factorial(n) = n × factorial(n−1), with base case factorial(0) = 1.</p>

      <h4 className="font-bold text-foreground mt-4">Recursive Factorial Program in C</h4>
      <CodeBlock>{`#include <stdio.h>

int factorial(int n) {
    if (n == 0 || n == 1)       // Base case
        return 1;
    else
        return n * factorial(n - 1);  // Recursive case
}

int main() {
    int num;
    printf("Enter a number: ");
    scanf("%d", &num);
    printf("Factorial of %d = %d\\n", num, factorial(num));
    return 0;
}

/* Execution trace for factorial(5):
   factorial(5) = 5 * factorial(4)
   factorial(4) = 4 * factorial(3)
   factorial(3) = 3 * factorial(2)
   factorial(2) = 2 * factorial(1)
   factorial(1) = 1              ← base case reached
   
   Now returns unwind (LIFO — like stack pop):
   factorial(2) = 2 * 1 = 2
   factorial(3) = 3 * 2 = 6
   factorial(4) = 4 * 6 = 24
   factorial(5) = 5 * 24 = 120  ← final answer
*/`}</CodeBlock>

      <h4 className="font-bold text-foreground mt-4">Iterative Factorial (for comparison)</h4>
      <CodeBlock>{`int factorialIterative(int n) {
    int result = 1;
    for (int i = 2; i <= n; i++)
        result = result * i;
    return result;
}
// Same result, but uses a loop instead of recursion
// No risk of stack overflow for large n`}</CodeBlock>

      <h4 className="font-bold text-foreground mt-4">Recursion and Stack Relationship</h4>
      <p>Every time a recursive function calls itself, the system pushes the current function's state (local variables, parameters, return address) onto the <strong>call stack</strong>. When the base case is reached and functions start returning, these states are popped from the stack in reverse order (LIFO). If recursion goes too deep (e.g., factorial of a very large number), the call stack can run out of memory, causing a <strong>stack overflow</strong> error. This is why understanding the connection between recursion and stacks is fundamental.</p>

      <TipBox>For factorial: always show the execution trace — how calls go down to the base case and then return values come back up. Mention time complexity O(n) and space complexity O(n) due to stack frames. Compare with iterative version for full marks. This is a very commonly asked question in Unit 2.</TipBox>
    </QuestionCard>

    <QuestionCard priority="MEDIUM" marks="7 Marks" years="2023·2025" title="Write a recursive algorithm for Tower of Hanoi." questionText="Write a recursive algorithm to solve the Tower of Hanoi problem for 'n' disks. Explain how recursion and stack are related in this context.">
      <h4 className="font-bold text-foreground mt-2">Tower of Hanoi</h4>
      <p>The <strong>Tower of Hanoi</strong> is a classic recursion problem that involves moving n disks from a source peg to a destination peg using an auxiliary (helper) peg. The rules are: (1) only one disk can be moved at a time, (2) only the topmost disk on a peg can be moved, and (3) a larger disk can never be placed on top of a smaller disk. This problem beautifully demonstrates how complex problems can be broken down into simpler recursive sub-problems.</p>

      <h4 className="font-bold text-foreground mt-4">Recursive Strategy</h4>
      <p>To move n disks from source A to destination C using auxiliary B: first move the top (n−1) disks from A to B (using C as helper), then move the largest disk from A to C, and finally move the (n−1) disks from B to C (using A as helper).</p>

      <CodeBlock>{`void towerOfHanoi(int n, char source, char dest, char aux) {
    if (n == 1) {
        printf("Move disk 1 from %c to %c\\n", source, dest);
        return;
    }
    towerOfHanoi(n - 1, source, aux, dest);   // Move n-1 disks to aux
    printf("Move disk %d from %c to %c\\n", n, source, dest);
    towerOfHanoi(n - 1, aux, dest, source);   // Move n-1 from aux to dest
}

// Call: towerOfHanoi(3, 'A', 'C', 'B')
// Output for n=3 (7 moves):
// Move disk 1 from A to C
// Move disk 2 from A to B
// Move disk 1 from C to B
// Move disk 3 from A to C
// Move disk 1 from B to A
// Move disk 2 from B to C
// Move disk 1 from A to C
// Total moves = 2ⁿ - 1 = 2³ - 1 = 7`}</CodeBlock>

      <TipBox>For n disks, total moves = 2ⁿ − 1. Time complexity: O(2ⁿ) — exponential. Always trace through n=3 step by step in the exam. Mention the call stack: each recursive call pushes a frame, and returns unwind in LIFO order — directly demonstrating the recursion-stack connection.</TipBox>
    </QuestionCard>
  </section>
);

export default Unit2Section;

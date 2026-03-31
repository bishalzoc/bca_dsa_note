import { useState } from "react";

interface QuestionCardProps {
  priority: "HIGH" | "MEDIUM" | "LOW";
  marks: string;
  years: string;
  title: string;
  questionText?: string;
  children: React.ReactNode;
}

const QuestionCard = ({ priority, marks, years, title, questionText, children }: QuestionCardProps) => {
  const [open, setOpen] = useState(false);

  const priorityClass = priority === "HIGH"
    ? "bg-priority-high"
    : priority === "MEDIUM"
    ? "bg-priority-med"
    : "bg-priority-low";

  return (
    <div className="mb-4 rounded-lg border border-border overflow-hidden bg-card">
      <div
        className="flex flex-wrap items-center gap-2 px-4 py-3 cursor-pointer select-none hover:bg-accent/50 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className={`${priorityClass} text-[11px] font-bold uppercase px-2 py-0.5 rounded text-background tracking-wide`}>
          {priority}
        </span>
        <span className="text-[11px] font-mono bg-secondary text-secondary-foreground px-2 py-0.5 rounded">
          {marks}
        </span>
        <span className="text-[11px] font-mono text-text-dim">{years}</span>
        <span className="flex-1 text-sm font-medium text-foreground">{title}</span>
        <span className="text-text-dim text-sm transition-transform" style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}>▼</span>
      </div>
      {open && (
        <div className="px-5 pb-5 border-t border-border">
          {questionText && (
            <div className="text-sm text-text-dim italic mt-3 mb-3 pl-3 border-l-2 border-primary/40">
              {questionText}
            </div>
          )}
          <div className="text-xs font-mono uppercase tracking-widest text-primary mb-2 mt-3">Model Answer</div>
          <div className="text-sm leading-relaxed text-foreground/90 space-y-3">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;

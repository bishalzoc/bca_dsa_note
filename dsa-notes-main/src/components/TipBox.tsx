const TipBox = ({ children }: { children: React.ReactNode }) => (
  <div className="mt-3 p-3 rounded-md bg-primary/10 border border-primary/30 text-sm">
    <strong className="text-primary">Exam Tip:</strong>{" "}
    <span className="text-foreground/85">{children}</span>
  </div>
);

export default TipBox;

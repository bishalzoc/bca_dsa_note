const CodeBlock = ({ children }: { children: string }) => (
  <pre className="bg-code-bg rounded-md p-4 text-xs font-mono text-foreground/90 overflow-x-auto border border-border my-3 leading-relaxed whitespace-pre-wrap">
    {children}
  </pre>
);

export default CodeBlock;

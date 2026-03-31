const sections = [
  { id: "analysis", label: "📊 Analysis" },
  { id: "studyplan", label: "🚀 1-Day Plan" },
  { id: "unit1", label: "U1: Intro" },
  { id: "unit2", label: "U2: Stack/Queue" },
  { id: "unit3", label: "U3: Linked List" },
  { id: "unit4", label: "U4: Trees" },
  { id: "unit5", label: "U5: Sorting" },
  { id: "unit6", label: "U6: Search+Hash" },
  { id: "unit7", label: "U7: Graphs" },
];

const StickyNav = () => (
  <nav className="sticky top-0 z-50 bg-nav-bg/95 backdrop-blur border-b border-border overflow-x-auto">
    <div className="max-w-4xl mx-auto flex gap-1 px-4 py-2">
      {sections.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className="text-[11px] font-mono text-text-dim hover:text-primary px-3 py-1.5 rounded whitespace-nowrap transition-colors hover:bg-accent"
        >
          {s.label}
        </a>
      ))}
    </div>
  </nav>
);

export default StickyNav;

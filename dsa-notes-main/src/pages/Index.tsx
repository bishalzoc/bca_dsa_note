import AnalysisSection from "@/components/dsa/AnalysisSection";
import StudyPlanSection from "@/components/dsa/StudyPlanSection";
import Unit1Section from "@/components/dsa/Unit1Section";
import Unit2Section from "@/components/dsa/Unit2Section";
import Unit3Section from "@/components/dsa/Unit3Section";
import Unit4Section from "@/components/dsa/Unit4Section";
import Unit5Section from "@/components/dsa/Unit5Section";
import Unit6Section from "@/components/dsa/Unit6Section";
import Unit7Section from "@/components/dsa/Unit7Section";
import ShortNotesSection from "@/components/dsa/ShortNotesSection";
import StickyNav from "@/components/StickyNav";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* HERO */}
      <header className="px-4 pt-10 pb-8 max-w-4xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-text-dim mb-3">
          Pokhara University · BCA · Semester III · CMP227
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          <span className="text-foreground">Data Structure and</span>
          <br />
          <span className="text-primary">Algorithms</span>
        </h1>
        <p className="text-sm text-text-dim mt-3">
          Deep Analysis: 2022–2025 Papers · Full Syllabus · Perfect 7 &amp; 8 Mark Answers · All Units
        </p>
        <div className="flex flex-wrap gap-2 mt-5">
          {["7 UNITS · 48 HRS", "4 YEARS ANALYZED", "FULL CODE EXAMPLES", "EXAM-READY ANSWERS"].map((t) => (
            <span key={t} className="text-[11px] font-mono px-3 py-1.5 rounded-full border border-border text-text-dim">
              {t}
            </span>
          ))}
        </div>
      </header>

      <StickyNav />

      <main className="max-w-4xl mx-auto px-4 pb-20">
        <AnalysisSection />
        <StudyPlanSection />
        <Unit1Section />
        <Unit2Section />
        <Unit3Section />
        <Unit4Section />
        <Unit5Section />
        <Unit6Section />
        <Unit7Section />
        <hr className="border-border my-10" />
        <ShortNotesSection />
      </main>
    </div>
  );
};

export default Index;

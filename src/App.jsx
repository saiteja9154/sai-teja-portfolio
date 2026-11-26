import ChapterPlaceholder from "./components/layout/ChapterPlaceholder";
import PageShell from "./components/layout/PageShell";
import { chapters } from "./data/site";

function App() {
  return (
    <PageShell>
      {chapters.map((chapter) => (
        <ChapterPlaceholder key={chapter.id} chapter={chapter} />
      ))}
    </PageShell>
  );
}

export default App;

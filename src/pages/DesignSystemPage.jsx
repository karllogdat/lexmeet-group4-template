export default function DesignSystemPage() {
  return (
    <div className="flex w-full h-screen items-center justify-center">
      <div className="flex flex-col gap-8 p-8 border border-slate-300 rounded-lg">
        <h1 className="font-inter font-bold text-5xl">Typography</h1>
        <div>
          <h1 className="g4-heading-1">This is Heading 1</h1>
          <h2 className="g4-heading-2">This is Heading 2</h2>
          <h3 className="g4-heading-3">This is Heading 3</h3>
          <p className="g4-large-body">This is Large Body text</p>
          <p className="g4-body">This is Body text</p>
          <p className="g4-button">This is Button text</p>
          <p className="g4-caption">This is Caption text</p>
          <p className="g4-subcaption">This is Subcaption text</p>
        </div>
      </div>
    </div>
  );
}

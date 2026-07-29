import TypographyEntry from "../components/design-system/TypographyEntry";

export default function DesignSystemPage() {
  return (
    <div className="flex w-full h-shrink items-center justify-center">
      <div className="flex flex-col gap-8 p-8 border border-slate-300 rounded-lg">
        <h1 className="font-inter font-bold text-5xl">Typography</h1>
        <div className="flex flex-col gap-6">
          <TypographyEntry name="g4-heading-1">
            <h1 className="g4-heading-1">This is Heading 1</h1>
          </TypographyEntry>
          <TypographyEntry name="g4-heading-2">
            <h2 className="g4-heading-2">This is Heading 2</h2>
          </TypographyEntry>
          <TypographyEntry name="g4-heading-3">
            <h3 className="g4-heading-3">This is Heading 3</h3>
          </TypographyEntry>
          <TypographyEntry name="g4-large-body">
            <p className="g4-large-body">This is Large Body text</p>
          </TypographyEntry>
          <TypographyEntry name="g4-body">
            <p className="g4-body">This is Body text</p>
          </TypographyEntry>
          <TypographyEntry name="g4-button">
            <p className="g4-button">This is Button text</p>
          </TypographyEntry>
          <TypographyEntry name="g4-caption">
            <p className="g4-caption">This is Caption text</p>
          </TypographyEntry>
          <TypographyEntry name="g4-subcaption">
            <p className="g4-subcaption">This is Subcaption text</p>
          </TypographyEntry>
        </div>
      </div>
    </div>
  );
}

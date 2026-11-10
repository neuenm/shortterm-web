import { getLegalDocument, type LegalDocumentKind } from "@/lib/legal";
const kinds: LegalDocumentKind[] = ["terms", "privacy", "legalNotice"];
let ok = true;
for (const kind of kinds) {
  const es = getLegalDocument(kind, "es");
  const en = getLegalDocument(kind, "en");
  const shape = (d: typeof es) => d.sections.map((s) => `${s.number}:${s.id}:[${s.clauses.map((c) => `${c.number ?? "-"}/${c.blocks.map((b) => b.kind + ("items" in b ? b.items.length : "")).join(",")}`).join(" ")}]`).join("\n");
  const same = shape(es) === shape(en);
  if (!same) { ok = false; console.log(`MISMATCH ${kind}\nES:\n${shape(es)}\nEN:\n${shape(en)}`); }
  const texts = (d: typeof es) => JSON.stringify(d);
  for (const [loc, d] of [["es", es], ["en", en]] as const) {
    const placeholders = texts(d).match(/\[[A-Z][^\]]*\]/g) ?? [];
    const unresolved = texts(d).match(/§\{/g) ?? [];
    console.log(`${kind}/${loc}: ${d.sections.length} sections, placeholders=${JSON.stringify([...new Set(placeholders)])}, unresolvedRefs=${unresolved.length}`);
  }
  console.log(`${kind}: es/en structure ${same ? "identical" : "DIFFERENT"}`);
}
process.exit(ok ? 0 : 1);

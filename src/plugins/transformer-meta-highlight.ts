const RE_HIGHLIGHT_LINES = /\{([\d,-]+)\}/;

function parseMetaHighlightString(meta: string): number[] | null {
  if (!meta) return null;
  const match = meta.match(RE_HIGHLIGHT_LINES);
  const matchedGroup = match?.[1];
  if (!matchedGroup) return null;

  const lines: number[] = [];
  for (const part of matchedGroup.split(",")) {
    const range = part.split("-").map((n) => Number.parseInt(n, 10));
    const start = range[0];
    const end = range[1];
    if (start !== undefined && end !== undefined && !Number.isNaN(start) && !Number.isNaN(end)) {
      for (let i = start; i <= end; i++) {
        lines.push(i);
      }
    } else if (start !== undefined && !Number.isNaN(start)) {
      lines.push(start);
    }
  }
  return lines;
}

const symbol = Symbol("highlighted-lines");

export function transformerMetaHighlight(options: { className?: string } = {}) {
  const { className = "highlighted" } = options;
  return {
    name: "transformer-meta-highlight",
    line(this: any, node: any, lineNumber: number) {
      if (!this.options.meta?.__raw) return;
      const meta = this.meta as any;
      meta[symbol] ??= parseMetaHighlightString(this.options.meta.__raw);
      const highlightedLines = (meta[symbol] as number[] | undefined) ?? [];
      if (highlightedLines.includes(lineNumber)) {
        this.addClassToHast(node, className);
      }
      return node;
    },
  };
}

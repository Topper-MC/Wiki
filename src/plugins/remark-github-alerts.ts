import { visit } from "unist-util-visit";

const alertTypeMap: Record<string, { type: string; title: string }> = {
  NOTE: { type: "info", title: "Note" },
  TIP: { type: "idea", title: "Tip" },
  IMPORTANT: { type: "warning", title: "Important" },
  WARNING: { type: "warning", title: "Warning" },
  CAUTION: { type: "error", title: "Caution" },
};

export function remarkGithubAlerts() {
  return (tree: any) => {
    visit(tree, "blockquote", (node: any) => {
      if (!node.children || node.children.length === 0) return;
      const firstChild = node.children[0];
      if (firstChild.type !== "paragraph" || !firstChild.children || firstChild.children.length === 0) return;
      const firstInline = firstChild.children[0];
      if (firstInline.type !== "text") return;

      const match = firstInline.value.match(
        /^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]([^\n]*)(?:\n([\s\S]*))?$/i
      );
      if (!match) return;

      const [, rawType, inlineTitle, restOfFirstText] = match;
      const alertConfig = alertTypeMap[rawType.toUpperCase()] || { type: "info", title: rawType };
      const customTitle = inlineTitle ? inlineTitle.trim() : "";
      const title = customTitle || alertConfig.title;

      if (restOfFirstText !== undefined && restOfFirstText.length > 0) {
        firstInline.value = restOfFirstText;
      } else {
        firstChild.children.shift();
      }

      if (firstChild.children.length === 0) {
        node.children.shift();
      }

      node.type = "mdxJsxFlowElement";
      node.name = "Callout";
      node.attributes = [
        { type: "mdxJsxAttribute", name: "type", value: alertConfig.type },
        { type: "mdxJsxAttribute", name: "title", value: title },
      ];
    });
  };
}

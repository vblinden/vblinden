// @ts-ignore
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm';
// @ts-ignore
import { ocean as theme } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function Syntax({ children, language = 'bash' }: { children: React.ReactNode; language?: string }) {
  const code = children
    ?.toString()
    .split('\n')
    .map((line) => line.trim())
    .join('\n')
    .trim();

  return (
    <SyntaxHighlighter style={theme} language={language}>
      {code}
    </SyntaxHighlighter>
  );
}

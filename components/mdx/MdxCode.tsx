import { useState, useEffect } from "react";
import { IoCopyOutline, IoCheckmark } from "react-icons/io5";
import { Highlight, themes, type Language } from "prism-react-renderer";

interface MdxCodeProps {
  code: string;
  lang?: string;
}

export default function MdxCode({ code, lang }: MdxCodeProps) {
  const [copied, setCopied] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    setIsDark(html.classList.contains("dark"));
    const observer = new MutationObserver(() => {
      setIsDark(html.classList.contains("dark"));
    });
    observer.observe(html, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code to clipboard:", err);
    }
  };

  return (
    <div className="relative my-6 rounded-xl border border-lico dark:border-eigengrau/50 overflow-hidden shadow-sm">
      <div className="flex items-center justify-between px-4 py-2 bg-silver/30 dark:bg-eigengrau/80 border-b border-lico dark:border-eigengrau/50">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
          </div>
          {lang && (
            <span className="text-xs font-semibold text-eigengrau/50 dark:text-silver/50 uppercase tracking-wide ml-2">
              {lang}
            </span>
          )}
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium bg-silver/40 dark:bg-gayvin/60 hover:bg-silver/70 dark:hover:bg-gayvin text-eigengrau/70 dark:text-silver/70 transition-colors"
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <IoCheckmark className="w-3.5 h-3.5 text-celtic" />
              <span className="text-celtic">Copied</span>
            </>
          ) : (
            <>
              <IoCopyOutline className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <Highlight
        theme={isDark ? themes.vsDark : themes.vsLight}
        code={code}
        language={(lang || "plain") as Language}
      >
        {({ tokens, getLineProps, getTokenProps }) => (
          <pre className="!m-0 !rounded-none overflow-x-auto p-4 bg-[#FAFCFE] dark:bg-[#0D0D11] text-sm leading-relaxed font-mono">
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, j) => (
                  <span key={j} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
}

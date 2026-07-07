import type { ReactNode } from "react";

interface Props {
  url?: string;
  children: ReactNode;
  className?: string;
}

export function BrowserFrame({ url = "quadra.studio", children, className = "" }: Props) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-white/10 bg-panel shadow-[0_40px_80px_-30px_rgba(0,0,0,0.7)] ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-white/10 bg-black/40 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <div className="mx-auto flex max-w-sm flex-1 items-center justify-center gap-2 rounded-md bg-white/5 px-3 py-1 text-xs text-fog">
          <span className="opacity-60">https://</span>
          <span>{url}</span>
        </div>
        <div className="w-12" />
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}

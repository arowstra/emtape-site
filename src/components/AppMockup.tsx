"use client";

export default function AppMockup() {
  return (
    <div className="relative mx-auto w-full max-w-xs sm:max-w-sm">
      {/* Phone frame */}
      <div className="relative rounded-[2.5rem] bg-foreground p-2 shadow-2xl">
        {/* Screen */}
        <div className="relative overflow-hidden rounded-[2rem] bg-background">
          {/* Status bar */}
          <div className="flex items-center justify-between px-7 py-3">
            <span className="text-[10px] font-semibold text-muted">9:41</span>
            <div className="flex gap-1">
              <div className="h-2.5 w-2.5 rounded-full bg-muted/30" />
              <div className="h-2.5 w-2.5 rounded-full bg-muted/30" />
              <div className="h-2.5 w-3.5 rounded-sm bg-muted/50" />
            </div>
          </div>

          {/* Tape area */}
          <div className="px-5 pb-3 space-y-2">
            <div className="flex items-center justify-between text-xs text-muted tape-line">
              <span>125.00 + 45.50</span>
              <span>= 170.50</span>
            </div>
            <div className="flex items-center justify-between text-xs text-muted tape-line">
              <span>170.50 × 2</span>
              <span>= 341.00</span>
            </div>
            <div className="flex items-center justify-between text-xs text-muted tape-line">
              <span>341.00 − 12.00</span>
              <span>= 329.00</span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-surface px-3 py-2 text-sm font-semibold tape-line shadow-sm">
              <span>329.00 + 71.00</span>
              <span className="text-accent">= 400.00</span>
            </div>
          </div>

          {/* Current input */}
          <div className="px-5 pb-4">
            <div className="text-right text-4xl font-light tracking-tight tape-line">
              0
            </div>
          </div>

          {/* Keypad */}
          <div className="grid grid-cols-4 gap-px bg-border">
            {[
              ["C", "±", "%", "÷"],
              ["7", "8", "9", "×"],
              ["4", "5", "6", "−"],
              ["1", "2", "3", "+"],
              ["0", ".", "="],
            ].map((row, rowIdx) =>
              row.map((key, colIdx) => {
                const isOperator = ["÷", "×", "−", "+", "="].includes(key);
                const isAction = ["C", "±", "%"].includes(key);
                const isZero = key === "0";
                return (
                  <button
                    key={`${rowIdx}-${colIdx}`}
                    className={`
                      flex h-14 items-center justify-center text-lg font-medium transition-colors
                      ${isZero ? "col-span-2" : ""}
                      ${isOperator ? "bg-accent text-white hover:bg-accent-hover" : isAction ? "bg-surface text-foreground hover:bg-surface-elevated" : "bg-surface text-foreground hover:bg-surface-elevated"}
                    `}
                  >
                    {key}
                  </button>
                );
              })
            )}
          </div>

          {/* Home indicator */}
          <div className="flex justify-center py-2">
            <div className="h-1 w-28 rounded-full bg-muted/30" />
          </div>
        </div>
      </div>

      {/* Decorative blur */}
      <div className="absolute -inset-4 -z-10 rounded-full bg-accent/10 blur-3xl" />
    </div>
  );
}

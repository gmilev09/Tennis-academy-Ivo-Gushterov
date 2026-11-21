import { Zap } from "lucide-react";
import { Fragment } from "react";

export default function Marquee({ items, slow = false }) {
  const row = [...items, ...items, ...items, ...items];
  return (
    <div className="border-line relative overflow-hidden border-y py-5">
      <div className={`marquee-track ${slow ? "slow" : ""}`}>
        {[0, 1].map((half) => (
          <div key={half} className="flex shrink-0 items-center" aria-hidden={half === 1}>
            {row.map((item, i) => (
              <Fragment key={`${half}-${i}`}>
                <span className="font-display px-6 text-2xl font-medium tracking-[0.08em] whitespace-nowrap uppercase sm:text-3xl">
                  {item}
                </span>
                <Zap className="text-ball h-5 w-5 shrink-0" fill="currentColor" />
              </Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

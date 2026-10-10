import React, { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  /** Approximate reserved height before mount (reduces CLS). */
  minHeight?: number | string;
  /** How early to start loading relative to viewport. */
  rootMargin?: string;
  className?: string;
};

/**
 * Defers mounting (and thus dynamic chunk fetch) until near the viewport.
 * next/dynamic alone still downloads if the component is in the tree.
 */
const LazyWhenVisible: React.FC<Props> = ({
  children,
  minHeight,
  rootMargin = "300px 0px",
  className,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || visible) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [rootMargin, visible]);

  return (
    <div
      ref={ref}
      className={className}
      style={
        minHeight !== undefined
          ? { minHeight, contentVisibility: "auto" as const }
          : { contentVisibility: "auto" as const }
      }
    >
      {visible ? children : null}
    </div>
  );
};

export default LazyWhenVisible;

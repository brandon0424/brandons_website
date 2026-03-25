"use client";

import { useEffect, useRef, useState } from "react";

type ResumeFrameProps = {
  srcDoc: string;
};

function measureHeight(iframe: HTMLIFrameElement): number {
  const doc = iframe.contentDocument;

  if (!doc) {
    return 0;
  }

  const { body, documentElement } = doc;

  return Math.max(
    body.scrollHeight,
    body.offsetHeight,
    documentElement.scrollHeight,
    documentElement.offsetHeight
  );
}

export function ResumeFrame({ srcDoc }: ResumeFrameProps) {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [height, setHeight] = useState<number>(1600);

  useEffect(() => {
    const iframe = iframeRef.current;

    if (!iframe) {
      return;
    }

    let observer: ResizeObserver | null = null;
    let frameId = 0;
    let timeoutId = 0;

    const updateHeight = () => {
      const nextHeight = measureHeight(iframe);

      if (nextHeight > 0) {
        setHeight(nextHeight);
      }
    };

    const handleLoad = () => {
      updateHeight();

      const doc = iframe.contentDocument;

      if (!doc) {
        return;
      }

      observer = new ResizeObserver(() => {
        cancelAnimationFrame(frameId);
        frameId = requestAnimationFrame(updateHeight);
      });

      observer.observe(doc.body);
      observer.observe(doc.documentElement);

      void doc.fonts?.ready.then(updateHeight);
      timeoutId = window.setTimeout(updateHeight, 150);
    };

    iframe.addEventListener("load", handleLoad);

    return () => {
      iframe.removeEventListener("load", handleLoad);
      observer?.disconnect();
      cancelAnimationFrame(frameId);
      window.clearTimeout(timeoutId);
    };
  }, [srcDoc]);

  return (
    <iframe
      ref={iframeRef}
      srcDoc={srcDoc}
      title="Brandon Lee Smith Resume"
      className="block w-full border-0 bg-transparent"
      style={{ height }}
    />
  );
}

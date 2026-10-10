import React, { useEffect, useId } from "react";

const VideoBox = ({ Videolink }: { Videolink: string }) => {
  const playId = useId();
  const overlayId = useId();

  useEffect(() => {
    const player = document.getElementById(playId);
    const videoOverlay = document.getElementById(overlayId);

    const openVideo = (e: Event) => {
      e.preventDefault();
      if (!videoOverlay) return;
      videoOverlay.classList.add("open");
      videoOverlay.innerHTML += `<iframe width="988" height="556" src="${Videolink}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    };

    const close_video = () => {
      videoOverlay?.classList.remove("open");
      videoOverlay?.querySelector("iframe")?.remove();
    };

    const onOverlayClick = (e: Event) => {
      e.preventDefault();
      close_video();
    };

    const onKeyUp = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close_video();
      }
    };

    player?.addEventListener("click", openVideo);
    videoOverlay?.addEventListener("click", onOverlayClick);
    document.addEventListener("keyup", onKeyUp);

    return () => {
      player?.removeEventListener("click", openVideo);
      videoOverlay?.removeEventListener("click", onOverlayClick);
      document.removeEventListener("keyup", onKeyUp);
    };
  }, [Videolink, overlayId, playId]);

  return (
    <div className="cardVideoSection bg-[#1f1f23] w-full mdTab:w-[400px] h-[250px] rounded-xl mt-5 relative">
      <div className="">
        <div className="">
          <button
            id={playId}
            type="button"
            className="video-play-button"
            aria-label="Play video"
          >
            <span aria-hidden="true"></span>
          </button>
        </div>
        <div id={overlayId} className="video-overlay" role="dialog" aria-modal="true" aria-label="Video player">
          <button type="button" className="video-overlay-close" aria-label="Close video">
            &times;
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoBox;

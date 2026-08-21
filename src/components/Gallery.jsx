import { useRef, useEffect, useCallback } from "react";

function Gallery() {
  const galleryRef = useRef(null);
  const autoScrollRef = useRef(null);
  const resumeTimeoutRef = useRef(null);
  const isHoveredRef = useRef(false);
  const isPausedRef = useRef(false);
  const isResettingRef = useRef(false); // NEW: guards the loop-back

  const galleryItems = [
    { image: "/gallery-img1.png", title: "SizzlePro Non-Stick Pan" },
    { image: "/gallery-img2.png", title: "Grain Slice Board Duo" },
    { image: "/gallery-img3.png", title: "Bamboo Utensil Set" },
    { image: "/gallery-img4.png", title: "Glow Pot Ceramic" },
    { image: "/gallery-img5.png", title: "StoneSip Ceramic Cup" },
    { image: "/gallery-img6.png", title: "Cast Iron Skillet Classic" },
    { image: "/gallery-img7.png", title: "Linen Table Runner" },
    { image: "/gallery-img8.png", title: "Woven Basket Trio" },
    { image: "/gallery-img9.png", title: "Terra Cotta Herb Pots" },
    { image: "/gallery-img10.png", title: "Oak Cutting Board" },
    { image: "/gallery-img11.png", title: "SizzlePro Non-Stick Pan" },
    { image: "/gallery-img12.png", title: "Grain Slice Board Duo" },
    { image: "/gallery-img13.png", title: "Bamboo Utensil Set" },
    { image: "/gallery-img14.png", title: "Glow Pot Ceramic" },
    { image: "/gallery-img15.png", title: "StoneSip Ceramic Cup" },
    { image: "/gallery-img16.png", title: "Cast Iron Skillet Classic" },
    { image: "/gallery-img17.png", title: "Linen Table Runner" },
    { image: "/gallery-img18.png", title: "Woven Basket Trio" },
    { image: "/gallery-img19.png", title: "Terra Cotta Herb Pots" },
    { image: "/gallery-img20png.avif", title: "Oak Cutting Board" },
  ];

  const pauseAutoScroll = () => {
    isPausedRef.current = true;

    clearTimeout(resumeTimeoutRef.current);

    resumeTimeoutRef.current = setTimeout(() => {
      isPausedRef.current = false;
    }, 1500);
  };

  const scrollLeft = () => {
    pauseAutoScroll();

    galleryRef.current?.scrollBy({
      left: -320,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    pauseAutoScroll();

    galleryRef.current?.scrollBy({
      left: 320,
      behavior: "smooth",
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      scrollLeft();
    }

    if (e.key === "ArrowRight") {
      e.preventDefault();
      scrollRight();
    }
  };

  const startAutoScroll = useCallback(() => {
    const el = galleryRef.current;

    if (!el) return;

    autoScrollRef.current = setInterval(() => {
      if (isHoveredRef.current || isPausedRef.current) return;

      // If we're mid-reset, just wait for it to land before doing anything else
      if (isResettingRef.current) {
        if (el.scrollLeft <= 1) {
          isResettingRef.current = false;
        }
        return;
      }

      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 5) {
        isResettingRef.current = true;

        el.scrollTo({
          left: 0,
          behavior: "smooth",
        });

        return;
      }

      el.scrollBy({
        left: 1,
        behavior: "auto",
      });
    }, 20);
  }, []);

  useEffect(() => {
    startAutoScroll();

    return () => {
      clearInterval(autoScrollRef.current);
      clearTimeout(resumeTimeoutRef.current);
    };
  }, [startAutoScroll]);

  const handleMouseEnter = () => {
    isHoveredRef.current = true;
  };

  const handleMouseLeave = () => {
    isHoveredRef.current = false;
  };

  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-header">
        <h2>
          Thoughtful, Planet-Prioritizing Ideas
          <br />
          and Inspiration <em>✧ Gallery</em>
        </h2>

        <div className="gallery-arrows">
          <button onClick={scrollLeft} aria-label="Scroll left">
            ←
          </button>

          <button onClick={scrollRight} aria-label="Scroll right">
            →
          </button>
        </div>
      </div>

      <div
        className="gallery-container"
        ref={galleryRef}
        tabIndex={0}
        role="region"
        aria-label="Gallery, use left and right arrow keys to scroll"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onKeyDown={handleKeyDown}
      >
        {galleryItems.map((item, index) => (
          <div className="gallery-card" key={index}>
            <img src={item.image} alt={item.title} />

            <div className="gallery-overlay">
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;

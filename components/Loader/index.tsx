import React from "react";
import lottie from "lottie-web";
import styles from "./loader.module.css";

export interface LoaderProps {
  isLoading: boolean;
}

const Loader: React.FC<LoaderProps> = (props) => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const animation = lottie.loadAnimation({
      container: containerRef.current, // the dom element that will contain the animation
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: props.isLoading
        ? require("./loading.json")
        : require("./notFound.json"), // the path to the animation json
    });

    return () => animation.destroy();
  }, [props.isLoading]);

  return (
    <div className={styles.container}>
      <div ref={containerRef}></div>
      <p>{props.isLoading ? "Fetching Search Results" : "No results found"}</p>
    </div>
  );
};

export default Loader;

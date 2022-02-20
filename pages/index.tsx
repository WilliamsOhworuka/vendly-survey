import Head from "next/head";
import Continue from "../components/Continue";
import Loader from "../components/Loader";
import Image from "next/image";
import styles from "../styles/home.module.scss";
import { ChangeEvent, useState } from "react";
import Back from "../components/Back";

export default function Home() {
  const [handle, setHandle] = useState("");
  const [loading, setLoading] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [timerId, setTimerId] = useState<null | ReturnType<typeof setTimeout>>(
    null
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value;

    setHandle(value.trim());

    if (value.trim().length) {
      // clear timeout if user enters new value
      if (timerId) clearTimeout(timerId);

      setLoading(true);

      if (!showLoader) setShowLoader(true);

      const timeId: null | ReturnType<typeof setTimeout> = setTimeout(() => {
        setLoading(false);
      }, 2000);

      setTimerId(timeId);
    }
  };

  // hide loader after 2 seconds
  const handleBlur = () => {
    setShowLoader(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image
          src="/images/logo.svg"
          alt="logo"
          width="90.01px"
          height="32.3px"
        />
      </div>
      <div className={styles.body}>
        <h3> Survey complete!</h3>
        <div className={styles.status}>
          <Image
            src="/images/flag.svg"
            alt="complete"
            height="101px"
            width="109px"
          />
        </div>
        <div className={styles.question}>
          <h4>Pass it on?</h4>
          <p>Nominate someone else to take this incentivized survey.</p>
        </div>
        <div className={styles.form}>
          <div className={styles.inputContainer}>
            <input
              value={handle}
              onChange={handleChange}
              className={styles.formInput}
              type="text"
              placeholder="Search/ Insert thier Twitter handle"
              onBlur={handleBlur}
            />
            {handle.length ? <button>ok</button> : null}
          </div>
          <button>
            Skip <Continue className={styles.icon} />
          </button>
        </div>
        <p className={styles.footer}>
          {!showLoader ? (
            <>
              Read <span>Instructions</span>
            </>
          ) : (
            <button>
              <Back /> Go back
            </button>
          )}
        </p>
        {showLoader ? <Loader isLoading={loading} /> : null}
      </div>
    </div>
  );
}

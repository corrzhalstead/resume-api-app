import { Link } from "react-router-dom";
import styles from "./Public.module.css";

export default function Public() {
  return (
    <>
      <section className={styles.public}>
        <header>
          <h1>
            Welcome to <span className={styles.nowrap}>Corrz Coffee Shop!</span>
          </h1>
        </header>
        <main className={styles.publicMain}>
          <p>
            Located in Beautiful Downtown Foo City, Corrz Coffee Shop provides a
            fresh and delicious coffee you've ever had.
          </p>
          <address className={styles.publicAdd}>
            Corrz Coffee Shop
            <br />
            555 Foo Drive
            <br />
            Foo City, WA 12345
            <br />
            <a href="tel:+15555555555">(555) 555-5555</a>
          </address>
          <br />
          <p>Owner: Corrz H.</p>
        </main>
        <footer>
          <Link to="/login">Employee Login</Link>
        </footer>
      </section>
    </>
  );
}

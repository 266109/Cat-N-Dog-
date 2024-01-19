import Footer from "./Footer";
import Header from "./Header";
import styles from "./Page1.module.css";
import logo from "D:/React Learning/Assignment Project/Assignment Project/src/assets/photo-1506903536293-8419385acdce.png";

const Page1 = () => {
  return (
    <>
      <Header />
      <div id={styles.content}>
        <img src={logo} alt="" className="" />
        <p id={styles.para}>
          <h2>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim ab
            numquam sunt sapiente beatae in vitae! Corporis, nam delectus
          </h2>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. In quos
          facilis quisquam obcaecati soluta. Modi, iusto? Quasi commodi repellat
          consequatur ratione magnam est impedit nulla omnis a facere, ipsa
          provident.
        </p>
        <div id={styles.floatingbox}>
          <h2>
            <input
              type="text"
              name=""
              placeholder="Enter Text"
              id=""
              style={{
                backgroundColor: "transparent",
                width: "90%",
                border: "none",
              }}
            />
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Suscipitspan Lorem ipsum,
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page1;

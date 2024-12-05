import { useLoaderData } from "react-router-dom";
import LatestVisa from "../../components/LatestVisa/LatestVisa";

const Home = () => {
  const visas = useLoaderData();
  console.log(visas);

  return (
    <main>
      <section>
        <h2>Banner</h2>
      </section>
      <section>
        <h2>Latest Section</h2>
        <LatestVisa visas={visas} />
      </section>
      <section>
        <h2>extra 1</h2>
      </section>
      <section>
        <h2>extra 2</h2>
      </section>
      <section>
        <h2>extra 3</h2>
      </section>
    </main>
  );
};

export default Home;

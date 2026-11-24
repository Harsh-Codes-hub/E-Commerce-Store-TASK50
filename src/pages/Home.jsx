import Container from "../components/Container";

const Home = () => {
  return (
    <>
      <section className="flex-1 w-full py-6">
        <Container>
          <section className="flex flex-col items-start gap-6">
            <h1 className="text-(--text) text-3xl">Welcome to our Store</h1>
            <h2 className="text-(--text-muted) text-4xl">Discover products across different categories.</h2>
            <button type="button" className="text-(--text-muted) py-4 px-4 rounded-3xl">
              Explore Shop <i className="ri-arrow-right-line"></i>
            </button>
          </section>
        </Container>
      </section>
    </>
  );
};

export default Home;

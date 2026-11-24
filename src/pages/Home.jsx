import Container from "../components/Container"

const Home = () => {
  return (
    <>
      <section className="flex-1 w-full py-6">
        <Container>
          <section className="">
            <h1>Welcome to our Store</h1>
            <h2>Discover products across different categories.</h2>
            <button type="button">Explore Shop <i className="ri-arrow-right-line"></i></button>
          </section>
        </Container>
      </section>
    </>
  )
}

export default Home

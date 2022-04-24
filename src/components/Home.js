import Card from "./Card";
function Home() {
  return (
    <div id="home" className="home-background">
      <div className="center">
        <Card
          className="card mb-3"
          maxWidth="20rem"
          txtcolor="black"
          header="MyBank"
          title="Welcome to MyBank"
          text="We Built This Bank For You. You're Not Just Another Customer."
          body={<img src="ENSO.png" className="img-fluid" alt="Logo" />}
        />
      </div>
    </div>
  );
}

export default Home;
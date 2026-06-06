import Info from "./components/Info";
import MoreInfo from "./components/MoreInfo";
import Footer from "./components/Footer";

function App() {
  const aboutText =
    " I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.";

  const interestText =
    "Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.";

  return (
    <main className="main">
      <Info />
      <MoreInfo heading="About" para={aboutText} />
      <MoreInfo heading="Interests" para={interestText} />
      <Footer />
    </main>
  );
}

export default App;

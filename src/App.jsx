import Nav from "./sections/Nav";
import Hero from "./sections/Hero";
import About from "./sections/About";
import SuccessStories from "./sections/SuccessStories";
import Courses from "./sections/Courses";
import Instructors from "./sections/Instructors";
import Contact from "./sections/Contact";
import FAQs from "./sections/FAQs";
import Footer from "./sections/Footer";

const FloatingActionButton = () => {
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
  };
  return (
    <div
      onClick={toggleDarkMode}
      className="duration-100 active:scale-95 flexCenter h-10 w-10 rounded-full bg-slate-800 text-slate-50 border-2 border-white z-10 fixed bottom-2 right-2 md:right-10 md:bottom-10 cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6"
      >
        <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8V16Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 4V8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16V20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z"
        />
      </svg>
    </div>
  );
};

function App() {
  const Container = ({ children, className = "" }) => {
    return (
      <div
        className={`w-full flexCenter px-2 md:px-3 lg:px-8 sm:pt-6 md:py-4 lg:pt-6 ${className}`}
      >
        <div className="w-full mx-auto max-w-7xl  sm:px-6 lg:px-8 flexCenter">
          {children}
        </div>
      </div>
    );
  };

  return (
    <>
      {/* nav */}
      <Container className="fixed top-0 left-0 right-0 z-10 py-0! opacity-95 h-16 bg-blue-50 dark:bg-slate-800 shadow-md/10">
        {/* <div className="bbb"> */}
        <Nav />
        {/* </div> */}
      </Container>

      {/* hero */}
      <Container className="bg-blue-50 dark:bg-slate-800 py-32! md:p-44!">
        {/* <div className="bbg"> */}
        <Hero />
        {/* </div> */}
      </Container>

      {/* about */}
      <Container>
        {/* <div className="bbb"> */}
        <About />
        {/* </div> */}
      </Container>

      {/* success stories */}
      <Container>
        {/* <div className="bbg"> */}
        <SuccessStories />
        {/* </div> */}
      </Container>

      {/* courses */}
      <Container>
        {/* <div className="bbb"> */}
        <Courses />
        {/* </div> */}
      </Container>

      {/* instructors */}
      <Container>
        {/* <div className="bbg"> */}
        <Instructors />
        {/* </div> */}
      </Container>

      {/* contact */}
      <Container>
        {/* <div className="bbb"> */}
        <Contact />
        {/* </div> */}
      </Container>

      {/* faqs */}
      <Container>
        {/* <div className="bbg"> */}
        <FAQs />
        {/* </div> */}
      </Container>

      {/* footer */}
      <Container
        className="bg-blue-50 dark:bg-slate-800 mt-5"
      >
        {/* <div className="bbb"> */}
        <Footer />
        {/* </div> */}
      </Container>
      <FloatingActionButton />
    </>
  );
}

export default App;

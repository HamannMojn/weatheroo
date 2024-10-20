import Logo from "../Logo/Logo";

//Simple footer to display resources and links
const Footer = () => {
  return (
    <footer>
      <hr />
      <div className="container">
        <section>
          <nav>
            <aside>
              <ul>
                <li>
                  <Logo />
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/jacob-frost-hamann-806a61198/" className="contrast">
                    Built by Jacob Frost Hamann
                  </a>
                </li>
              </ul>
            </aside>
            <aside>
              <ul>
                <li>
                  <strong>Resources</strong>
                </li>
                <li>
                  <a href="https://react.dev/">React</a>
                </li>
                <li>
                  <a href="https://picocss.com/">Pico.Css</a>
                </li>
                <li>
                  <a href="https://www.visualcrossing.com/">
                    Visual Crossing Weather API
                  </a>
                </li>
              </ul>
            </aside>
          </nav>
        </section>
        <section></section>
      </div>
    </footer>
  );
};

export default Footer;

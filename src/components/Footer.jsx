function Footer() {
  return <footer className="page-footer teal accent-4">
    <div className="footer-copyright teal accent-4">
      <div className="container">
      © {new Date().getFullYear()} Copyright Text
        <a 
          className="grey-text text-lighten-4 right"
          href="https://stad07.github.io/react-shop" 
          target="_blank" 
          rel="noreferrer"
        > 
          Repo
        </a>
      </div>
    </div>
  </footer>
}

export {Footer}
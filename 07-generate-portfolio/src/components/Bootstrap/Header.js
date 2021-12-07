const Header = ({ dark, children, className, to, Link }) => {
    // conditional statement, whichever value will be initially given true will be displayed
    dark = !!dark ? "dark" : "light";
    return (
      <nav
        className={
            // the `{dark}` here is variable passed by the conditional statement from line 3
          `navbar navbar-${dark} bg-${dark}` + (className ? " " + className : "")
        }
      >
        {to ? (
          <Link to={to} className="navbar-brand">
              {/* this is a prop, whatever you put inside the element will be passed here. */}
            {children}
          </Link>
        ) : (
            // exporting the header
          <span className="navbar-brand">{children}</span>
        )}
      </nav>
    );
  };
  
  export default Header;
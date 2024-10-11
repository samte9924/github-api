function CustomLink({ href, children }) {
  const path = window.location.pathname;

  return (
    <a href={href} className={"custom-link" + (path === href ? " active" : "")}>
      {children}
    </a>
  );
}

export default CustomLink;

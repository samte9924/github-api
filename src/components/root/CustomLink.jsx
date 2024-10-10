function CustomLink({ href, children }) {
  const path = window.location.pathname;

  return (
    <li className={"nav-link" + (path === href ? " active" : "")}>
      <a href={href}>{children}</a>
    </li>
  );
}

export default CustomLink;

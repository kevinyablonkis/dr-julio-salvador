import { NavLink as NavLinkReactRouter } from "react-router-dom";

export const NavLink = ({ to, children, ...props }) => {
  return (
    <NavLinkReactRouter
      {...props}
      to={to}
    >
      {children}
    </NavLinkReactRouter>
  );
};

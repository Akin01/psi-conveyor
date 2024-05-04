import PropType from "prop-types";

const Layout = ({ children }) => {
  return <div className="w-full max-h-fit p-10 bg-[#DDE6ED]">{children}</div>
};

Layout.propTypes = {
  children: PropType.node.isRequired,
};

export default Layout;

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-64 h-screen bg-purple-900 p-6 fixed left-0 top-0 flex flex-col space-y-8 shadow-lg">
      {/* Project Title Box */}
      <div className="bg-purple-700 p-4 rounded-lg text-center shadow-md">
        <h1 className="text-2xl font-bold text-white">QA-Bot</h1>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col space-y-4">
        <NavItem to="/" label="Home" icon="🏠" />
        <NavItem to="/summary" label="Summary" icon="📄" />
        <NavItem to="/specifications" label="Specifications" icon="⚙️" />
        <NavItem to="/history" label="History" icon="📜" />
      </nav>

      {/* Decorative Box */}
      <div className="bg-purple-700 p-3 rounded-lg text-center shadow-md text-sm text-white">
        AI-Powered Analysis <br /> 📊 🔊
      </div>
    </div>
  );
};

const NavItem = ({ to, label, icon }) => {
  return (
    <Link
      to={to}
      className="flex items-center space-x-3 bg-purple-800 p-3 rounded-lg hover:bg-pink-600 transition-all duration-300 shadow-md"
    >
      <span className="text-lg">{icon}</span>
      <span className="text-white font-medium">{label}</span>
    </Link>
  );
};

export default Navbar;

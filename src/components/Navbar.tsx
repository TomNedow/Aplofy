import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-3 flex justify-between items-center shadow-md">
      {/* Logo / Brand */}
      <Link to="/" className="text-5xl font-bold">
        TimeOffCalendar
      </Link>

      {/* Navigation Links */}
      <div className="space-x-6">
        <Link to="/" className="hover:text-gray-200">
          Home
        </Link>
        <Link to="/dashboard" className="hover:text-gray-200">
          Dashboard
        </Link>
        <Link to="/timeoff" className="hover:text-gray-200">
          Request Time Off
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
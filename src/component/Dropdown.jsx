import { useState, useEffect, useRef } from "react";

export default function DropdownMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null); // Reference for dropdown

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    return () => { document.removeEventListener("mousedown", handleClickOutside); };
  }, []);

  return (
    <div className="relative inline-block ">
      {/* Dropdown Button */}
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => setOpen(!open)}
      >
        Toggle Menu
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div ref={menuRef} className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded">
          <ul className="py-2">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 1</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 2</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 3</li>
          </ul>
        </div>
      )}
    </div>
  );
}

import React, { useState, useEffect, useRef } from "react";

function Alumni() {
  const [selectedAlumni, setSelectedAlumni] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const modalRef = useRef(null);

  const alumni = [
    {
      name: "Andrei Cimoune Alvarico",
      profession: "Top 1 Programmer PH",
      image: "",
      collegeprogram: "",
      specialization: "",
      yearstarted: "",
      yeargraduated: "",
      joblanding: "",
      employmentstatus: "",
      workindustry: "",
      currentprofession: "",
      maritalstatus: "",
      salaryrange: "",
      employmentplace: "",
      secondaryeducation: "",
      tertiaryeducation: "",
      career: "",
      careerposition: "",
      linkedin: "",
      facebook: "",
      instagram: "",
      email: "",
      mobilenumber: "",
    },
    {
      name: "Alessandra Claire Cruz",
      profession: "Software Developer ",
      image: "",
    },
    {
      name: "James Lorenz Santos",
      profession: "Software Engineering Specialist",
      image: "",
    },
    {
      name: "Denise Anne Valdivieso",
      profession: "Multi-awarded Software Engineer",
      image: "",
    },
  ];

  const openModal = (alumni) => {
    setSelectedAlumni(alumni);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAlumni(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isModalOpen]);

  const filteredAlumni = alumni.filter((alumni) =>
    alumni.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="text-black font-light mx-4 md:mx-8 lg:mx-16 mt-8 mb-12">
      <h1 className="text-xl mb-4">Alumni</h1>

      <div className="mb-4 relative">
        <input
          type="text"
          placeholder="Search Alumni"
          className="w-full border border-black rounded-lg px-4 py-2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <span
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 cursor-pointer"
          onClick={() => setSearchTerm("")}
        >
          X
        </span>
      </div>

      <div className="flex md:flex-row">
        <div className="mb-6">
          <span className="text-sm">Sort by:</span>
          <select className="ml-2 border border-black rounded px-3 py-1 text-sm mr-10">
            <option>Name (A-Z)</option>
            <option>Name (Z-A)</option>
          </select>
        </div>
        <div className="mb-6">
          <span className="text-sm">Filter:</span>
          <select className="ml-2 border border-black rounded px-3 py-1 text-sm">
            <option>Computer Science</option>
            <option>Information Systems</option>
            <option>Information Technology</option>
          </select>
        </div>
      </div>

      <div className="text-lg mb-4">All Alumni</div>

      <hr className="mb-6 border-black" />

      {filteredAlumni.map((alumni, index) => (
        <div
          key={index}
          className="mb-4 p-4 border border-black rounded-lg cursor-pointer hover:bg-gray-200 transition-colors"
          onClick={() => openModal(alumni)}
        >
          <div className="text-md font-medium mb-1">{alumni.name}</div>
          <div className="text-sm text-black-600">{alumni.profession}</div>
        </div>
      ))}

      {/* Modal */}
      {isModalOpen && selectedAlumni && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
          style={{ zIndex: 9999 }}
        >
          <div
            ref={modalRef}
            className="bg-white p-6 md:p-8 lg:p-12 rounded-lg max-w-full md:max-w-3xl lg:max-w-4xl w-full h-auto overflow-y-auto max-h-full relative"
          >
            <button
              className="absolute top-4 right-4 text-black text-2xl"
              onClick={closeModal}
            >
              &times;
            </button>

            <div>
              <h1 className="text-xl mb-4">Primary Information</h1>
              <p>Name</p>
              <p>{selectedAlumni.name}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Alumni;

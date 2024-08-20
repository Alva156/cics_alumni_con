import React, { useState, useRef } from 'react';

function AdminReports() {
  // Define the available fields for the table and their corresponding data keys
  const fieldToKeyMap = {
    'Profession': 'profession',
    'College Program': 'collegeProgram',
    'Specialization': 'specialization',
    'Year Started on College Program': 'yearStartedCollegeProgram',
    'Year Graduated on College Program': 'yearGraduatedCollegeProgram',
    'Time it took to land a job after graduation': 'timeToLandJob',
    'Employment Status': 'employmentStatus',
    'Work Industry': 'workIndustry',
    'Is current profession in line with college degree': 'professionInLineWithDegree',
    'Marital Status': 'maritalStatus',
    'Salary Range': 'salaryRange',
    'Place of Employment': 'placeOfEmployment',
    'LinkedIn': 'linkedIn',
    'Facebook': 'facebook',
    'Instagram': 'instagram',
    'Email Address': 'emailAddress',
    'Mobile Number': 'mobileNumber',
    'Other': 'other'
  };

  const availableFields = Object.keys(fieldToKeyMap);
  const availablePrograms = ['Computer Science', 'Information Systems', 'Information Technology'];

  // State to store selected programs and fields
  const [selectedPrograms, setSelectedPrograms] = useState([]);
  const [selectedFields, setSelectedFields] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownType, setDropdownType] = useState('');

  const dropdownRef = useRef(null);

  // Handle clicks outside of dropdown to close it
  useState(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleDropdownToggle = (type) => {
    setDropdownType(type);
    setDropdownOpen(prev => (prev && dropdownType === type) ? false : true);
  };

  const handleProgramSelection = (event) => {
    const selectedProgram = event.target.value;
    setSelectedPrograms((prevSelectedPrograms) => {
      if (selectedProgram === 'All Programs') {
        return ['All Programs'];
      }
      if (prevSelectedPrograms.includes('All Programs')) {
        return [selectedProgram];
      }
      if (prevSelectedPrograms.includes(selectedProgram)) {
        return prevSelectedPrograms.filter(program => program !== selectedProgram);
      } else {
        return [...prevSelectedPrograms, selectedProgram];
      }
    });
  };

  const handleFieldSelection = (event) => {
    const selectedField = event.target.value;
    setSelectedFields((prevSelectedFields) => {
      if (selectedField === 'All Fields') {
        return ['All Fields'];
      }
      if (prevSelectedFields.includes('All Fields')) {
        return [selectedField];
      }
      if (prevSelectedFields.includes(selectedField)) {
        return prevSelectedFields.filter(field => field !== selectedField);
      } else {
        return [...prevSelectedFields, selectedField];
      }
    });
  };

  // Sample data for the table
  const data = [
    {
      firstName: 'John',
      lastName: 'Doe',
      birthday: '1990-01-01',
      profession: 'Software Engineer',
      collegeProgram: 'Computer Science',
      specialization: 'Artificial Intelligence',
      yearStartedCollegeProgram: '2008',
      yearGraduatedCollegeProgram: '2012',
      timeToLandJob: '3 months',
      employmentStatus: 'Employed',
      workIndustry: 'Technology',
      professionInLineWithDegree: 'Yes',
      maritalStatus: 'Single',
      salaryRange: '$60,000 - $80,000',
      placeOfEmployment: 'Tech Corp',
      linkedIn: 'https://linkedin.com/in/johndoe',
      facebook: 'https://facebook.com/johndoe',
      instagram: 'https://instagram.com/johndoe',
      emailAddress: 'john.doe@example.com',
      mobileNumber: '1234567890',
      other: 'N/A'
    },
    {
      firstName: 'Jane',
      lastName: 'Smith',
      birthday: '1992-05-12',
      profession: 'Data Analyst',
      collegeProgram: 'Information Systems',
      specialization: 'Data Science',
      yearStartedCollegeProgram: '2010',
      yearGraduatedCollegeProgram: '2014',
      timeToLandJob: '6 months',
      employmentStatus: 'Employed',
      workIndustry: 'Finance',
      professionInLineWithDegree: 'Yes',
      maritalStatus: 'Married',
      salaryRange: '$50,000 - $70,000',
      placeOfEmployment: 'Finance Inc',
      linkedIn: 'https://linkedin.com/in/janesmith',
      facebook: 'https://facebook.com/janesmith',
      instagram: 'https://instagram.com/janesmith',
      emailAddress: 'jane.smith@example.com',
      mobileNumber: '9876543210',
      other: 'N/A'
    },
    {
      firstName: 'Michael',
      lastName: 'Johnson',
      birthday: '1988-08-20',
      profession: 'Network Administrator',
      collegeProgram: 'Information Technology',
      specialization: 'Networking',
      yearStartedCollegeProgram: '2006',
      yearGraduatedCollegeProgram: '2010',
      timeToLandJob: '2 months',
      employmentStatus: 'Employed',
      workIndustry: 'Technology',
      professionInLineWithDegree: 'Yes',
      maritalStatus: 'Single',
      salaryRange: '$70,000 - $90,000',
      placeOfEmployment: 'Tech Solutions',
      linkedIn: 'https://linkedin.com/in/michaeljohnson',
      facebook: 'https://facebook.com/michaeljohnson',
      instagram: 'https://instagram.com/michaeljohnson',
      emailAddress: 'michael.johnson@example.com',
      mobileNumber: '5551234567',
      other: 'N/A'
    },
  ];

  // Filter data based on selected programs
  const filteredData = data.filter(row => 
    selectedPrograms.includes('All Programs') || selectedPrograms.includes(row.collegeProgram)
  );

  return (
    <div className='text-black font-light mx-4 md:mx-8 lg:mx-16 mt-8 mb-12'>
      <h1 className="text-xl mb-4">Reports</h1>

      {/* FILTERS */}
      <div className="text-sm mb-4">Filters:</div>
      <div className="sm:flex block sm:space-x-4">
        {/* Programs Dropdown */}
        <div className="relative mb-6">
        <button
  onClick={() => handleDropdownToggle('programs')}
  className="border border-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 flex justify-between items-center sm:w-96 w-full relative bg-transparent"
>
            <span className="">Program</span>
            <svg
              className="w-2.5 h-2.5 ms-3 absolute right-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          {dropdownOpen && dropdownType === 'programs' && (
            <div ref={dropdownRef} className="z-10 absolute sm:w-96 w-full bg-white divide-y divide-gray-100 rounded-lg shadow mt-2">
              <ul className="p-3 space-y-3 text-sm text-gray-700">
                {['All Programs', ...availablePrograms].map((program, idx) => (
                  <li key={idx} className="flex items-center">
                    <input
                      type="checkbox"
                      value={program}
                      checked={selectedPrograms.includes(program)}
                      onChange={handleProgramSelection}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                    />
                    <label className="ms-2 text-sm font-medium">{program}</label>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Fields Dropdown */}
        <div className="relative mb-6">
          <button
            onClick={() => handleDropdownToggle('fields')}
            className="border border-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 flex justify-between items-center sm:w-96 w-full relative bg-transparent"
          >
            <span>Fields</span>
            
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          {dropdownOpen && dropdownType === 'fields' && (
            <div ref={dropdownRef} className="z-10 absolute sm:w-96 w-full bg-white divide-y divide-gray-100 rounded-lg shadow mt-2">
              <ul className="p-3 space-y-3 text-sm text-gray-700">
                {['All Fields', ...availableFields].map((field, idx) => (
                  <li key={idx} className="flex items-center">
                    <input
                      type="checkbox"
                      value={field}
                      checked={selectedFields.includes(field)}
                      onChange={handleFieldSelection}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                    />
                    <label className="ms-2 text-sm font-medium">{field}</label>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto mt-6">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className='text-xs'>
              <th className="px-4 py-2 border">First Name</th>
              <th className="px-4 py-2 border">Last Name</th>
              <th className="px-4 py-2 border">Birthday</th>
              {selectedFields.length === 0 || selectedFields.includes('All Fields')
                ? Object.keys(fieldToKeyMap).map((field, idx) => (
                    <th key={idx} className="px-4 py-2 border">{field}</th>
                  ))
                : selectedFields.map((field, idx) => (
                    <th key={idx} className="px-4 py-2 border">{field}</th>
                  ))}
            </tr>
          </thead>
          <tbody className='text-xs'>
            {filteredData.map((row, rowIndex) => (
              <tr key={rowIndex} className="text-center">
                <td className="px-4 py-2 border">{row.firstName}</td>
                <td className="px-4 py-2 border">{row.lastName}</td>
                <td className="px-4 py-2 border">{row.birthday}</td>
                {selectedFields.length === 0 || selectedFields.includes('All Fields')
                  ? Object.keys(fieldToKeyMap).map((field, fieldIndex) => (
                      <td key={fieldIndex} className="px-4 py-2 border">
                        {row[fieldToKeyMap[field]] || 'N/A'}
                      </td>
                    ))
                  : selectedFields.map((field, fieldIndex) => (
                      <td key={fieldIndex} className="px-4 py-2 border">
                        {row[fieldToKeyMap[field]] || 'N/A'}
                      </td>
                    ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center mt-16 space-x-3">
            <div className="">
              <button className="btn md:w-64 w-52 bg-blue text-white">
                Export to PDF
              </button>
            </div>
            <div className="">
              <button className="btn md:w-64 w-52 bg-green text-white">
                Export to Excel
              </button>
            </div> 
          </div>
    </div>
  );
}

export default AdminReports;

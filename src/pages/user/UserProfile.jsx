import React, { useState } from "react";
import "../../App.css";


const UserProfile = () => {
  const [attachments, setAttachments] = useState([{ id: 1 }]);

  const addAttachment = () => {
    setAttachments([...attachments, { id: attachments.length + 1 }]);
  };

  const [secondaryEducationSections, setSecondaryEducationSections] = useState([{ id: 1 }]);
  const [tertiaryEducationSections, setTertiaryEducationSections] = useState([{ id: 1 }]);
  const [companySections, setCompanySections] = useState([{ id: 1 }]);

  const addSecondaryEducationSection = () => {
    setSecondaryEducationSections([...secondaryEducationSections, { id: secondaryEducationSections.length + 1 }]);
  };

  const addTertiaryEducationSection = () => {
    setTertiaryEducationSections([...tertiaryEducationSections, { id: tertiaryEducationSections.length + 1 }]);
  };

  const addCompanySection = () => {
    setCompanySections([...companySections, { id: companySections.length + 1 }]);
  };

  const [profileImage, setProfileImage] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }
  
  return (
    <>
      <div className="lg:px-20 md:px-10 px-6 py-2 container mb-12">
        {/* image */}
        <div className="page-title">User Profile</div>
        <img src={profileImage} alt="Profile" className="h-40 w-40 border-2"/>
        {/* INFOS */}
        <div className="text-black font-light">
          {/* field */}
          <div className="mt-4">
            <label className="pt-4 pb-2 text-sm">Profile Picture</label>
            <input type="file" className="file-input file-input-sm file-input-bordered text-xs w-full h-10" onChange={handleImageChange}
            accept="image/*"  />
          </div>
          {/* PRIMARY INFORMATION */}
          <div className="text-xl py-4 mt-4">Primary Information</div>

          <div className="py-1">
            <label className="pt-4 pb-2 text-sm">First Name *</label>
            <input type="text" placeholder="Type here" className="input input-sm input-bordered w-full h-10" required />
          </div>

          <div className="py-1">
            <label className="pt-4 pb-2 text-sm">Last Name *</label>
            <input type="text" placeholder="Type here" className="input input-sm input-bordered w-full h-10" required/>
          </div>

          <div className="py-1">
            <label className="pt-4 pb-2 text-sm">Birthday *</label>
            <input type="date" placeholder="Type here" className="input input-sm input-bordered w-full h-10" required/>
          </div>

          <div className="py-1">
            <label className="pt-4 pb-2 text-sm">Profession</label>
            <input type="text" placeholder="Type here" className="input input-sm input-bordered w-full h-10" />
          </div>

          <div className="py-1">
            <label className="pt-4 pb-2 text-sm">College Program</label>
            <select className="select select-bordered select-sm border-2 w-full h-10">
              <option disabled selected>Choose</option>
              <option>Computer Science</option>
              <option>Information Systems</option>
              <option>Information Technology</option>
            </select>
          </div>

          <div className="py-1">
            <label className="pt-4 pb-2 text-sm">Specialization</label>
            <input type="text" placeholder="Type here" className="input input-sm input-bordered w-full h-10" />
          </div>

          <div className="py-1">
            <label className="pt-4 pb-2 text-sm">Year Started on College Program</label>
            <input type="date" placeholder="Type here" className="input input-sm input-bordered w-full h-10" />
          </div>

          <div className="py-1">
            <label className="pt-4 pb-2 text-sm">Year Graduated on College Program</label>
            <input type="date" placeholder="Type here" className="input input-sm input-bordered w-full h-10" />
          </div>

          <div className="py-1">
            <label className="pt-4 pb-2 text-sm">Time it took to land a job after graduation (Months)</label>
            <input type="text" placeholder="Type here" className="input input-sm input-bordered w-full h-10" />
          </div>

          {/* SECONDARY INFORMATION */}
          <div className="text-xl py-4 mt-4">Secondary Information</div>

          <div className="py-1">
            <label className="pt-4 pb-2 text-sm">Employment Status</label>
            <select className="select select-bordered select-sm border-2 w-full h-10">
              <option disabled selected>Choose</option>
              <option>Employed</option>
              <option>Unemployed</option>
              <option>Underemployed</option>
              <option>Freelancing</option>
            </select>
          </div>

          <div className="py-1">
            <label className="pt-4 pb-2 text-sm">Work Industry</label>
            <select className="select select-bordered select-sm border-2 w-full h-10">
              <option disabled selected>Choose</option>
              <option>Local</option>
              <option>International</option>
            </select>
          </div>

          <div className="py-1">
            <label className="pt-4 pb-2 text-sm">Is current profession in line with college degree</label>
            <select className="select select-bordered select-sm border-2 w-full h-10">
              <option disabled selected>Choose</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>

          <div className="py-1">
            <label className="pt-4 pb-2 text-sm">Marital Status</label>
            <select className="select select-bordered select-sm border-2 w-full h-10">
              <option disabled selected>Choose</option>
              <option>Single</option>
              <option>Married</option>
              <option>Divorced</option>
              <option>Widowed</option>
            </select>
          </div>

          <div className="py-1">
            <label className="pt-4 pb-2 text-sm">Salary Range (PHP)</label>
            <select className="select select-bordered select-sm border-2 w-full h-10">
              <option disabled selected>Choose</option>
              <option>Local</option>
              <option>International</option>
            </select>
          </div>

          <div className="py-1">
            <label className="pt-4 pb-2 text-sm">Place of Employment</label>
            <select className="select select-bordered select-sm border-2 w-full h-10">
              <option disabled selected>Choose</option>
              <option>Local</option>
              <option>International</option>
            </select>
          </div>

          {/* CONTACT INFORMATION */}
          <div className="text-xl py-4 mt-4">Contact Information</div>

          <div className="py-1">
            <label className="pt-4 pb-2 text-sm">LinkedIn</label>
            <input type="text" placeholder="Type here" className="input input-sm input-bordered w-full h-10" />
          </div>

          <div className="py-1">
            <label className="pt-4 pb-2 text-sm">Facebook</label>
            <input type="text" placeholder="Type here" className="input input-sm input-bordered w-full h-10" />
          </div>

          <div className="py-1">
            <label className="pt-4 pb-2 text-sm">Instagram</label>
            <input type="text" placeholder="Type here" className="input input-sm input-bordered w-full h-10" />
          </div>

          <div className="py-1">
            <label className="pt-4 pb-2 text-sm">Email Address</label>
            <input type="text" placeholder="Type here" className="input input-sm input-bordered w-full h-10" />
          </div>

          <div className="py-1">
            <label className="pt-4 pb-2 text-sm">Mobile Number</label>
            <input type="text" placeholder="Type here" className="input input-sm input-bordered w-full h-10" />
          </div>

          <div className="py-1">
            <label className="pt-4 pb-2 text-sm">Other</label>
            <input type="text" placeholder="Type here" className="input input-sm input-bordered w-full h-10" />
          </div>

          {/* ATTACHMENTS */}
          <div className="flex items-center">
            <div className="text-xl py-4 mt-4 w-1/2">Attachments</div>
            <div className="text-xl py-4 mt-4 w-1/2 text-end">
              <button className="btn btn-sm md:w-64 w-36 bg-green text-white" onClick={addAttachment}>
                +
              </button>
            </div>
          </div>

          {attachments.map((attachment) => (
            <div key={attachment.id}>
              <label className="pt-4 pb-2 text-sm">Attachment {attachment.id}</label>
              <input
                type="file"
                className="file-input file-input-sm file-input-bordered text-xs w-full h-10 mb-2"
              />
            </div>
          ))}

          {/* EDUCATIONAL BACKGROUND */}
          <div className="text-xl py-4 mt-4 w-1/2">Educational Background</div>
          {/* SECONDARY EDUCATION */}
          <div className="flex items-center">
            <div className="text-lg w-1/2">Secondary Education</div>
            <div className="text-lg w-1/2 text-end">
              <button className="btn btn-sm md:w-64 w-36 bg-green text-white" onClick={addSecondaryEducationSection}>
                +
              </button>
            </div>
          </div>

          {secondaryEducationSections.map((section) => (
          <div key={section.id} className="w-full border-2 rounded py-2 px-4 mt-2">
            <div className="py-1">
              <label className="pt-4 pb-2 text-sm">School Name</label>
              <input type="text" placeholder="Type here" className="input input-sm input-bordered w-full h-10" />
            </div>

            <div className="py-1">
              <label className="pt-4 pb-2 text-sm">Year Started - Year Ended</label>
              <input type="date" placeholder="Type here" className="input input-sm input-bordered w-full h-10" />
            </div>
          </div>
          ))}

          {/* TERTIARY EDUCATION */}
          <div className="flex items-center mt-8">
            <div className="text-lg w-1/2">Tertiary Education</div>
            <div className="text-lg w-1/2 text-end">
              <button className="btn btn-sm md:w-64 w-36 bg-green text-white" onClick={addTertiaryEducationSection}>
                +
              </button>
            </div>
          </div>

          {tertiaryEducationSections.map((section) => (
          <div key={section.id} className="w-full border-2 rounded py-2 px-4 mt-2">
            <div className="py-1">
              <label className="pt-4 pb-2 text-sm">School Name</label>
              <input type="text" placeholder="Type here" className="input input-sm input-bordered w-full h-10" />
            </div>

            <div className="py-1">
              <label className="pt-4 pb-2 text-sm">Program</label>
              <input type="text" placeholder="Type here" className="input input-sm input-bordered w-full h-10" />
            </div>

            <div className="py-1">
              <label className="pt-4 pb-2 text-sm">Year Started - Year Ended</label>
              <input type="date" placeholder="Type here" className="input input-sm input-bordered w-full h-10" />
            </div>
          </div>
          ))}

          {/* CAREER */}
          <div className="flex items-center">
            <div className="text-xl py-4 mt-4 w-1/2">Career Background</div>
            <div className="text-xl py-4 mt-4 w-1/2 text-end">
              <button className="btn btn-sm md:w-64 w-36 bg-green text-white" onClick={addCompanySection}>
                +
              </button>
            </div>
          </div>

          {companySections.map((section) => (
          <div key={section.id} className="w-full border-2 rounded py-2 px-4 mt-2">
            <div className="py-1">
              <label className="pt-4 pb-2 text-sm">Company Name</label>
              <input type="text" placeholder="Type here" className="input input-sm input-bordered w-full h-10" />
            </div>

            <div className="py-1">
              <label className="pt-4 pb-2 text-sm">Position</label>
              <input type="text" placeholder="Type here" className="input input-sm input-bordered w-full h-10" />
            </div>

            <div className="py-1">
              <label className="pt-4 pb-2 text-sm">Year Started - Year Ended</label>
              <input type="date" placeholder="Type here" className="input input-sm input-bordered w-full h-10" />
            </div>
          </div>
          ))}

          {/* SETTINGS */}
          <div className="text-xl py-4 mt-4">Settings</div>

          <div className="py-1">
              <label className="pt-4 pb-2 text-sm">Account Email *</label>
              <input type="text" placeholder="Type here" className="input input-sm input-bordered w-full h-10" required/>
            </div>
          
          <div className="mt-4">
            <button className="btn md:w-64 w-full bg-fgray text-white">
              Reset Password
            </button>
          </div>

          {/* BOTTOM BUTTONS */}
          <div className="flex justify-center mt-16">
            <div className="">
              <button className="btn md:w-64 w-56 bg-fgray text-white">
                Cancel
              </button>
            </div>
            
            <div className="">
              <button className="btn md:w-64 w-56 bg-green text-white">
                Save
              </button>
            </div> 
          </div>

        </div>
        
      </div>
    </>
  );
};

export default UserProfile;

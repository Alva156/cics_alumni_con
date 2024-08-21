import React, { useState, useEffect, useRef } from "react";

function AdminSurveyTool() {
  const [surveys, setSurveys] = useState([
    {
      id: 1,
      name: "Survey Name 1",
      response: "999 responses",
      answered: false,
      questions: [
        {
          question: "Question 1",
          questionContent: "hello world",
          questionType: "radio",
          choices: ["choice 1", "choice 2", "choice 3"],
        },
        {
          question: "Question 2",
          questionContent: "hello world",
          questionType: "checkbox",
          choices: ["choice 1", "choice 2", "choice 3"],
        },
        {
          question: "Question 3",
          questionContent: "hello world",
          questionType: "textInput",
        },
        {
          question: "Question 4",
          questionContent: "hello world",
          questionType: "textArea",
        },
      ],
    },
    {
      id: 2,
      name: "Survey Name 2",
      response: "500 responses",
      answered: true,
      questions: [
        {
          question: "Question 1",
          questionContent: "another question content",
          questionType: "radio",
          choices: ["option 1", "option 2"],
        },
      ],
    },
  ]);

  const [selectedSurvey, setSelectedSurvey] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const modalRef = useRef(null);

  const openViewModal = (survey) => {
    setSelectedSurvey(survey);
    setIsViewModalOpen(true);
  };

  const openEditModal = (survey) => {
    setSelectedSurvey(survey);
    setIsEditModalOpen(true);
  };

  const openAddModal = () => {
    setSelectedSurvey(null);
    setIsAddModalOpen(true);
  };

  const closeModal = () => {
    setIsViewModalOpen(false);
    setIsEditModalOpen(false);
    setIsAddModalOpen(false);
    setSelectedSurvey(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    if (isViewModalOpen || isEditModalOpen || isAddModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isViewModalOpen, isEditModalOpen, isAddModalOpen]);

  const handleDeleteSurvey = (id) => {
    setSurveys((prevSurveys) => prevSurveys.filter((survey) => survey.id !== id));
  };

  // Toggle publish/unpublish status
  const handlePublishSurvey = (id) => {
    setSurveys((prevSurveys) =>
      prevSurveys.map((survey) =>
        survey.id === id ? { ...survey, answered: !survey.answered } : survey
      )
    );
  };

  const renderInputField = (question) => {
    switch (question.questionType) {
      case "radio":
        return question.choices.map((choice, idx) => (
          <div key={idx} className="flex items-center mb-2">
            <input
              type="radio"
              name={question.question}
              value={choice}
              className="mr-2"
            />
            <label>{choice}</label>
          </div>
        ));
      case "checkbox":
        return question.choices.map((choice, idx) => (
          <div key={idx} className="flex items-center mb-2">
            <input
              type="checkbox"
              name={question.question}
              value={choice}
              className="mr-2"
            />
            <label>{choice}</label>
          </div>
        ));
      case "textInput":
        return (
          <input
            type="text"
            name={question.question}
            className="w-full px-2 py-1 border rounded mb-2"
          />
        );
      case "textArea":
        return (
          <textarea
            name={question.question}
            className="w-full px-2 py-1 border rounded mb-2"
            rows="4"
          ></textarea>
        );
      default:
        return null;
    }
  };

  // Filter surveys based on whether they are answered or not
  const unansweredSurveys = surveys
    .filter(survey => !survey.answered)
    .filter(survey =>
      survey.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  // Filter answered surveys by search term
  const answeredSurveys = surveys
    .filter(survey => survey.answered)
    .filter(survey =>
      survey.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="text-black font-light mx-4 md:mx-8 lg:mx-16 mt-8 mb-12">
      <h1 className="text-xl mb-4">Survey Tool</h1>

      <div className="mb-4 relative">
        <input
          type="text"
          placeholder="Search Company"
          className="w-full border border-black rounded-lg px-4 py-2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 cursor-pointer"
          onClick={() => setSearchTerm('')}>
          X
        </span>
      </div>

      <div className="mb-6">
        <span className="text-sm">Sort by:</span>
        <select className="ml-2 border border-black rounded px-3 py-1 text-sm">
          <option>Name (A-Z)</option>
          <option>Name (Z-A)</option>
        </select>
      </div>

      <div className="flex justify-between items-center mb-4">
        <div className="text-lg">Drafts</div>
        <button
          className="btn btn-sm w-36 bg-green text-white"
          onClick={openAddModal}
        >
          +
        </button>
      </div>

      <hr className="mb-6 border-black" />

      {unansweredSurveys.map((survey, index) => (
        <div
          key={index}
          className="mb-4 p-4 border border-black rounded-lg flex justify-between cursor-pointer hover:bg-gray-200 transition-colors"
          onClick={() => openViewModal(survey)}
        >
          <div>
            <div className="text-md font-medium mb-1">{survey.name}</div>
            <div className="text-sm text-black-600">{survey.response}</div>
          </div>
          <div className="flex items-center">
            <div
              className="w-4 h-4 rounded-full bg-[#BE142E] flex justify-center items-center cursor-pointer mr-2 relative group"
              onClick={(e) => { e.stopPropagation(); handleDeleteSurvey(survey.id); }}
            >
              <span className="hidden group-hover:block absolute bottom-8 bg-gray-700 text-white text-xs rounded px-2 py-1">
                Delete
              </span>
            </div>
            <div
              className="w-4 h-4 rounded-full bg-[#3D3C3C] flex justify-center items-center cursor-pointer mr-2 relative group"
              onClick={(e) => { e.stopPropagation(); openEditModal(survey); }}
            >
              <span className="hidden group-hover:block absolute bottom-8 bg-gray-700 text-white text-xs rounded px-2 py-1">
                Edit
              </span>
            </div>
            <div
              className="w-4 h-4 rounded-full bg-blue flex justify-center items-center cursor-pointer mr-2 relative group"
              onClick={(e) => { e.stopPropagation(); handlePublishSurvey(survey.id); }}
            >
              <span className="hidden group-hover:block absolute bottom-8 bg-gray-700 text-white text-xs rounded px-2 py-1">
                Publish
              </span>
            </div>
          </div>
        </div>
      ))}

      <div className="text-lg mb-4">Published</div>

      <hr className="mb-6 border-black" />

      {answeredSurveys.map((survey) => (
        <div
          key={survey.id}
          className="mb-4 p-4 border border-black rounded-lg flex justify-between cursor-pointer hover:bg-gray-200 transition-colors"
          onClick={() => openModal(survey)}
        >
          <div>
            <div className="text-md font-medium mb-1">{survey.name}</div>
            <div className="text-sm text-black-600">{survey.response}</div>
          </div>
          <div className="flex items-center">
            <div
              className="w-4 h-4 rounded-full bg-[#BE142E] flex justify-center items-center cursor-pointer mr-2 relative group"
              onClick={(e) => { e.stopPropagation(); handleDeleteSurvey(survey.id); }}
            >
              <span className="hidden group-hover:block absolute bottom-8 bg-gray-700 text-white text-xs rounded px-2 py-1">
                Delete
              </span>
            </div>
            <div
              className="w-4 h-4 rounded-full bg-[#3D3C3C] flex justify-center items-center cursor-pointer mr-2 relative group"
              onClick={(e) => { e.stopPropagation(); console.log('Edit action'); }}
            >
              <span className="hidden group-hover:block absolute bottom-8 bg-gray-700 text-white text-xs rounded px-2 py-1">
                Edit
              </span>
            </div>
            <div
              className="w-4 h-4 rounded-full bg-orange flex justify-center items-center cursor-pointer mr-2 relative group"
              onClick={(e) => { e.stopPropagation(); handlePublishSurvey(survey.id); }}
            >
              <span className="hidden group-hover:block absolute bottom-8 bg-gray-700 text-white text-xs rounded px-2 py-1">
                Unpublish
              </span>
            </div>
          </div>
        </div>
      ))}

      {/* VIEW MODAL */}
      {isViewModalOpen && selectedSurvey && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
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
            <div className="text-2xl font-medium mb-2">
              {selectedSurvey.name}
            </div>
            <div className="w-full rounded bg-hgray px-3 py-2 space-y-2 border border-fgray">
              <div className="text-xs font-light">Responses</div>
              <div className="text-xl font-normal">999</div>
            </div>

            <div className="w-full rounded bg-hgray px-3 py-2 space-y-2 mt-2 border border-fgray">
              <div className="text-xs font-light">Date Created</div>
              <div className="text-xl font-normal">August 20, 2024</div>
            </div>

            <div className="flex mt-4 space-x-3">
              <div className="">
                <button className="btn md:w-64 w-32 bg-blue text-white ">
                  Export to PDF
                </button>
              </div>
              <div className="">
                <button className="btn md:w-64 w-32 bg-green text-white">
                  Export to Excel
                </button>
              </div>
            </div>

            <div className="mt-6">Results Summary</div>

            {selectedSurvey.questions.map((question, index) => (
              <div
                key={index}
                className="w-full rounded px-4 py-2 border border-black my-2"
              >
                <div className="font-medium ">{index + 1}
                  <span className="mr-2">.</span>{question.questionContent}</div>
                <div className="flex justify-between mt-2">
                  <div className="">{renderInputField(question)}</div>
                  <div className="text-center">{renderInputField(question)}</div>
                  <div className="text-center">hello worlds</div>
                </div>
              </div>
            ))}

            {/* BOTTOM BUTTONS */}
            <div className="flex justify-center mt-16 space-x-3">
              <div className="">
                <button className="btn md:w-64 w-44 bg-fgray text-white">
                  Cancel
                </button>
              </div>
              <div className="">
                <button className="btn md:w-64 w-44 bg-green text-white">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* EDIT MODAL */}
      
      {isEditModalOpen && selectedSurvey &&(
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
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
            <div className="text-2xl font-medium mb-2">
              {selectedSurvey ? selectedSurvey.name : "New Survey"}
            </div>
            {/* Rest of the modal content */}
          </div>
        </div>
      )}

      {/* ADD MODAL */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
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
            <div className="text-2xl font-medium mb-2">
              {selectedSurvey ? selectedSurvey.name : "New Survey"}
            </div>
            {/* Rest of the modal content */}
          </div>
        </div>
      )}

    </div>
  );
}

export default AdminSurveyTool;

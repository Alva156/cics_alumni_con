import React, { useState, useEffect, useRef } from "react";
import sampleidpic from "../../assets/sampleidpic.jpg";

function Threads() {
  const [threads, setThreads] = useState([
    {
      id: 1,
      title: "Thread Title 1",
      replies: "999 replies",
      active: false,
      posts: [
        {
          post: "Post 1",
          content: "Hello world, this is the first post!",
          postType: "text",
        },
        {
          post: "Post 2",
          content: "This is a follow-up post with more information.",
          postType: "text",
        },
      ],
    },
    {
      id: 2,
      title: "Thread Title 2",
      replies: "500 replies",
      active: true,
      posts: [
        {
          post: "Post 1",
          content: "This is another discussion thread.",
          postType: "text",
        },
      ],
    },
  ]);

  const [selectedThread, setSelectedThread] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [posts, setPosts] = useState([{ postText: "", postType: "" }]);

  const modalRef = useRef(null);

  const openViewModal = (thread) => {
    setSelectedThread(thread);
    setIsViewModalOpen(true);
  };

  const openEditModal = (thread) => {
    setSelectedThread(thread);
    setPosts(
      thread.posts.map((post) => ({
        ...post,
      }))
    );
    setIsEditModalOpen(true);
  };

  const openAddModal = () => {
    setSelectedThread(null);
    setPosts([{ postText: "", postType: "text" }]);
    setIsAddModalOpen(true);
  };

  const closeModal = () => {
    setIsViewModalOpen(false);
    setIsEditModalOpen(false);
    setIsAddModalOpen(false);
    setSelectedThread(null);
  };

  const handlePostChange = (postIndex, value) => {
    const newPosts = [...posts];
    newPosts[postIndex].postText = value;
    setPosts(newPosts);

    if (value !== "" && postIndex === newPosts.length - 1) {
      setPosts([...newPosts, { postText: "", postType: "" }]);
    }
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

  const handleDeleteThread = (id) => {
    setThreads((prevThreads) =>
      prevThreads.filter((thread) => thread.id !== id)
    );
  };

  const handleToggleThread = (id) => {
    setThreads((prevThreads) =>
      prevThreads.map((thread) =>
        thread.id === id ? { ...thread, active: !thread.active } : thread
      )
    );
  };

  const renderPostContent = (post) => {
    return <div>{post.content}</div>;
  };

  // Filter threads based on search term
  const inactiveThreads = threads
    .filter((thread) => !thread.active)
    .filter((thread) =>
      thread.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const activeThreads = threads
    .filter((thread) => thread.active)
    .filter((thread) =>
      thread.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="text-black font-light mx-4 md:mx-8 lg:mx-16 mt-8 mb-12">
      <h1 className="text-xl mb-4">Threads</h1>

      <div className="mb-4 relative">
        <input
          type="text"
          placeholder="Search Threads"
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

      <div className="mb-6">
        <span className="text-sm">Sort by:</span>
        <select className="ml-2 border border-black rounded px-3 py-1 text-sm">
          <option>Title (A-Z)</option>
          <option>Title (Z-A)</option>
        </select>
      </div>

      <div className="flex justify-between items-center mb-4">
        <div className="text-lg">My Posts</div>
        <button
          className="btn btn-sm w-36 bg-green text-white"
          onClick={openAddModal}
        >
          +
        </button>
      </div>

      <hr className="mb-6 border-black" />

      {inactiveThreads.map((thread, index) => (
        <div
          key={index}
          className="mb-4 p-4 border border-black rounded-lg flex justify-between cursor-pointer hover:bg-gray-200 transition-colors"
          onClick={() => openViewModal(thread)}
        >
          <div>
            <div className="text-md font-medium mb-1">{thread.title}</div>
            <div className="text-sm text-black-600">{thread.replies}</div>
          </div>
          <div className="flex items-center">
            <div
              className="w-4 h-4 rounded-full bg-[#BE142E] flex justify-center items-center cursor-pointer mr-2 relative group"
              onClick={(e) => {
                e.stopPropagation();
                handleDeleteThread(thread.id);
              }}
            >
              <span className="hidden group-hover:block absolute bottom-8 bg-gray-700 text-white text-xs rounded px-2 py-1">
                Delete
              </span>
            </div>
            <div
              className="w-4 h-4 rounded-full bg-[#3D3C3C] flex justify-center items-center cursor-pointer mr-2 relative group"
              onClick={(e) => {
                e.stopPropagation();
                openEditModal(thread);
              }}
            >
              <span className="hidden group-hover:block absolute bottom-8 bg-gray-700 text-white text-xs rounded px-2 py-1">
                Edit
              </span>
            </div>
          </div>
        </div>
      ))}

      <div className="text-lg mb-4">All Threads</div>

      <hr className="mb-6 border-black" />

      {activeThreads.map((thread) => (
        <div
          key={thread.id}
          className="mb-4 p-4 border border-black rounded-lg flex justify-between cursor-pointer hover:bg-gray-200 transition-colors"
          onClick={() => openViewModal(thread)}
        >
          <div>
            <div className="text-md font-medium mb-1">{thread.title}</div>
            <div className="text-sm text-black-600">{thread.replies}</div>
          </div>
          <div className="flex items-center">
            <div
              className="w-4 h-4 rounded-full bg-[#BE142E] flex justify-center items-center cursor-pointer mr-2 relative group"
              onClick={(e) => {
                e.stopPropagation();
                handleDeleteThread(thread.id);
              }}
            >
              <span className="hidden group-hover:block absolute bottom-8 bg-gray-700 text-white text-xs rounded px-2 py-1">
                Delete
              </span>
            </div>
            <div
              className="w-4 h-4 rounded-full bg-[#3D3C3C] flex justify-center items-center cursor-pointer mr-2 relative group"
              onClick={(e) => {
                e.stopPropagation();
                openEditModal(thread);
              }}
            >
              <span className="hidden group-hover:block absolute bottom-8 bg-gray-700 text-white text-xs rounded px-2 py-1">
                Edit
              </span>
            </div>
          </div>
        </div>
      ))}

      {isViewModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 md:p-8 lg:p-12 rounded-lg w-full max-w-md md:max-w-3xl lg:max-w-4xl xl:max-w-5xl h-auto overflow-y-auto max-h-[90vh] relative mx-4">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <img
                  src={sampleidpic} // Replace with actual image path
                  alt="User Avatar"
                  className="w-14 h-14 mr-3"
                />
                <div>
                  <h2 className="text-xl font-semibold">
                    Denise Anne Valdivieso
                  </h2>
                  <p className="text-gray-500">Software Engineer</p>
                  <p className="text-gray-400 text-sm">
                    Posted on July 5, 2024.
                  </p>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>

            <div className="border-b border-black mb-4 pb-2">
              <h3 className="text-lg font-medium">Discussion Title</h3>
              <p className="mt-2 text-black">
                We are currently doing a Capstone project and it is quite hard.
                Any tips on how to pass Capstone project without having any
                stress? Thank you.
              </p>
            </div>

            <div className="space-y-4 max-h-64 overflow-y-auto">
              <div className="p-4 border border-black rounded-lg flex items-start mb-2">
                <img
                  src={sampleidpic}
                  alt="User Avatar"
                  className="w-10 h-10 mr-3"
                />

                <div className="flex-grow">
                  <h4 className="font-semibold text-sm">James Lorenz Santos</h4>
                  <p className="text-gray-500 text-xs mb-2">
                    Software Developer • Posted on July 5, 2024
                  </p>
                  <p className="text-gray-700">
                    What is your capstone all about? Maybe I can help you.
                  </p>
                </div>

                <div className="flex space-x-2">
                  <div
                    className="w-4 h-4 rounded-full bg-[#BE142E] flex justify-center items-center cursor-pointer relative group"
                    onClick={(e) => {
                      e.stopPropagation();
                      openEditModal(thread);
                    }}
                  >
                    <span className="absolute top-full left-1/2 transform -translate-x-1/2 mb-1 bg-gray-700 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50">
                      Delete
                    </span>
                  </div>

                  <div
                    className="w-4 h-4 rounded-full bg-[#3D3C3C] flex justify-center items-center cursor-pointer relative group"
                    onClick={(e) => {
                      e.stopPropagation();
                      openEditModal(thread);
                    }}
                  >
                    <span className="absolute top-full left-1/2 transform -translate-x-1/2 mb-1 bg-gray-700 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50">
                      Edit
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4 max-h-64 overflow-y-auto">
              <div className="p-4 border border-black rounded-lg flex items-start mb-2">
                <img
                  src={sampleidpic}
                  alt="User Avatar"
                  className="w-10 h-10 mr-3"
                />

                <div className="flex-grow">
                  <h4 className="font-semibold text-sm:">
                    Alessandra Claire Cruz
                  </h4>
                  <p className="text-gray-500 text-xs mb-2">
                    Software Developer • Posted on July 5, 2024
                  </p>
                  <p className="text-gray-700">Luh</p>
                </div>

                <div className="flex space-x-2">
                  <div
                    className="w-4 h-4 rounded-full bg-[#BE142E] flex justify-center items-center cursor-pointer relative group"
                    onClick={(e) => {
                      e.stopPropagation();
                      openEditModal(thread);
                    }}
                  >
                    <span className="absolute top-full left-1/2 transform -translate-x-1/2 mb-1 bg-gray-700 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50">
                      Delete
                    </span>
                  </div>

                  <div
                    className="w-4 h-4 rounded-full bg-[#3D3C3C] flex justify-center items-center cursor-pointer relative group"
                    onClick={(e) => {
                      e.stopPropagation();
                      openEditModal(thread);
                    }}
                  >
                    <span className="absolute top-full left-1/2 transform -translate-x-1/2 mb-1 bg-gray-700 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50">
                      Edit
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4 max-h-64 overflow-y-auto">
              <div className="p-4 border border-black rounded-lg flex items-start">
                <img
                  src={sampleidpic}
                  alt="User Avatar"
                  className="w-10 h-10 mr-3"
                />

                <div className="flex-grow">
                  <h4 className="font-semibold text-sm">Andrei Alvarico</h4>
                  <p className="text-gray-500 text-xs mb-2">
                    Software Developer • Posted on July 5, 2024
                  </p>
                  <p className="text-gray-700">Pfft..</p>
                </div>

                <div className="flex space-x-2">
                  <div
                    className="w-4 h-4 rounded-full bg-[#BE142E] flex justify-center items-center cursor-pointer relative group"
                    onClick={(e) => {
                      e.stopPropagation();
                      openEditModal(thread);
                    }}
                  >
                    <span className="absolute top-full left-1/2 transform -translate-x-1/2 mb-1 bg-gray-700 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50">
                      Delete
                    </span>
                  </div>

                  <div
                    className="w-4 h-4 rounded-full bg-[#3D3C3C] flex justify-center items-center cursor-pointer relative group"
                    onClick={(e) => {
                      e.stopPropagation();
                      openEditModal(thread);
                    }}
                  >
                    <span className="absolute top-full left-1/2 transform -translate-x-1/2 mb-1 bg-gray-700 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50">
                      Edit
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <textarea
                className="w-full border border-black h-[8vh] rounded-lg p-2"
                placeholder="Add reply here..."
                rows="3"
              ></textarea>
            </div>
            <button className="btn px-20 bg-[#1458BE] text-white">Send</button>
          </div>
        </div>
      )}

      {isEditModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="relative bg-white p-6 md:p-8 lg:p-12 rounded-lg w-full max-w-md md:max-w-3xl lg:max-w-4xl xl:max-w-5xl h-auto overflow-y-auto max-h-[90vh] mx-4">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-sm md:text-base lg:text-lg"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>

            <div className="mb-4">
              <input
                type="text"
                placeholder="Discussion Title"
                className="w-full border border-black rounded-lg px-4 py-2 mb-4 mt-4"
              />
              <textarea
                placeholder="Discussion Content"
                className="w-full border border-black rounded-lg px-4 py-2 h-80"
              />
              <div className="flex justify-center gap-2 mt-4">
                <button
                  onClick={closeModal}
                  className="btn btn-sm w-28 md:btn-md md:w-52 lg:w-60 bg-[#3D3C3C] text-white px-4 py-2 md:px-6 md:py-3"
                >
                  Cancel
                </button>
                <button className="btn btn-sm w-28 md:btn-md md:w-52 lg:w-60 bg-green text-white px-4 py-2 md:px-6 md:py-3">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="relative bg-white p-6 md:p-8 lg:p-12 rounded-lg w-full max-w-md md:max-w-3xl lg:max-w-4xl xl:max-w-5xl h-auto overflow-y-auto max-h-[90vh] mx-4">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-sm md:text-base lg:text-lg"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>

            <div className="mb-4">
              <input
                type="text"
                placeholder="Discussion Title"
                className="w-full border border-black rounded-lg px-4 py-2 mb-4 mt-4"
              />
              <textarea
                placeholder="Discussion Content"
                className="w-full border border-black rounded-lg px-4 py-2 h-80"
              />
              <div className="flex justify-center gap-2 mt-4">
                <button
                  onClick={closeModal}
                  className="btn btn-sm w-28 md:btn-md md:w-52 lg:w-60 bg-[#3D3C3C] text-white px-4 py-2 md:px-6 md:py-3"
                >
                  Cancel
                </button>
                <button className="btn btn-sm w-28 md:btn-md md:w-52 lg:w-60 bg-green text-white px-4 py-2 md:px-6 md:py-3">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Threads;

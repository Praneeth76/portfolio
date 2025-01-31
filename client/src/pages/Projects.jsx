import React, { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);  // Track loading state

  // Fetch projects from backend
  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);  // Set loading to true when the request starts
      try {
        const response = await fetch(
          "https://portfolio-v69x-qr0pg4pts-praneeth76s-projects.vercel.app/api/projects",
          {
            method: "GET",
            credentials: "include",  // Include credentials like cookies if necessary
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();

        if (data.error) {
          setError(data.error);
          return;
        }

        setProjects(data.data);  // Assuming the data is in the 'data' field
        setError(null);
      } catch (error) {
        console.error("Error fetching projects:", error);  // Log error for debugging
        setError("Error fetching projects");
      } finally {
        setLoading(false);  // Set loading to false after the request completes
      }
    };

    fetchProjects();
  }, []);  // Fetch only on component mount

  return (
    <div className="py-6 px-6 sm:px-12 md:px-20 text-center">
      <h2 className="text-3xl font-bold">My Projects</h2>
      <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
        Here are a few projects I've worked on. Feel free to check them out!
      </p>

      {/* Display loading message */}
      {loading && <p className="text-gray-500">Loading projects...</p>}

      {/* Display error if there's an issue */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Display projects as cards */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.length > 0 ? (
          projects.map((project) => (
            <div
              key={project._id}
              className="p-4 border rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {project.title}
              </h3>
              <p className="text-gray-600 mt-2">
                {project.description || "No description available."}
              </p>

              <div className="mt-4 flex justify-between">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View on GitHub
                </a>
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500 hover:underline"
                  >
                    View Demo
                  </a>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No projects available.</p>
        )}
      </div>
    </div>
  );
};

export default Projects;

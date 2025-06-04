import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";

export const Projects2 = ({
  title,
  description,
  projects,
  withButton = false,
  withLink = false,
  withTag = false,
  withDetails = true,
  cols = "1",
}) => {
  const [previewImage, setPreviewImage] = useState(null);

  const openPreview = (image, title) => {
    setPreviewImage({ src: image, alt: title });
  };

  const closePreview = () => {
    setPreviewImage(null);
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >

        <div className="container mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent px-8">
            {title}
          </h2>
          <p className="text-center text-sm md:text-base text-gray-400 mb-12 max-w-2x mx-auto px-8">
            {description}
          </p>
          <div
            className={`grid grid-cols-${cols} sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8`}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="border border-white/10 group bg-black rounded-lg overflow-hidden shadow-xs"
              >
                <div
                  className={`h-48 overflow-hidden cursor-pointer`}
                  onClick={() => openPreview(project.imageHD, project.title)}
                >
                  <img
                    loading="lazy"
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className={withDetails ? "p-6" : ""}>
                  {withTag && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                        <span
                          key={`${project.id}-${tag}-${index}`}
                          className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-xs hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rbga(59,130,246,0.2)] transistion"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  {withDetails && (
                    <>
                      <h3 className="text-xl font-semibold mb-2">
                        {project.title}
                      </h3>
                      <p className=" text-gray-400 text-xs mb-4">
                        {project.description}
                      </p>
                    </>
                  )}

                  {withLink && (
                    <div className="flex justify-between items-center ">
                      <div className="flex space-x-3">
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-purple-800 transition-colors duration-300"
                        >
                          <FaExternalLinkAlt size={15} />
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-purple-800 transition-colors duration-300"
                        >
                          <FaGithub size={15} />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          {withButton && (
            <div className="text-center mt-12 flex justify-center">
              <a
                href="https://github.com/KashiX03"
                target="_blank"
                rel="noopener noreferrer"
                className=" bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] w-fit flex items-center"
              >
                Check My Github <FaArrowRight></FaArrowRight>{" "}
              </a>
            </div>
          )}
        </div>


      {/* Simple Image Preview Modal */}
      {previewImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={closePreview}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <img
              src={previewImage.src}
              alt={previewImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
};

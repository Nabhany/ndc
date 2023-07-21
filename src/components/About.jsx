import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInfinity } from "react-icons/fa";
import blank from "../assets/blankavatar.jpg";
import background from "../assets/devops.jpg";

function About() {
  return (
    <div>
      <div
        class="relative bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div class="flex flex-col justify-center items-center inset-0 bg-black opacity-90 text-center text-white p-10">
          <h2 class="font-serif text-2xl md:text-3xl mx-40 m-20">
            {" "}
            The Nairobi DevOps Community is led by a group of dedicated
            individuals who are passionate about promoting the growth and
            success of the DevOps industry in Nairobi and beyond. Our leadership
            team is composed of experienced professionals from the tech field.
          </h2>
        </div>
      </div>
      <div
        className="bg-black bg-opacity-75 bg-cover bg-50%_50% bg-no-repeat flex flex-col mb-12"
        style={{ backgroundImage: `url(${background})` }}
      ></div>
     <section >
     <div className="mx-8 leading-relaxed text-5xl  font-bold ">Mission</div>
      <p className="mx-8 leading-relaxed">
        We strive to promote collaboration, innovation, and best practices
        within the DevOps industry in Nairobi. Our mission is to create a
        supportive and inclusive community that values diversity and fosters
        learning and growth. We organize regular events, such as meetups,
        workshops, and talks, that provide valuable insights, practical skills,
        and networking opportunities. Our mission is to empower members to excel
        in their careers and to create a thriving DevOps community in Nairobi.
        We promote the values of continuous improvement, automation, and
        collaboration, and aim to make a positive impact on the industry as a
        whole.
      </p>
      <div className="mx-8 leading-relaxed text-5xl  font-bold ">Vision</div>
      <p className="mx-8 leading-relaxed">
        Our vision is to be a leading DevOps community in Nairobi, driving
        innovation and empowering professionals to excel in their careers.
      </p>
      <div className="mx-8 leading-relaxed text-5xl  font-bold ">Objectives</div>

      <ol className=" mb-6 mx-8 leading-relaxed list-decimal pl-10">
        <li>
          
          Fostering a collaborative community of DevOps professionals in Nairobi
          and surrounding areas.
        </li>
        <li>
          Promoting the adoption of DevOps best practices and principles among
          individuals and organizations in the region.
        </li>
        <li>
          Providing networking opportunities for DevOps professionals to share
          knowledge, experiences, and ideas.
        </li>
        <li>
          Organizing and host regular events, such as meetups, workshops, and
          talks, that promote DevOps culture and practices.
        </li>
        <li>
          Providing educational resources and training opportunities for members
          to develop and enhance their skills in DevOps.
        </li>
        <li>
          Establishing partnerships with other technology communities and
          organizations in Nairobi and globally to promote the benefits of
          DevOps practices.
        </li>
        <li>
          Promoting diversity and inclusivity within the DevOps community by
          providing a safe and welcoming space for all individuals, regardless
          of their background or identity.
        </li>
        <li>
        
          Recognizing and celebrating the achievements of members and
          organizations in the DevOps community, and to highlight their
          contributions to the industry.
        </li>
        <li>
          Providing mentorship and guidance to new and emerging DevOps
          professionals, and to support their development and growth within the
          industry.
        </li>
      </ol>
     </section>

      <section className="bg-[#0c2c44] text-white">
        <div className="container px-4 py-16 mx-auto space-y-8 lg:max-w-3xl">
          <h2 className="text-2xl font-bold md:text-5xl text-[#0da4d4]">
            Activities
          </h2>
          <div className="space-y-8">
            <div>
              <ul className="space-y-4">
                <li className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <FaInfinity className="text-[#0da4d4]" />
                    <h4 className="font-medium ">Meetups</h4>
                  </div>
                  <p className="ml-7 text-gray-400">
                    Regular meetups where DevOps professionals can network,
                    share ideas, and learn from each other.
                  </p>
                </li>
                <li className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <FaInfinity className="text-[#0da4d4]" />
                    <h4 className="font-medium">Workshops</h4>
                  </div>
                  <p className="ml-7 text-gray-400">
                    {" "}
                    Hands-on workshops that focus on specific DevOps tools,
                    technologies, and practices.
                  </p>
                </li>

                <li className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <FaInfinity className="text-[#0da4d4]" />
                    <h4 className="font-medium">Online resources</h4>
                  </div>
                  <p className="ml-7 text-gray-400">
                    Access to online resources such as blogs, recordings, and
                    e-books that provide guidance and insights on DevOps
                    practices.
                  </p>
                </li>
                <li className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <FaInfinity className="text-[#0da4d4]" />
                    <h4 className="font-medium">Mentoring programs</h4>
                  </div>
                  <p className="ml-7 text-gray-400">
                    Pairing experienced DevOps professionals with emerging
                    professionals for mentorship and guidance.
                  </p>
                </li>
                <li className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <FaInfinity className="text-[#0da4d4]" />
                    <h4 className="font-medium"> Community projects</h4>
                  </div>
                  <p className="ml-7 text-gray-400">
                    Collaborative projects within the community that demonstrate
                    the benefits of DevOps practices and technologies.
                  </p>
                </li>

                <li className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <FaInfinity className="text-[#0da4d4]" />
                    <h4 className="font-medium">Social events</h4>
                  </div>
                  <p className="ml-7 dark:text-gray-400">
                    Non-technical events that allow members of the community to
                    get to know each other on a more personal level and build
                    stronger relationships.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/*  Meet the Team  */}
      <div class="flex items-center justify-center min-h-screen bg-white py-12">
        <div class="flex flex-col">
          <div class="flex flex-col mt-8">
            <div class="container max-w-7xl px-4">
              {/* <!-- Section Header --> */}
              <div class="flex flex-wrap justify-center text-center mb-24">
                <div class="w-full lg:w-6/12 px-4">
                  {/* <!-- Header --> */}
                  <h1 class="text-gray-900 text-4xl font-bold mb-4">
                    Meet the Team
                  </h1>

                  {/* <!-- Description --> */}
                  <p class="text-gray-700 text-lg font-light">
                    We've got a well-seasoned team at the helm.
                  </p>
                </div>
              </div>

              {/* <!-- Team Members --> */}
              <div class="flex flex-wrap">
                <div class="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                  <div class="flex flex-col">
                    <a href="#" class="mx-auto">
                      <img
                        class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                        src={blank}
                        alt=""
                      />
                    </a>

                    {/* <!-- Details --> */}
                    <div class="text-center mt-6">
                      <h1 class="text-gray-900 text-xl font-bold mb-1">
                        lorem
                      </h1>

                      <div class="text-gray-700 font-light mb-2">Founder</div>

                      <div
                        class="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300"
                      >
                        <a
                          href="#"
                          class="flex rounded-full hover:bg-indigo-50 h-10 w-10"
                        >
                          <FaFacebook />
                        </a>

                        <a
                          href="#"
                          class="flex rounded-full hover:bg-blue-50 h-10 w-10"
                        >
                          <FaFacebook />
                        </a>

                        <a
                          href="#"
                          class="flex rounded-full hover:bg-orange-50 h-10 w-10"
                        >
                          <FaFacebook />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                  <div class="flex flex-col">
                    <a href="#" class="mx-auto">
                      <img
                        class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                        src={blank}
                        alt=""
                      />
                    </a>

                    <div class="text-center mt-6">
                      <h1 class="text-gray-900 text-xl font-bold mb-1">
                        Lorem
                      </h1>

                      <div class="text-gray-700 font-light mb-2">
                        Specialist
                      </div>

                      <div
                        class="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300"
                      >
                        <a
                          href="#"
                          class="flex rounded-full hover:bg-indigo-50 h-10 w-10"
                        >
                          <FaFacebook />
                        </a>

                        <a
                          href="#"
                          class="flex rounded-full hover:bg-blue-50 h-10 w-10"
                        >
                          <FaFacebook />
                        </a>

                        <a
                          href="#"
                          class="flex rounded-full hover:bg-orange-50 h-10 w-10"
                        >
                          <FaFacebook />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                  <div class="flex flex-col">
                    <a href="#" class="mx-auto">
                      <img
                        class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                        src={blank}
                        alt=""
                      />
                    </a>

                    <div class="text-center mt-6">
                      <h1 class="text-gray-900 text-xl font-bold mb-1">
                        Lorem
                      </h1>

                      <div class="text-gray-700 font-light mb-2">
                        Team Member
                      </div>

                      <div
                        class="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300"
                      >
                        <a
                          href="#"
                          class="flex rounded-full hover:bg-indigo-50 h-10 w-10"
                        >
                          <FaFacebook />
                        </a>

                        <a
                          href="#"
                          class="flex rounded-full hover:bg-blue-50 h-10 w-10"
                        >
                          <FaFacebook />
                        </a>

                        <a
                          href="#"
                          class="flex rounded-full hover:bg-orange-50 h-10 w-10"
                        >
                          <FaFacebook />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                  <div class="flex flex-col">
                    <a href="#" class="mx-auto">
                      <img
                        class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                        src={blank}
                        alt=""
                      />
                    </a>

                    <div class="text-center mt-6">
                      <h1 class="text-gray-900 text-xl font-bold mb-1">
                        Lorem
                      </h1>

                      <div class="text-gray-700 font-light mb-2">Lorem</div>

                      <div
                        class="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300"
                      >
                        <a
                          href="#"
                          class="flex rounded-full hover:bg-indigo-50 h-10 w-10"
                        >
                          <FaFacebook />
                        </a>

                        <a
                          href="#"
                          class="flex rounded-full hover:bg-blue-50 h-10 w-10"
                        >
                          <FaFacebook />
                        </a>

                        <a
                          href="#"
                          class="flex rounded-full hover:bg-orange-50 h-10 w-10"
                        >
                          <FaFacebook />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

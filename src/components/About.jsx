import React from 'react'
import { FaFacebook } from "react-icons/fa";
import blank from "../assets/blankavatar.jpg";
import background from '../assets/devops.jpg';

function About() {
  return (
    <div>
    
    <div className="bg-black bg-opacity-75 bg-cover bg-50%_50% bg-no-repeat flex flex-col mb-24" style={{ backgroundImage: `url(${background})` }}>
      <div className=" flex flex-col h-[889px] shrink-0 pt-56 pb-[299px] px-24">
        <div className="text-center text-5xl font-['Poppins'] font-bold text-white ml-8">
          The Nairobi DevOps Community is led by a group of dedicated individuals
          who are passionate about promoting the growth and success of the DevOps
          industry in Nairobi and beyond. Our leadership team is composed of
          experienced professionals from the tech field.
        </div>
      </div>
    </div>
    <div className="text-center text-5xl font-['Poppins'] font-bold self-start ml-40 w-48">
      Mission
    </div>
    <div className="text-3xl font-['Poppins'] h-[6.88%] mb-16 ml-40 mr-[140px]">
      We strive to promote collaboration, innovation, and best practices within
      the DevOps industry in Nairobi. Our mission is to create a supportive and
      inclusive community that values diversity and fosters learning and growth.
      We organize regular events, such as meetups, workshops, and talks, that
      provide valuable insights, practical skills, and networking opportunities.
      Our mission is to empower members to excel in their careers and to create a
      thriving DevOps community in Nairobi. We promote the values of continuous
      improvement, automation, and collaboration, and aim to make a positive
      impact on the industry as a whole.
    </div>
    <div className="text-center text-5xl font-['Poppins'] font-bold self-start ml-40 w-40">
      Vision
    </div>
    <div className="text-3xl font-['Poppins'] h-[1.86%] mb-16 ml-[171px] mr-32">
      Our vision is to be a leading DevOps community in Nairobi, driving
      innovation and empowering professionals to excel in their careers.
      <br />
    </div>
    <div className="text-5xl font-['Poppins'] font-bold self-start ml-[171px] w-64">
      Objectives
    </div>
    <div className="text-3xl font-['Poppins'] h-[16.69%] mb-20 ml-[178px] mr-32">
      To foster a collaborative community of DevOps professionals in Nairobi and
      surrounding areas.
      <br />
      To promote the adoption of DevOps best practices and principles among
      individuals and organizations in the region.
      <br />
      To provide networking opportunities for DevOps professionals to share
      knowledge, experiences, and ideas.
      <br />
      To organize and host regular events, such as meetups, workshops, and talks,
      that promote DevOps culture and practices.
      <br />
      To provide educational resources and training opportunities for members to
      develop and enhance their skills in DevOps.
      <br />
      To establish partnerships with other technology communities and
      organizations in Nairobi and globally to promote the benefits of DevOps
      practices.
      <br />
      To promote diversity and inclusivity within the DevOps community by
      providing a safe and welcoming space for all individuals, regardless of
      their background or identity.
      <br />
      To recognize and celebrate the achievements of members and organizations in
      the DevOps community, and to highlight their contributions to the industry.
      <br />
      To provide mentorship and guidance to new and emerging DevOps professionals,
      and to support their development and growth within the industry.
    </div>
    <div className="text-5xl font-['Poppins'] font-bold self-start ml-[171px] w-56">
      Activities
    </div>
    <div className="text-3xl font-['Poppins'] h-[11.04%] mb-12 ml-[178px] mr-32">
      Meetups: Regular meetups where DevOps professionals can network, share
      ideas, and learn from each other.
      <br />
      Workshops: Hands-on workshops that focus on specific DevOps tools,
      technologies, and practices.
      <br />
      Online resources: Access to online resources such as blogs, recordings, and
      e-books that provide guidance and insights on DevOps practices.
      <br />
      Mentoring programs: Pairing experienced DevOps professionals with emerging
      professionals for mentorship and guidance.
      <br />
      Community projects: Collaborative projects within the community that
      demonstrate the benefits of DevOps practices and technologies.
      <br />
      Social events: Non-technical events that allow members of the community to
      get to know each other on a more personal level and build stronger
      relationships.
    </div>
    <div className="whitespace-nowrap text-5xl font-['Poppins'] font-bold self-start w-[243px] mb-6 ml-[178px]">
      Our Team
    </div>
 
    <div class="flex items-center justify-center min-h-screen bg-white py-48">
        <div class="flex flex-col">
          <div class="flex flex-col mt-8">
            {/* <!-- Meet the Team --> */}
            <div class="container max-w-7xl px-4">
              {/* <!-- Section Header --> */}
              <div class="flex flex-wrap justify-center text-center mb-24">
                <div class="w-full lg:w-6/12 px-4">
                  {/* <!-- Header --> */}
                  <h1 class="text-gray-900 text-4xl font-bold mb-8">
                    Meet the Team
                  </h1>

                  {/* <!-- Description --> */}
                  <p class="text-gray-700 text-lg font-light">
                    With over 100 years of combined experience, we've got a
                    well-seasoned team at the helm.
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
                        <FaFacebook />

                        <FaFacebook />

                        <FaFacebook />
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
                        <FaFacebook />

                        <FaFacebook />

                        <FaFacebook />
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
                        <FaFacebook />

                        <FaFacebook />

                        <FaFacebook />
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
  )
}

export default About;

import React from "react";
import Navbar from "../Navbar/Navbar";
import "./style.css";

function Projects() {
  const dataScience = [
    {
      title: "Natural Language Qury solver for IIITS (NQSI)",
      imgLink: "https://wallpapercave.com/wp/wp10299388.jpg",
      date: "Aug - Nov 2021",
      discription:
        "review sentiment analysis : an nlp model that takes reviews and detects postive or negitave.IIITS chat bot: This chat bot answers the quries related to IIITS collage. review summarizer : nlp model that summarizes the reviews",
      tech: ["Python", "NLP", "TensorFlow", "NLTK"],
      code: "https://github.com/rohit11544/NQSI",
    },
    {
      title: "Used cars Information Retrieval System",
      imgLink:
        "https://ibnusina.utm.my/wp-content/uploads/2020/02/information-retrieval-c.jpg",
      date: "Nov - Dec 2021",
      discription:
        "Implemented tfidf-ranking on documents that contain the information of used cars.and also implemented relevance feedback to improve the ranking",
      tech: ["Python", "NLP", "Information Retrieval", "NLTK", "Ranking"],
      code: "https://github.com/rohit11544/Used-cars-documents-Retrieval-system",
    },
    {
      title: "Credit-Card-Fraud-Detection",
      imgLink:
        "https://thumbs.dreamstime.com/b/hacker-stealing-credit-card-number-internet-theft-man-wearing-balaclava-holding-sat-behind-laptop-39106503.jpg",
      date: "May - Jun 2020",
      discription:
        "Machine learning model that Detects the fraud credit card transaction.",
      tech: [
        "Python",
        "Data Preprocessing",
        "Data Visualization",
        "Machine Learning",
      ],
      code: "https://github.com/rohit11544/Credit-Card-Fraud-Detection",
    },
    {
      title: "Covid-19 virus Classifier",
      imgLink:
        "https://media.istockphoto.com/photos/coronavirus-new-strain-wide-dark-background-picture-id1308624310?b=1&k=20&m=1308624310&s=170667a&w=0&h=HyEGR3DtK8TD2_kqoryPPuBWexQnG_KK0KhHYtXvm-c=",

      date: "Jul - Aug 2020",
      discription:
        "computer vision model that classifies weather a person is normal,Viral Pneumonia or has covid by giving there chest x-ray images",
      tech: ["Python", "Computer Vision", "openCV", "Deep Learning"],
      code: "https://github.com/rohit11544/Covid-19-",
    },
    {
      title: "CUDA and CUDA graphs",
      imgLink:
        "https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/community/wallpapers/nvidia-geforce-gtx-titan-z-wallpapers-now-available/GTX-TITAN-Z-1280x720-Wallpaper-Shatter-2.jpg",
      date: "Jan - March 2021",
      discription:
        "Here are the implimentation of CUDA/C++ programs which are optimized to a have a good Kernel excution time. Implemented Cuda graphs which remove the overheds in launching the kernel as it already dose the work required to launch kernel.",
      tech: ["C++", "CUDA", "CUDA graphs", "GPU Computing", "NVIDIA"],
      code: "https://github.com/rohit11544/CUDA-GRAPHS",
    },
  ];

  const webDevelopment = [
    {
      title: "PEM-joy",
      imgLink:
        "https://media.istockphoto.com/photos/young-man-using-a-tablet-in-a-mechanics-workshop-picture-id467709538?k=20&m=467709538&s=612x612&w=0&h=JW1GKtL0XM6uaxaLaW_ZmSuCaJlP3F8Jwn8E4oZRXXA=",
      date: "Dec 2021 - Jan 2022",
      discription:
        "An end to end web application which is build using MERN stack. This application provide customers to contact workers like plumbers, electrations, mechanics online. customers can also book and buy house appliances from our website. this application has been deployed and hosted.",
      tech: [
        "React",
        "Redux",
        "Mongo DB",
        "Node js",
        "Express",
        "JavaScript",
        "HTML",
        "CSS",
        "Bootstrap",
      ],
      code: "https://github.com/rohit11544/pem-joy-client",
      app: "https://pem-joy-app.herokuapp.com/",
    },
    {
      title: "FARMERS-JOY",
      imgLink:
        "https://inhabitat.com/wp-content/blogs.dir/1/files/2018/10/online-farmers-markets-2-889x592.jpg",
      date: "Feb - Apr 2021",
      discription:
        "An application that provides direct contact beteween farmers and customers which helps the farmers to sell there products  to a resonable price and on the other side the customer gets to by quality and healthy products and also avoid customer to pay taxes. This website was built by using python Django web frame work.",
      tech: ["Python", "Django", "MySQL", "HTML", "CSS", "JavaScript"],
      code: "https://github.com/rohit11544/Farm-To-Home",
      app: "",
    },
  ];

  console.log(dataScience);
  return (
    <>
      <Navbar />
      <div>
        <section className="dark">
          <div className="container py-4">
            <h1
              className="h1 text-center card-skill-style"
              id="pageHeaderTitle"
            >
              Full Stack Web Development
            </h1>

            {webDevelopment.map((project) => (
              <>
                <article className="postcard dark blue">
                  <a className="postcard__img_link" href="#">
                    <img
                      className="postcard__img"
                      src={project.imgLink}
                      alt="Image Title"
                    />
                  </a>
                  <div className="postcard__text">
                    <h1 className="postcard__title blue">
                      <a target="_blank" href={project.app}>
                        {project.title}
                      </a>
                    </h1>
                    <div className="postcard__subtitle small">
                      <time dateTime="2020-05-25 12:00:00">
                        <i className="fas fa-calendar-alt mr-2" />
                        {project.date}
                      </time>
                    </div>
                    <div className="postcard__bar" />
                    <div className="postcard__preview-txt">
                      {project.discription}
                    </div>
                    <ul className="postcard__tagbox">
                      {project.tech.map((t) => (
                        <>
                          <li className="tag__item">
                            <i className="fas fa-tag mr-2" />
                            {t}
                          </li>
                        </>
                      ))}
                    </ul>
                    <a target="_blank" href={project.code}>
                      <h6 className="dark-source-code-style">Source Code</h6>
                    </a>{" "}
                  </div>
                </article>
              </>
            ))}
          </div>
        </section>
        <section className="dark">
          <div className="container py-2">
            <h1
              className="h1 text-center card-skill-style"
              id="pageHeaderTitle"
            >
              Data Science
            </h1>
            {dataScience.map((project) => (
              <>
                <article className="postcard light blue">
                  <a className="postcard__img_link" href="#">
                    <img
                      className="postcard__img"
                      src={project.imgLink}
                      alt="Image Title"
                    />
                  </a>
                  <div className="postcard__text t-dark">
                    <h1 className="postcard__title blue">
                      <a href="#">{project.title}</a>
                    </h1>
                    <div className="postcard__subtitle small">
                      <time dateTime="2020-05-25 12:00:00">
                        <i className="fas fa-calendar-alt mr-2" />
                        {project.date}
                      </time>
                    </div>
                    <div className="postcard__bar" />
                    <div className="postcard__preview-txt">
                      {project.discription}
                    </div>
                    <ul className="postcard__tagbox">
                      {project.tech.map((t) => (
                        <>
                          <li className="tag__item">
                            <i className="fas fa-tag mr-2" />
                            {t}
                          </li>
                        </>
                      ))}
                    </ul>
                    <a target="_blank" href={project.code}>
                      <h6 className="light-source-code-style">Source Code</h6>
                    </a>{" "}
                  </div>
                </article>
              </>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default Projects;

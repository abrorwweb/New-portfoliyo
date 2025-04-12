import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

// import components
import IconButton from "../common/components/IconButton/IconButton";
import InputField from "../common/components/InputField/InputField";
import TextAreaField from "../common/components/TextAreaField/TextAreaField";
import SubmitButton from "../common/components/SubmitButton/SubmitButton";
import Loader from "../common/components/Loader/Loader";

// import icons
import { FaReact } from "react-icons/fa";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillHtml5,
  AiOutlineEye,
} from "react-icons/ai";
import {
  BiLogoGmail,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoRedux,
  BiLogoJava,
} from "react-icons/bi";
import { BsFacebook, BsGit, BsPuzzle } from "react-icons/bs";

import { RiSendPlaneFill } from "react-icons/ri";
import { SiTypescript, SiRecoil, SiReactquery } from "react-icons/si";

//import images
import Ataa from "../assets/images/Ataa.png";
import Elzero from "../assets/images/Elzero.png";
import Kasper from "../assets/images/Kasper.png";
import Leon from "../assets/images/Leon.png";
import SokoNumber from "../assets/images/SokoNumber.png";
import GlobalShare from "../assets/images/GlobalShare.png";

// import style
import style from "./App.module.css";
import clsx from "clsx";

const skills = [
  {
    name: "HTML",
    icon: <BiLogoCss3 size="25px" color="white" />,
    cssName: "html",
    level: 90,
  },
  {
    name: "CSS",
    icon: <BiLogoCss3 size="25px" color="white" />,
    cssName: "css",
    level: 85,
  },
  {
    name: "JavaScript",
    icon: <BiLogoJavascript size="25px" color="white" />,
    cssName: "java-script",
    level: 80,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size="25px" color="white" />,
    cssName: "type-script",
    level: 70,
  },
  {
    name: "React",
    icon: <FaReact size="25px" color="white" />,
    cssName: "react",
    level: 85,
  },
  {
    name: "Redux Toolkit",
    icon: <BiLogoRedux size="25px" color="white" />,
    cssName: "redux",
    level: 75,
  },
  {
    name: "Git",
    icon: <BsGit size="25px" color="white" />,
    cssName: "git",
    level: 60,
  },
];

const projects = [
  {
    name: "Unsplash",
    link: "https://exam-4zif.vercel.app/",
    github: "https://github.com/abrorwweb/Exam",
    description:
      "Bu loyiha mashhur Unsplash platformasining kloni bo‘lib, foydalanuvchilarga bepul sifatli rasmlarni qidirish, saqlash va yuklab olish imkonini beradi. Loyiha orqali foydalanuvchi tajribasini maksimal darajada qulay qilishga harakat qildim.",
    image: GlobalShare,
  },
  {
    name: `Uzum Market`,
    link: "https://it-uzum-self.vercel.app/",
    github: "https://github.com/abrorwweb/IT-UZUM",
    description:
      "Ushbu loyiha mashhur Uzum Market ilovasining ilhomida yaratilgan e-commerce (onlayn do‘kon) platformasining kloni bo‘lib, foydalanuvchilarga mahsulotlarni ko‘rish, saralash, qidirish va xarid qilish imkoniyatini beradi. Dizayn va funksionallik jihatdan real market ilovasiga juda yaqinlashtirildi.",
    image: Ataa,
  },
  {
    name: "Flex",
    link: "https://exam-kohl-eight.vercel.app/",
    github: "https://github.com/abrorwweb/Unsplash-exam",
    description:
      "Ushbu loyiha mashhur Unsplash platformasining kloni bo‘lib, foydalanuvchilarga bepul sifatli rasmlarni qidirish, ko‘rish, yoqtirish va yuklab olish imkoniyatini beradi. Platforma zamonaviy dizayn va qulay interfeys asosida ishlab chiqilgan.",
    image: SokoNumber,
  },
  {
    name: "Portfoliyo",
    link: "https://portfoliyo-iota.vercel.app/",
    github: "https://github.com/abrorwweb/Portfoliyo",
    description:
      "Bu loyiha mening shaxsiy portfolio saytim bo‘lib, unda men haqimda ma'lumotlar, loyihalarim, texnik ko‘nikmalarim (skills) va kontakt sahifalari jamlangan. Sayt zamonaviy, minimalist dizaynda yaratilgan va foydalanuvchi uchun qulay interfeysga ega.",
    image: Leon,
  },

];

function App() {
  const form = useRef();

  const [menu, setMenu] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(function () {
      emailjs
        .sendForm(
          "service_gjbmeus",
          "template_qk6p0pa",
          form.current,
          "HDMwz57k3xrihLg4J"
        )
        .then((result) => {
          e.target.name.value = "";
          e.target.email.value = "";
          e.target.message.value = "";
        });
      setLoading(false);
    }, 2000);
  };

  return (
    <div className={style.app}>
      {/* Navbar */}
      <div className={style.nav}>
        <a className={style.logo}>
          <FaReact color="var(--primary-main)" size="50px" />
          <h5>Abror Abdurahimov</h5>
        </a>
        <ul>
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
        <div className={style["menu-icon"]}>
          <input id="checkbox" className={style["checkbox2"]} type="checkbox" />
          <label
            className={`${style.toggle} ${style.toggle2}`}
            for="checkbox"
            onClick={() => setMenu(!menu)}
          >
            <div className={`${style.bars} ${style.bar4}`}></div>
            <div className={`${style.bars} ${style.bar5}`}></div>
            <div className={`${style.bars} ${style.bar6}`}></div>
          </label>
        </div>
      </div>
      {menu === true && (
        <ul className={style.menu}>
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      )}

      {/* Home */}
      <div id="Home" className={style.home}>
        <div className={style["home-content"]}>
          <h1>
            HEY, I'M <br /> Abror Abdurahimov
          </h1>
          <p>
		  Veb-saytlar va veb-ilovalarning foydalanuvchi interfeysini (Frontend qismini) yaratishga ixtisoslashgan veb dasturchi bo‘lib, umumiy mahsulot muvaffaqiyatiga hissa qo‘shuvchi yechimlar ishlab chiqaman.
          </p>
        </div>
        <div className={style["scroll-icon"]}>
          <div
            className={style["scroll-down"]}
            style={{ color: "skyblue !important" }}
          >
            <div className={style.chevrons}>
              <div className={style["chevron-down"]}></div>
              <div className={style["chevron-down"]}></div>
            </div>
          </div>
        </div>
        <div className={style["contact-nav"]}>
          <a
            className={style.github}
            target="_blank"
            href="https://github.com/abrorwweb"
          >
            <AiFillGithub size="30px" color="black" />
          </a>
          <a
            className={style.linkedin}
            target="_blank"
            href="www.linkedin.com/in/abrorjon-abdurahimov-488979335"
          >
            <AiFillLinkedin size="30px" color="black" />
          </a>
          <a
            className={style.gmail}
            target="_blank"
            href="abrorjonabdurahimov42@gmail.com"
          >
            <BiLogoGmail size="30px" color="black" />
          </a>
          <a
            className={style.facebook}
            target="_blank"
            href="https://www.instagram.com/__abdurakhimovv_?igsh=aGdwcTJwcnFwd25y"
          >
            <BsFacebook size="30px" color="black" />
          </a>
        </div>
      </div>

      {/* About */}
      <div id="About" className={style.about}>
        <div className={style.container}>
          <h2 className={style.title}>About Me</h2>
          <div className={style["about-content"]}>
            <div className={style["about-info"]}>
              <h3>Men bilan tanishing!</h3>
              <p>
                Men — <span>Frontend Web Dasturchi</span>man. Veb-saytlar va
                veb-ilovalarining old qism (Frontend) qismini yaratish orqali
                ularning umumiy muvaffaqiyatiga hissa qo‘shaman.{" "}
                <span>Loyihalar</span> bo‘limida ba'zi ishlarim bilan tanishib
                chiqishingiz mumkin.
                <span>Veb dasturlash</span> bo‘yicha yillar davomida o‘rgangan
                bilimlarimni boshqalar bilan bo‘lishishni yoqtiraman. Bu orqali
                boshqa dasturchilar jamiyatiga foyda keltirishga harakat
                qilaman. Mening{" "}
                <a href="https://github.com/abrorwweb" target="_blank">
                  GitHub
                </a>{" "}
                sahifamga tashrif buyuring — u yerda Veb dasturlash va
                dasturlash bilan bog‘liq foydali materiallarimni joylab boraman.
                Men <span>ish</span> takliflariga ochiqman — ayniqsa bilimlarim
                va tajribamga mos keladigan imkoniyatlar bo‘lsa, o‘rganish,
                rivojlanish va hissa qo‘shish istagidaman. Agar sizda shunday
                imkoniyat bo‘lsa, bemalol <span>aloqa</span>ga chiqing!
              </p>
            </div>
            <div className={style["my-skill"]}>
              <h3>My Skills</h3>
              <div className={style.skills}>
                {skills.map((skill, index) => {
                  return (
                    <div
                      key={`skill${index}`}
                      className={`${style.skill} ${style[skill.cssName]}`}
                    >
                      <div className={style["skill-name"]}>{skill.name}</div>
                      <div className={style["skill-icon"]}>{skill.icon}</div>

                      <div className={style["skill-progress"]}>
                        <div className={style["skill-bar"]}>
                          <div
                            className={style["skill-fill"]}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div id="Projects" className={style.projects}>
        <div className={style.container}>
          <h2 className={style.title}>Projects</h2>
          <p>
		  Bu yerda siz mening shaxsiy va mijozlarim loyihalarini topasiz
		  har bir loyiha o'z misolini o'z ichiga olgan holda yaratilgan
          </p>
          <div className={style["projects-list"]}>
            {projects.map((project, index) => {
              return (
                <div key={`project${index}`} className={style.project}>
                  <div className={style["project-image"]}>
                    <img src={project.image} alt="Project Image" />
                  </div>
                  <div className={style["project-info"]}>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <div className={style["project-buttons"]}>
                      <IconButton
                        width="170px"
                        height="50px"
                        backgroundColor="var(--primary-main)"
                        color="white"
                        link={project.link}
                        icon={<AiOutlineEye size="25px" color="white" />}
                      >
                        Live Demo
                      </IconButton>
                      <IconButton
                        width="100px"
                        height="50px"
                        backgroundColor="black"
                        color="white"
                        link={project.github}
                        icon={<AiFillGithub size="25px" color="white" />}
                      >
                        Github
                      </IconButton>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Contact */}
      <div id="Contact" className={style.contact}>
        <div className={style.container}>
          <h2 className={style.title}>Contact</h2>
          <p>
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible
          </p>
          <form
            ref={form}
            onSubmit={sendEmail}
            className={clsx({ [style["inactive-form"]]: loading })}
          >
            <InputField
              width="700px"
              height="40px"
              name="name"
              placeholder="Enter Your Name"
              label="Name"
              type="text"
            />
            <InputField
              width="700px"
              height="40px"
              name="email"
              placeholder="Enter Your Email"
              label="Email"
              type="email"
            />
            <TextAreaField
              width="700px"
              height="250px"
              name="message"
              placeholder="Enter Your Message"
              label="Message"
              type="text"
            />
            <SubmitButton
              icon={<RiSendPlaneFill size="20px" color="white" />}
              width="200px"
              height="60px"
              color="white"
              backgroundColor="var(--primary-main)"
            >
              Submit
            </SubmitButton>
            {loading && (
              <div className={style.loader}>
                <Loader />
              </div>
            )}
          </form>
        </div>
      </div>

      {/* footer */}
      <div className={style.footer}>
        <div className={style.container}>
          <div className={style["footer-info"]}>
            <div>
              <h3>Abror Abdurahimov</h3>
              <p>
                A Frontend focused Web Developer building the Frontend of
                Websites and Web Applications that leads to the success of the
                overall product
              </p>
            </div>
            <div className={style.social}>
              <h3>Social</h3>
              <div className="">
                <a
                  className={style.git}
                  target="_blank"
                  href="https://github.com/abrorwweb"
                >
                  <AiFillGithub size="30px" color="white" />
                </a>
                <a
                  className={style.linkedin}
                  target="_blank"
                  href="www.linkedin.com/in/abrorjon-abdurahimov-488979335"
                >
                  <AiFillLinkedin size="30px" color="white" />
                </a>
                <a
                  className={style.gmail}
                  target="_blank"
                  href="abrorjonabdurahimov42@gmail.com"
                >
                  <BiLogoGmail size="30px" color="white" />
                </a>
                <a
                  className={style.facebook}
                  target="_blank"
                  href="https://www.instagram.com/__abdurakhimovv_?igsh=aGdwcTJwcnFwd25y"
                >
                  <BsFacebook size="30px" color="white" />
                </a>
              </div>
            </div>
          </div>
          <div className={style["copy-right"]}>
            © Copyright 2023. Made by <span>Abror Abdurahimov</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

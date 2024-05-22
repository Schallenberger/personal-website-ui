/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import { Tabs } from "./ui/tabs";
import { ChevronDoubleRightIcon } from "@heroicons/react/16/solid";

export function Experience() {
  const tabs = [
    {
      title: "Deskfy",
      value: "Deskfy",
      content: (
        <div className="w-full flex flex-col items-start gap-5 justify-center text-start overflow-hidden relative h-full rounded-2xl p-10 bg-gradient-to-br from-purple-700 to-violet-900">
          <h1 className="text-xl md:text-4xl font-bold text-white">Deskfy</h1>
          <h2 className="text-md md:text-2xl font-semibold text-white">Fullstack Software Engineer</h2>
          <h3 className="text-md md:text-xl font-normal text-white">07/2022 - Current</h3>
          <div className="flex items-start justify-start gap-3">
            <ChevronDoubleRightIcon className="w-14"/>
            <p className="text-xl md:text-xl text-white">Working in the Core Squad with a team of seven individuals, I played a crucial role in the creation and optimization of various features. In addition to being responsible for the review of pull requests and the maintenance of all system modules, I delved into a range of technologies, including AngularJs, ReactJs, NextJs, NodeJs, NestJs, Sequelize, PostgreSql, Docker, aws, and Git.</p>
          </div>
          <div className="flex items-start justify-start gap-3">
            <ChevronDoubleRightIcon className="w-14"/>
            <p className="text-xl md:text-xl text-white">Beyond these responsibilities, I had parallel experiences within the company, collaborating directly with the CTO on the development of the exhibition site. This opportunity provided a broader perspective and a significant contribution beyond my primary role in the Core Squad.</p>
          </div>
        </div>
      ),
    },
    {
      title: "GVdasa",
      value: "GVdasa",
      content: (
        <div className="w-full flex flex-col items-start gap-5 justify-center text-start overflow-hidden relative h-full rounded-2xl p-10 bg-gradient-to-br from-purple-700 to-violet-900">
          <h1 className="text-xl md:text-4xl font-bold text-white">GVdasa</h1>
          <h2 className="text-md md:text-2xl font-semibold text-white">Fullstack Software Developer</h2>
          <h3 className="text-md md:text-xl font-normal text-white">09/2021 - 07/2022</h3>
          <div className="flex items-start justify-start gap-3">
            <ChevronDoubleRightIcon className="w-14"/>
            <p className="text-xl md:text-xl text-white">Within the realm of the Accounting and Finance team, I played a pivotal role in the creation and maintenance of the innovative accounting module within the GVdasa Intelligent Educational ERP. My involvement spanned the mastery of advanced technologies such as .NET Framework, Microsoft SQL Server, Docker, Git, React.js, AngularJS, JavaScript, ExtJs, and Microsoft Azure.</p>
          </div>
          <div className="flex items-start justify-start gap-3">
            <ChevronDoubleRightIcon className="w-14"/>
            <p className="text-xl md:text-xl text-white">Throughout this period, I actively collaborated with a diverse team, comprising analysts, quality assurance specialists (QAs), software engineers, and managers. This experience not only solidified my proficiency in the mentioned technologies but also provided a rich learning and collaborative environment. The collective effort resulted in efficient solutions, significantly contributing to the success of the project and enhancing my professional journey.</p>
          </div>
        </div>
      ),
    },
    {
      title: "Trinto",
      value: "Trinto",
      content: (
        <div className="w-full flex flex-col items-start gap-5 justify-center text-start overflow-hidden relative h-full rounded-2xl p-10 bg-gradient-to-br from-purple-700 to-violet-900">
          <h1 className="text-xl md:text-4xl font-bold text-white">Trinto</h1>
          <h2 className="text-md md:text-2xl font-semibold text-white">Frontend Engineer</h2>
          <h3 className="text-md md:text-xl font-normal text-white">05/2021 - 08/2021</h3>
          <div className="flex items-start justify-start gap-3">
            <ChevronDoubleRightIcon className="w-14"/>
            <p className="text-xl md:text-xl text-white">Collaborating with the UolEdtech team, I took on the responsibility for developing various websites for several Brazilian universities and the UOL technology group. I utilized Vue.js, SCSS, NodeJs, Git, and various other libraries depending on the specific scenario.</p>
          </div>
          <div className="flex items-start justify-start gap-3">
            <ChevronDoubleRightIcon className="w-14"/>
            <p className="text-xl md:text-xl text-white">Working closely with backend and frontend developers, as well as designers, I gained extensive experience in precisely focused front-end development. This experience not only refined my technical skills but also deepened my understanding of effective collaboration within multidisciplinary teams. The outcome was the delivery of high-quality front-end solutions that met the needs of both universities and the UOL technology group.</p>
          </div>
        </div>
      ),
    },
    {
      title: "Digital Business",
      value: "Digital Business",
      content: (
        <div className="w-full flex flex-col items-start gap-5 justify-center text-start overflow-hidden relative h-full rounded-2xl p-10 bg-gradient-to-br from-purple-700 to-violet-900">
          <h1 className="text-xl md:text-4xl font-bold text-white">Digital Business</h1>
          <h2 className="text-md md:text-2xl font-semibold text-white">Frontend Engineer</h2>
          <h3 className="text-md md:text-xl font-normal text-white">12/2019 - 05/2021</h3>
          <div className="flex items-start justify-start gap-3">
            <ChevronDoubleRightIcon className="w-14"/>
            <p className="text-xl md:text-xl text-white">Collaborating with the design and development team, I took on the responsibility for creating various landing pages, website skins, and animations. I utilized best practices and technologies such as Docker, Git, React.js, AngularJS, HTML5, CSS, and JavaScript to ensure high-quality deliverables.</p>
          </div>
          <div className="flex items-start justify-start gap-3">
            <ChevronDoubleRightIcon className="w-14"/>
            <p className="text-xl md:text-xl text-white">Furthermore, I actively participated in various marketing campaigns, consistently seeking the best solutions for each client's unique needs. My customer-centric approach and the application of cutting-edge technologies contributed to the success of these campaigns, resulting in engaging and impactful online experiences.</p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id='experience' className="py-32">
      <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start mb-40">
        <Tabs tabs={tabs} />
      </div>
    </section>

  );
}

import Project from "./Project"
import { useState } from "react";



export default function Skill () {

  const [choice, setChoice] = useState("All");

  const listSkills = [
    { 
      name: " Symfony",
      image:"https://avatars.githubusercontent.com/u/143937?s=280&v=4",
      desc:"Symfony est un ensemble de composants PHP ainsi qu'un framework MVC libre écrit en PHP. Il fournit des fonctionnalités modulables et adaptables qui permettent de faciliter et d’accélérer le développement d'un site web."
    },
    { 
      name: " Adonis JS",
      image:"https://avatars.githubusercontent.com/u/13810373?s=280&v=4",
      desc:"AdonisJS is a TypeScript-first web framework for building web apps and API servers. It comes with support for testing, modern tooling, an ecosystem of official packages, and more."
    },
    { 
      name: "React ",
      image:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      desc:"Une bibliothèque JavaScript pour créer des interfaces utilisateurs"
    },
    { 
      name: "DevOps",
      image:"https://cdn.freebiesupply.com/logos/large/2x/php-1-logo-png-transparent.png",
      desc:"DevOps is a popular general-purpose scripting language that powers everything from your blog to the most popular websites in the world."
    },
  ]
  return (
    <>
    <section className="flex gap-5 py-10 px-5 ">
    <div className=" w-1/3" >
      <h1 className="text-5xl font-bold text-white mb-5 ">Skillset</h1>
      <p className="leading-relaxed text-slate-400">
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi id nisi, eos numquam ratione hic labore qui ex vel cum magnam rem veniam, molestiae, a odit ducimus deserunt maiores. Voluptates.
      Hic, a consequuntur. Quos repellendus quidem rem voluptate esse quis doloremque enim, eius aliquam iure? Enim, id nobis. Provident impedit tempora quas voluptatum doloribus aliquid totam delectus error possimus voluptates.
      Fugit odio tempore quibusdam explicabo officia quo doloribus porro blanditiis ratione, quae eligendi in veritatis temporibus exercitationem maxime sint voluptatem dolorem consequatur architecto dolore quas!
      </p>
   
    </div>
<ul className="grid grid-cols-2 w-2/3 ">

{listSkills.map((skill) => (
    <li 
    key= {skill.name}
    className="text-white p-5 cursor-pointer"
    onClick={() => setChoice(skill.name)}
    >
    <img 
      src={skill.image}
      alt={skill.name + " logo"}
      width={50}
      className="transition ease-in-out hover:scale-125 py-5"
       />
    <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
    <p className="leading-relaxed text-slate-600">{skill.desc}</p>
</li>
  ))
}
</ul>


    </section>
    <section className="">
    <Project prop={choice}/>
    </section>
</>
  )
}
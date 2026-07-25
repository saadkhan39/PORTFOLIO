import React from "react";
import { motion } from "motion/react";
import SocialLinks from "./SocialLinks";

const titleContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.1,
    },
  },
};

const letterVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    rotateX: -90,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const titlePart1 = "GET IN ";
const titlePart2 = "TOUCH";

const ContactContent = () => {
  return (
    <section
      className="
        relative
        min-h-screen
        flex
        flex-col
        justify-between
        text-white
        px-6
        sm:px-8
        lg:px-12
        py-8
      "
    >
      {/* Animated Heading */}
      <div>
        <motion.h1
          variants={titleContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="
            font-[font1]
            text-[3.5rem]
            sm:text-[5rem]
            lg:text-[5.5rem]
            leading-[0.9]
            flex
            flex-wrap
            overflow-hidden
            py-1
          "
        >
          {/* GET IN */}
          <span className="inline-flex mr-3 sm:mr-4">
            {titlePart1.split("").map((char, index) => (
              <motion.span
                key={`part1-${index}`}
                variants={letterVariants}
                className="inline-block origin-bottom"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </span>

          {/* TOUCH */}
          <span className="inline-flex font-[font2]">
            {titlePart2.split("").map((char, index) => (
              <motion.span
                key={`part2-${index}`}
                variants={letterVariants}
                className="inline-block origin-bottom"
              >
                {char}
              </motion.span>
            ))}
          </span>
        </motion.h1>
      </div>

      {/* Grid Content */}
      <div
        className="
          grid
          grid-cols-1
          lg:grid-cols-3
          gap-10
          lg:gap-14
          mt-10
        "
      >
        {/* Column 1 - Collaboration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p
            className="
              text-[#cfd4df]
              font-[satoshi-regular]
              leading-[1.3]
              text-[0.95rem]
            "
          >
            Have an idea, a product, or a vision you'd like to bring to life?
            I'm always excited to collaborate on meaningful projects and create
            experiences that make an impact.
          </p>

          <a
            href="https://www.linkedin.com/in/saadkh3930/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-5"
          >
            <button
              className="
                group
                relative
                inline-flex
                items-center
                justify-center
                overflow-hidden
                px-6
                py-1.5
                border
                border-white
                font-[font2]
                text-lg
                cursor-pointer
              "
            >
              <span
                className="
                  absolute
                  inset-0
                  bg-white
                  translate-y-full
                  transition-all
                  duration-500
                  group-hover:translate-y-0
                "
              />
              <span
                className="
                  relative
                  z-10
                  transition-colors
                  duration-500
                  group-hover:text-black
                "
              >
                LET'S COLLABORATE
              </span>
            </button>
          </a>
        </motion.div>

        {/* Column 2 - Hiring */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p
            className="
              text-[#cfd4df]
              font-[satoshi-regular]
              leading-[1.3]
              text-[0.95rem]
            "
          >
            I'm actively seeking freelance projects, internships, and full-time
            opportunities where I can contribute, learn, and build products that
            people genuinely enjoy using.
          </p>

          <a
            href="mailto:khansaad3930@gmail.com?subject=Hiring%20Opportunity&body=Hi%20Saad,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20job%20opportunity%20with%20you.%0D%0A%0D%0ALooking%20forward%20to%20hearing%20from%20you."
            className="inline-block mt-5"
          >
            <button
              className="
                group
                relative
                inline-flex
                items-center
                justify-center
                overflow-hidden
                px-6
                py-1.5
                border
                border-white
                font-[font2]
                text-lg
                cursor-pointer
              "
            >
              <span
                className="
                  absolute
                  inset-0
                  bg-white
                  translate-y-full
                  transition-all
                  duration-500
                  group-hover:translate-y-0
                "
              />
              <span
                className="
                  relative
                  z-10
                  transition-colors
                  duration-500
                  group-hover:text-black
                "
              >
                HIRE ME
              </span>
            </button>
          </a>
        </motion.div>

        {/* Column 3 - Socials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p
            className="
              text-[#cfd4df]
              font-[satoshi-regular]
              leading-[1.3]
              text-[0.95rem]
            "
          >
            Whether it's a project, collaboration, career opportunity, or just
            a quick hello, I'd love to connect. Reach out through any of the
            platforms below.
          </p>

          <div className="flex flex-wrap gap-5 mt-8">
            <SocialLinks
              text="LinkedIn"
              href="https://www.linkedin.com/in/saadkh3930/"
            />
            <SocialLinks
              text="GitHub"
              href="https://github.com/saadkhan39"
            />
            <SocialLinks
              text="Instagram"
              href="https://www.instagram.com/_saad_khan_06"
            />
            <SocialLinks
              text="Email"
              href="mailto:khansaad3930@gmail.com"
            />
          </div>
        </motion.div>
      </div>

      {/* Big Name Branding Header */}
      <div className="mt-8 overflow-hidden">
        <motion.h1
          variants={titleContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="
            font-[font1]
            text-center
            text-[4rem]
            sm:text-[7rem]
            md:text-[10rem]
            lg:text-[14rem]
            xl:text-[16rem]
            leading-[0.80]
            tracking-tight
            border-b
            border-white/15
            pb-2
            flex
            justify-center
            flex-wrap
          "
        >
          {"SAAD KHAN".split("").map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className="inline-block origin-bottom"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="
          flex
          flex-col
          md:flex-row
          justify-between
          items-center
          gap-4
          pt-4
          text-[#9aa5b8]
          text-sm
        "
      >
        <p className="text-center md:text-left font-[satoshi-regular]">
          Thank you for visiting my portfolio. Crafted with ❤️ by me.
        </p>

        <div
          className="
            flex
            flex-col
            sm:flex-row
            items-center
            gap-4
            sm:gap-10
            font-[satoshi-regular]
          "
        >
          <span>khansaad3930@gmail.com</span>
          <span>Bhopal, India</span>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactContent;
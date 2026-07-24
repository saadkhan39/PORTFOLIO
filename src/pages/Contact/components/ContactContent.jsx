import React from "react";
import SocialLinks from "./SocialLinks";

const Contact = () => {
  return (
    <section
      className="
        relative
        min-h-screen
        flex
        flex-col
        justify-between
        bg-[#030e22]
        text-white

        px-6
        sm:px-8
        lg:px-8

        py-8
      "
    >
      {/* Heading */}
      <div>
        <h1
          className="
            font-[font1]
            text-[3.5rem]
            sm:text-[5rem]
            lg:text-[5rem]
            leading-[0.9]
          "
        >
          GET IN <span className="font-[font2]">TOUCH</span>
        </h1>
      </div>

      {/* Content */}
      <div
        className="
          grid
          grid-cols-1
          lg:grid-cols-3
          gap-14
          mt-10
        "
      >
        {/* Column 1 */}
        <div>
          <p
            className="
              text-[#cfd4df]
              font-[satoshi-regular]
              leading-[1.2]
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
>
  <button
    className="
      group
      relative
      inline-flex
      items-center
      justify-center
      overflow-hidden

      mt-5

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
        </div>

        {/* Column 2 */}
        <div>
          <p
            className="
              text-[#cfd4df]
              font-[satoshi-regular]
              leading-[1.2]
              text-[0.95rem]
            "
          >
            I'm actively seeking freelance projects, internships, and full-time
            opportunities where I can contribute, learn, and build products that
            people genuinely enjoy using.
          </p>

         <a
  href="mailto:khansaad3930@gmail.com?subject=Hiring%20Opportunity&body=Hi%20Saad,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20job%20opportunity%20with%20you.%0D%0A%0D%0ALooking%20forward%20to%20hearing%20from%20you."
>
  <button
    className="
      group
      relative
      inline-flex
      items-center
      justify-center
      overflow-hidden

      mt-5

      px-6
      py-1.5

      border
      border-white

      font-[font2]
      text-lg
      cursor-pointer
    "
  >
    {/* Hover Background */}
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

    {/* Text */}
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
        </div>

        {/* Column 3 */}
        <div>
          <p
            className="
              text-[#cfd4df]
              font-[satoshi-regular]
              leading-[1.2]
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
        </div>
      </div>

      {/* Big Name */}
      <div className="mt-6">
        <h1
          className="
            font-[font1]
            text-center
           
            text-[4.5rem]
            sm:text-[7rem]
            md:text-[10rem]
            lg:text-[16rem]

            leading-[0.80]
            tracking-tight

            border-b
            border-white/15
            tracking-wide
          
          "
        >
          SAAD KHAN
        </h1>
      </div>

      {/* Footer */}
      <div
        className="
          flex
          flex-col
          md:flex-row

          justify-between
          items-center

          gap-5

          

          text-[#9aa5b8]
          text-sm
        "
      >
        <p className="text-center md:text-left">
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
          "
        >
          <span>khansaad3930@gmail.com</span>
          <span>Bhopal, India</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
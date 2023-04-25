import Image from "next/image";
import { SVGProps } from "react";

/* This example requires Tailwind CSS v2.0+ */
const navigation = {
  Academy: [
    { name: "Talent Pipeline", href: "#" },
    { name: "Extended Team", href: "#" },
    { name: "Data solution", href: "#" },
    { name: "Academy", href: "#" },
  ],
  About: [
    { name: "Our Story", href: "#" },
    { name: "Benefits", href: "#" },
    { name: "Team", href: "/teams" },
    { name: "Careers", href: "#" },
  ],
  Help: [
    { name: "FAQs", href: "#" },
    { name: "Contact Us", href: "#" },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: (props: SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "#",
      icon: (props: SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "#",
      icon: (props: SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#EFEFF5]" aria-labelledby="footer-heading">
      <div className="mx-auto max-w-7xl py-14 px-4 sm:px-6 lg:py-16 lg:px-8">
        <Image
          width={147.41}
          height={35.82}
          className="h-8 w-auto mb-[68px] sm:h-10"
          src="/Assets/cooperate Logo.svg"
          alt=""
        />
        <div className="md:grid md:grid-cols-3 md:gap-8 lg:gap-12">
          <div className="space-y-8 md:col-span-1">
            <p className="text-[21px] md:max-w-[171px] text-gray-500">
              Subscribe to our newsletter
            </p>

            <div>
              <div className="flex max-w-[500px]">
                <input
                  className=" focus:outline-none p-17 text-[15px] border-b border-[#7278912b] border-t-0 border-l-0 border-r-0 focus:outline-offset-0 !shadow-none focus:border-[#197CB0] bg-transparent transition-colors flex-1"
                  placeholder="Email Adress"
                  type="email"
                  name=""
                  id=""
                />
                <button
                  className=" p-[15px] rounded-t-lg bg-[#4388C8]"
                  type="submit"
                >
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.15417 14.1333L10.975 10.3125L7.15417 6.49167L8.33334 5.3125L13.3333 10.3125L8.33334 15.3125L7.15417 14.1333Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="mt-12 md:mt-0 md:col-span-2">
            <div className="sm:grid sm:grid-cols-3 sm:gap-8">
              <div className="mt-12 sm:mt-0">
                <h5 className="text-base visited:text-[#F7AE57] font-medium text-[#F7AE57]">
                  What we do
                </h5>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.Academy.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-[0.9375rem] text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 sm:mt-0">
                <h5 className="text-base visited:text-[#F7AE57] font-medium text-[#F7AE57]">
                  About
                </h5>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.About.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-[0.9375rem] text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 sm:mt-0">
                <h5 className="text-base visited:text-[#F7AE57] font-medium text-[#F7AE57]">
                  Help
                </h5>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.Help.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-[0.9375rem] text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 flex justify-between">
          <p className="text-base text-gray-400 xl:text-center">
            <a href="http://">Terms & Conditions</a> &nbsp; &nbsp;
            <a href="http://">Privacy Policy</a>
          </p>
          <div className="flex space-x-6">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>{" "}
        </div>
      </div>
    </footer>
  );
}

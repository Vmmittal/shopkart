import { MdOutlineFacebook } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
import { FaUserSecret } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

export default function Signin() {
  return (
    <div class="border-solid border-2 border-black h-screen bg-gradient-to-r from-teal-800 to-teal-100">
      <div class="bg-color : bg-teal-600 (green) max-w-4xl m-auto mt-8 rounded-xl shadow-lg shadow-teal-500/50">
        <div class="flex items-center justify-center content-center text-center  h-[600px] max-w-4xl rounded-xl">
          <div class=" bg-white basis-3/4  h-full rounded-l-xl">
            <div class=" bg-white basis-3/4  h-[400px] mt-[18%]">
              <h1 class="font-bold text-4xl m-auto text-center  text-teal-600 (green) mt-12">
                Sign in to ShopKart
              </h1>
              <div class=" flex first-letter:font-bold text-2xl  mt-5  justify-center">
                <a href="/">
                  <MdOutlineFacebook />
                </a>
                <a href="/" class="ml-3">
                  <IoLogoLinkedin />
                </a>
                <a href="/" class="ml-3">
                  <SiGmail />
                </a>
              </div>
              <p class="mt-3">or use your email account</p>
              <form>
                <div class="flex bg-gray-200 max-w-[300px] m-auto mt-5">
                  <div class=" bg-gray-200 content-center justify-center mt-2.5 ml-2">
                    <FaUser class="text-s text-gray-600 " />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="username"
                      class=" px-16  py-2 rounded-lg bg-gray-200 focus:outline-none"
                    />
                  </div>
                </div>
                <div class="flex bg-gray-200 max-w-[300px] m-auto mt-5">
                  <div class=" bg-gray-200 content-center justify-center mt-2.5 ml-2">
                    <FaLock class="text-s text-gray-600 " />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Password"
                      class=" px-16  py-2 rounded-lg bg-gray-200 focus:outline-none"
                    />
                  </div>
                </div>
                <a href="/">
                  <p class="mt-4">Forgot your password ?</p>
                </a>
                {/* <br></br> */}
                <button class="bg-teal-600 (green) px-16 rounded-full py-2 mt-4 text-white">
                  SIGN IN
                </button>
              </form>
            </div>
          </div>
          <div>
            <div class="bg-color : bg-teal-600 (green) max-w-screen-md basis-2/4  h-[170px] ">
              <h1 class="font-bold text-4xl m-auto text-center text-white">
                Hello, Friend !
              </h1>
              <p class="m-auto text-center mt-8 text-white px-10">
                Enter your personal details and start journey with us
              </p>
              <button class="rounded-full  border-solid border-2 border-white  px-10 py-1 text-center text-white mt-8">
                SIGN UP
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

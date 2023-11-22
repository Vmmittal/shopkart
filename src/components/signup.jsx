import { MdOutlineFacebook } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io5";
import { SiGmail } from "react-icons/si";

export default function Signup() {
  return (
    <div class="bg-color : bg-teal-600 (green) max-w-4xl m-auto mt-8    rounded-xl">
      <div class="flex items-center justify-center content-center text-center border-solid border-2 border-black h-[600px] max-w-4xl">
        <div>
          <div class="bg-color : bg-teal-600 (green) max-w-screen-md basis-2/4  h-[170px] ">
            <h1 class="font-bold text-4xl m-auto text-center text-white">
              Welcome back
            </h1>
            <p class="m-auto text-center mt-8 text-white px-5">
              To keep connected with us please login with your personal info
            </p>
            <button class="rounded-full  border-solid border-2 border-white  px-10 py-1 text-center text-white mt-8">
              Sign In
            </button>
          </div>
        </div>
        <div class=" bg-white basis-3/4  h-full ">
          <div class=" bg-white basis-3/4  h-[400px] mt-[18%]">
            <h1 class="font-bold text-4xl m-auto text-center text-black mt-12">
              Create Account
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
            <p class="mt-3">or use your email for registration</p>
            <form>
              <input
                type="text"
                placeholder="First Name"
                class="mt-5 px-16  py-2 rounded-lg bg-gray-200"
              />
              <br></br>
              <input
                type="text"
                placeholder="Last Name"
                class="mt-5 px-16  py-2 rounded-lg bg-gray-200"
                required
              />
              <br></br>
              <input
                type="email"
                placeholder="Email"
                class="mt-5 px-16 py-2 rounded-lg bg-gray-200"
                required
              />
              <br></br>
              <input
                type="text"
                name=""
                id=""
                placeholder="Password"
                class="mt-5 px-16 py-2 rounded-lg  bg-gray-200 "
                required
              />
              <br></br>
              <button class="bg-teal-600 (green) px-16 rounded-full py-2 mt-8 text-white">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

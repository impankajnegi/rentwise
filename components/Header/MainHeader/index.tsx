
import Menu from "../Menu";

export default function MainHeader() {
  return (
    <>
      <div className="flex bg-yellow-300 shadow-lg p-5 pl-2  w-full  justify-between sm:h-10 lg:h-12">
        <div className="flex space-x-2 items-center">
          <div>
            <img src="/images/logo1.png"></img>
          </div>
          <div className="">
            <h1>RentWise</h1>
            <p>Smart gadget rental!</p>
          </div>
        </div>

        <div className="flex items-center">
            {/* <div className="hover:cursor-pointer"> <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 17 14">
    <path d="M16 2H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 0 1 0 2Z"></path>
</svg></div> */}
<Menu></Menu>
        </div>

      </div>
    </>
  );
}

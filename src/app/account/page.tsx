import Header from "@/app/components/header";
import React from "react";
import Image from "next/image";

function Account() {
  return (
    <>
      <div>
        <Header />

        <div className="w-full">
          <div className="h-[316px] w-full relative">
            <Image
              src="/account.png"
              alt="hero"
              objectFit="cover"
              layout="fill"
            />
          </div>

          <div className="flex gap-[30px] px-[200px]">
            <div className="w-full mx-[100px] mt-[200px]">
              <div className="text-[36px]">Log In</div>
              <div className="text-[16px] mt-[10px]">Username or email address</div>
              <div className="border-2 w-[300px] h-[50px] border-red mt-[10px] mb-[30px]"></div>
              <div className="text-[36px]">Password</div>
              <div className="border-2 w-[300px] h-[50px] border-red mt-[20px]"></div>
              <button className="w-[100px] h-[40px] border-2 rounded-[15px] mt-[20px]">
                Log In
              </button>
              &nbsp; &nbsp; &nbsp;
              <span className="text-[16px]">Lost Your Password</span>
            </div>

            {/* Register */}
            <div className="w-full mx-[100px] mt-[200px]">
              <div className="text-[36px]">Register</div>
              <div className="text-[16px] mt-[10px]">Email address</div>
              <div className="border-2 w-[300px] h-[50px] border-red mt-[10px]"></div>

              <div className="text-[16px] mt-[20px]">
                A link to set a new password will be sent to your email address.{" "}
                <br />
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our privacy policy.
              </div>

              <button className="w-[150px] h-[40px] border-2 rounded-[15px] mt-[20px]">
                Register
              </button>
            </div>
          </div>

          <div className="flex items-center gap-[70px] w-full h-[300px] p-[100px] bg-[#FAF4F4] mt-[50px]">
            {/* Free fast delivery */}
            <div className="w-[300px] gap-[8px] flex flex-col">
              <div className="font-semibold text-[30px]">Free Delivery</div>
              <div className="text-[20px] text-[#9F9F9F] leading-[30px] pl-[3px]">
                For all orders over $50, consectetur adipim scing elit
              </div>
            </div>
            {/* Customer service */}
            <div className="w-[300px] gap-[8px] flex flex-col">
              <div className="font-semibold text-[30px] ml-[13px]">90 Days Return</div>
              <div className="text-[20px] text-[#9F9F9F] leading-[30px] pl-[15px]">
                If goods have problems, consectetur adipim scing elit.
              </div>
            </div>

            {/* Secure payment */}
            <div className="w-[300px] gap-[8px] flex flex-col">
              <div className="font-semibold text-[30px] ml-[14px]">Secure Payment</div>
              <div className="text-[20px] text-[#9F9F9F] leading-[30px] pl-[15px]">
                100% secure payment, consectetur adipim scing elit.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Account;

import { useState,  } from "react";
import awr from "../images/awr-footer.png";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const [showModalPrivacyPolicy, setShowModalPrivacyPolicy] = useState(false);
  const { t } = useTranslation();
  const footer = t('footer', { returnObjects: true });

  return (
    <footer className="flex p-1 justify-center print:hidden text-xs relative bottom-0 left-0 mt-[9%] clear-both border-t">
      <button
        className="hover:text-gray-400"
        onClick={() => setShowModalPrivacyPolicy(true)}
      >
        {footer[0]} ・
      </button>
      <img src={awr} alt="awr auto group logo" className="h-4" />
      <a href="mailto:awrautogroup@gmail.com" className="hover:text-gray-400">
        ・ {footer[1]}
      </a>

      {showModalPrivacyPolicy ? (
        <>
          <div className="fixed inset-0 z-[111] flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
            <div className="relative mx-auto h-[500px] w-[300px] md:w-[500px] lg:w-[1000px]">
              {/*content*/}
              <div className="relative flex w-full flex-col rounded-xl border-0 bg-black bg-opacity-80 shadow-lg outline-none focus:outline-none">
                {/*header*/}
                <div className="flex w-full rounded-t border-b border-solid border-gray-400 text-white">
                  <h2 className="mt-[30px] mx-auto mb-[30px] text-base">
                    Privacy Policy
                  </h2>

                  <div className="absolute flex w-full flex-col items-end p-6">
                    <button
                      className="flex h-[35px] w-[35px] justify-center px-1 py-2 text-white border border-gray-400 hover:border-white rounded-xl transition-all duration-150 ease-linear"
                      type="button"
                      onClick={() => setShowModalPrivacyPolicy(false)}
                    >
                      X
                    </button>
                  </div>
                </div>
                {/*body*/}

                <div className="flex w-full items-center justify-center text-white">
                  <div className="w-full px-10 py-5 text-left text-base">
                    <h2>Coming soon ...</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </footer>
  );
}

import React from "react";
import LanguageSwitcher from "./language-switcher";
import { useTranslation } from "react-i18next";

function Dropdown() {
  const { t } = useTranslation();
  const misc = t("misc", { returnObjects: true });

  return (
    <div className="relative inline-block">
      <div className="group">
        <button className="text-white rounded hover:text-gray-400 text-sm md:text-base sm:print:text-sm">
          {misc[0]}
        </button>
        <div className="absolute hidden group-hover:block bg-black bg-opacity-70 shadow-md mt-0 rounded right-0 md:-right-2">
          <ul className="p-4">
            <LanguageSwitcher />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;

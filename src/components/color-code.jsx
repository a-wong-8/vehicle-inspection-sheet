import { useTranslation } from "react-i18next";

export default function ColorCode() {
  const { t } = useTranslation();
  const heading = t("headings", { returnObjects: true });

  return (
    <div className="flex flex-col lg:w-[69rem] mx-auto">
      <h2 className="font-semibold bg-green-500">{heading[0]}</h2>
      <h2 className="font-semibold bg-yellow-500">{heading[1]}</h2>
      <h2 className="font-semibold bg-red-500">{heading[2]}</h2>
    </div>
  );
}

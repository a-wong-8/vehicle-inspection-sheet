import { useTranslation } from "react-i18next";

export default function ColorCode({ conditionAverage }) {
  const { t } = useTranslation();
  const heading = t("headings", { returnObjects: true });

  return (
    <div className="flex flex-col lg:w-[69rem] mx-auto print:text-sm">
      <h2 className="font-semibold bg-green-500">{heading[0]}</h2>
      <h2 className="font-semibold bg-yellow-500">{heading[1]}</h2>
      <h2 className="font-semibold bg-red-500">{heading[2]}</h2>
      <h2 className="font-semibold bg-gray-300 items-center flex justify-center">
        {heading[5]}
        <input
          type="range"
          min="100"
          max="300"
          value={conditionAverage * 100}
          className="my-auto h-4 rounded-lg appearance-none bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 slider-thumb mx-2"
        />
      </h2>
    </div>
  );
}

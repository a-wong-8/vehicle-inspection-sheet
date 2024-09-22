import { useTranslation } from "react-i18next";

export default function VehicleInfo() {
  const { t } = useTranslation();
  const form = t('form', { returnObjects: true });

  return (
    <form className="border lg:w-[69rem] py-4 lg:mx-auto md:mx-12 mx-10 mt-12 lg:mt-7">
      <div className="flex flex-wrap flex-col text-left lg:flex-nowrap lg:block lg:text-center print:flex-nowrap print:block print:text-center">

        <label className="pl-4">{form[0]}</label>
        <input
          type="text"
          className="lg:w-96 print:w-96 my-2 border-black border rounded"
        />

        <label className="pl-4">{form[1]}</label>
        <input type="text" className="my-2 border border-black rounded" />
        <br />

        <label className="pl-4">{form[2]}</label>
        <input
          type="text"
          className="lg:w-96 my-2 border border-black rounded"
        />

        <label className="pl-4">{form[3]}</label>
        <input type="text" className="my-2 border border-black rounded" />

        <br />
        <label className="pl-4">{form[4]}</label>
        <input type="text" className="w-20 my-2 border border-black rounded" />

        <label className="pl-4">{form[5]}</label>
        <input type="text" className="w-52 my-2 border border-black rounded" />

        <label className="pl-4">{form[6]}</label>
        <input type="text" className="w-24 my-2 border border-black rounded" />

        <label className="pl-4">{form[7]}</label>
        <input
          type="text"
          id="ro"
          className="w-28 my-2 border border-black rounded"
        />
      </div>
    </form>
  );
}

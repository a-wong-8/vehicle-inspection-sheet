import { useTranslation } from "react-i18next";

export default function Notes() {
  const { t } = useTranslation();
  const misc = t("misc", { returnObjects: true });

  return (
    <div className="pt-2">
      <textarea className="border border-black w-full h-28 text-black text-lg px-3 rounded-lg" placeholder={misc[2]}></textarea>
    </div>
  );
}

import { useTranslation } from 'react-i18next';

export default function Test() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("welcome")}</h1>
      <p>{t("description")}</p>
    </div>
  );
}

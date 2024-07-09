import { useTranslation } from "./i18n/useTranslation";

export default async function Home() {
  const { t } = await useTranslation();

  return (
    <main>
      {t('hello')}
    </main>
  );
}

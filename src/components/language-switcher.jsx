import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <li>
      <button onClick={() => changeLanguage('en')} className='hover:text-gray-400 p-1'>English</button>
      <button onClick={() => changeLanguage('es')} className='hover:text-gray-400 p-1'>Español</button>
      <button onClick={() => changeLanguage('cn')} className='hover:text-gray-400 p-1'>中文</button>
      <button onClick={() => changeLanguage('fr')} className='hover:text-gray-400 p-1'>Français</button>
      <button onClick={() => changeLanguage('jp')} className='hover:text-gray-400 p-1'>日本語</button>
      <button onClick={() => changeLanguage('vn')} className='hover:text-gray-400 p-1'>Tiếng Việt</button>
      <button onClick={() => changeLanguage('hn')} className='hover:text-gray-400 p-1'>हिंदी</button>
    </li>
  );
}

export default LanguageSwitcher;

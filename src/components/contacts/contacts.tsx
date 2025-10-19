import type { GitHubUser } from "../../types/github";

import styles from "./contacts.module.css";
import iconPhoneSrc from "./phone-icon.svg";
import iconEmailSrc from "./email-icon.svg";
import iconGithubSrc from "./github-icon.svg";
import iconTelegramSrc from "./telegram-icon.svg";
import iconInstagramSrc from "./instagram-icon.svg";
import iconVkSrc from "./vk-icon.svg";

type ContactsProps = {
  userInfo: GitHubUser;
};

const Contacts = ({ userInfo }: ContactsProps) => {
  return (
    <div className={styles.about}>
      <img src={userInfo.avatar_url} alt="Аватар пользователя" className={styles.photo} />
      <div className={styles.infoWrap}>
        <div className={styles.info}>
          <p className={styles.name}>{userInfo.name}</p>
          <p className={styles.text}>{userInfo.bio}</p>
          <div className={styles.contact}>
            <img className={styles.contactIcon} src={iconEmailSrc} alt="Иконка email" />
            <a className={styles.contactLink} href="mailto:ryazanskaya.irina@yandex.ru">
              ryazanskaya.irina@yandex.ru
            </a>
          </div>
          <div className={styles.contact}>
            <img className={styles.contactIcon} src={iconPhoneSrc} alt="Иконка телефона" />
            <a className={styles.contactLink} href="tel:+79122790368">
              +7 (912) 279-03-68
            </a>
          </div>
        </div>
        <div className={styles.socialNetwork}>
          <a
            className={styles.socialLink}
            href={userInfo.html_url}
            target="_blank"
            rel="noreferrer"
          >
            <img className={styles.socialIcon} src={iconGithubSrc} alt="Иконка GitHub" />
          </a>
          <a
            className={styles.socialLink}
            href="https://t.me/irina_ryazanskaya"
            target="_blank"
            rel="noreferrer"
          >
            <img className={styles.socialIcon} src={iconTelegramSrc} alt="Иконка Telegram" />
          </a>
          <a
            className={styles.socialLink}
            href="https://www.instagram.com/irina__d/?hl=ru"
            target="_blank"
            rel="noreferrer"
          >
            <img className={styles.socialIcon} src={iconInstagramSrc} alt="Иконка Instagram" />
          </a>
          <a
            className={styles.socialLink}
            href="https://vk.com/id52333127"
            target="_blank"
            rel="noreferrer"
          >
            <img className={styles.socialIcon} src={iconVkSrc} alt="Иконка Вконтакте" />
          </a>
        </div>
      </div>
    </div>
  );
};

export { Contacts };

import '../App.css';
import { ReactComponent as FacebookLogo } from '../assets/icons/facebook_logo.svg';
import { ReactComponent as TikTokLogo } from '../assets/icons/tiktok_logo.svg';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
  <div className="footer">
    <div className='copyright'>
      <p className="p-footer">
        <a href="https://www.facebook.com/profile.php?id=100089346566004&locale=hr_HR" className="social-icon" target="_blank" rel="noopener noreferrer">
          <FacebookLogo />
        </a>
        <a href="https://www.tiktok.com/@skela.projekt?_t=8jIYeVBOGS8&_r=1" className="social-icon" target="_blank" rel="noopener noreferrer">
          <TikTokLogo />
        </a>
      </p>
      <p className="p-footer">&copy; {year} SKELA PROJEKT d.o.o.</p>
      <p className="p-footer">+385 (0)98 924 6798 | skela.projekt2017@gmail.com</p>
      <p className="p-footer">Sadržaj internetske stranice isključiva je odgovornost tvrtke SKELA PROJEKT d.o.o.</p>
    </div>
  </div>
  )
}

export default Footer
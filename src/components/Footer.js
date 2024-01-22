import '../App.css';
import { ReactComponent as FacebookLogo } from '../assets/facebook_logo.svg';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
  <div className="footer">
    <div className='copyright'>
      <p className="p-footer">
        <a href="https://www.facebook.com/profile.php?id=100089346566004&locale=hr_HR" className="fb-icon" target="_blank" rel="noopener noreferrer">
          <FacebookLogo />
        </a>
      </p>
      <p className="p-footer">&copy; {year} SKELA PROJEKT d.o.o.</p>
      <p className="p-footer">+385 (0)99 535 1688 | skela.projekt2017@gmail.com</p>
      <p className="p-footer">Sadržaj internetske stranice isključiva je odgovornost tvrtke SKELA PROJEKT d.o.o.</p>
    </div>
  </div>
  )
}

export default Footer
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer className="w-100 mt-auto bg-secondary p-4">
      <div className="container text-center mb-5">
        {location.pathname !== '/' && (
          <button
            className="btn btn-dark mb-3"
            onClick={() => navigate(-1)}
          >
            &larr; Go Back
          </button>
        )}
        <h4>
          Made with{' '}
          <span
            className="emoji"
            role="img"
            aria-label="heart"
            aria-hidden="false"
          >
            ❤️
          </span>{' '}
          Javier Burgara
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
{/* <ul class="socials">
                <li><a href="https://github.com/JavierBurgara?tab=repositories"><i class="fa fa-github"></i></a></li>
                <li><a href="https://www.linkedin.com/in/javier-burgara/"><i class="fa fa-linkedin-square"></i></a></li>
            </ul>
        </div>
        <div class="footer-bottom">
            <p>copyright &copy;2023 UCSD FullStackBootCamp. designed by <span>Javier Burgara</span></p>
        </div> */}
  import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';

export const LoginPage = () => {
  const navigate = useNavigate();

  const { login } = useAuth();

  const onLogin = () => {
    login('Emmanuel Popa');

    const lastPath = localStorage.getItem('lastPath') || '/';

    navigate(lastPath, { replace: true });
  }

  return (
    <div className="container mt-5">
      <h1>LoginPage</h1>
      <hr />
      <form>

        <button
          className="btn btn-primary"
          onClick={onLogin}
        >
          Login
        </button>
      </form>
    </div>

  )
}

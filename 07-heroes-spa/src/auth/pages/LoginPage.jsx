import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const navigate = useNavigate();

  const onLogin = () => {
    console.log('onLogin');
    navigate('/marvel', { replace: true });
    
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

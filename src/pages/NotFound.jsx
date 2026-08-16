import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6">
      <div className="text-6xl">🔍</div>
      <h2
        className="text-2xl font-semibold"
        style={{ color: "var(--text-h)" }}
      >
        Page Not Found
      </h2>
      <p className="text-gray-400">
        The page you're looking for doesn't exist.
      </p>
      <Button onClick={() => navigate("/")}>← Back Home</Button>
    </div>
  );
};

export default NotFound;

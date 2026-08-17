import { useAuth } from "../providers/AuthProvider";

const GreetingCard = () => {
  const { session } = useAuth();

  return (
    <div className="flex items-center gap-5 flex-col justify-center p-4 rounded shadow-md">
      <p>welcome {session ? session.name : "guest"}</p>
    </div>
  );
};

export default GreetingCard;

import useSessionStore from "../store/session.store";

const GreetingCard = () => {
  const user = useSessionStore((state) => state.user);

  return (
    <div className="flex items-center gap-5 flex-col justify-center p-4 rounded shadow-md">
      <p>welcome {user ? user.name : "guest"}</p>
    </div>
  );
};

export default GreetingCard;

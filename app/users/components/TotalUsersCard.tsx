// app/users/components/TotalUsersCard.tsx

type User = {
  id: number;
  name: string;
  email: string;
  age: number;
  sex: string;
  height: string;
  weight: string;
  joiningDate: string;
  totalArticles: number;
};

const TotalUsersCard = ({ users }: { users: User[] }) => {
  return (
    <div className="w-64 h-32 bg-black border border-white rounded-md shadow-lg flex flex-col items-center justify-center">
      <h2 className="text-xl font-semibold">Total Users</h2>
      <p className="text-2xl font-bold">{users.length}</p>
    </div>
  );
};

export default TotalUsersCard;

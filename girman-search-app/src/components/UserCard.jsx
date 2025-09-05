import UserDialog from "./UserDialog";

export default function UserCard({ user }) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col w-full max-w-sm">
  
      <div className="flex justify-self-end">
        <img
          src="https://th.bing.com/th/id/OIP.u_gC9pTo6NHU93YnLqKYygHaIh?w=154&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
          className="rounded-full w-20 h-20 object-cover border"
        />
      </div>

  
      <h2 className="flex justify-self-end mt-4 text-4xl font-semibold text-center">
        {user.first_name} {user.last_name}
      </h2>
      <p className="flex justify-self-end text-gray-500 w-4 h-4 text-sm text-center mt-1"><img className="mr-3" src="https://tse3.mm.bing.net/th/id/OIP.MlcUxlZu24yYveNMQ48ikAHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3&o=7&rm=3" alt="" />  {user.city}</p>

      
      <div className=" mt-4 pt-4 flex items-center justify-between">
      
        <div className="text-left">
          <p className="font-bold flex text-sm  items-center gap-1">
            <img className=" h=4 w-4 mr-1"src="https://www.kindpng.com/picc/m/410-4102759_black-phone-icon-png-transparent-png.png" alt="" />{user.contact_number}
          </p>
          <p className="text-xs text-gray-400">Available on phone</p>
        </div>

      
        <UserDialog user={user} />
      </div>
    </div>
  );
}


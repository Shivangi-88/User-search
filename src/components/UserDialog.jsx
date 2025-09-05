import * as Dialog from "@radix-ui/react-dialog";

export default function UserDialog({ user }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
  <button className="bg-black text-white px-4 py-2 rounded-lg shadow hover:bg-gray-800">
    Fetch Details
  </button>
</Dialog.Trigger>

      <Dialog.Portal>
    
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />

    
        <Dialog.Content
          className="fixed top-1/2 left-1/2 w-[90%] max-w-[500px] -translate-x-1/2 -translate-y-1/2 
                     bg-white p-6 rounded-lg shadow-lg focus:outline-none"
        >
      
          <Dialog.Title className="text-xl font-bold mb-1">Fetch Details</Dialog.Title>

    
          <p className="text-gray-400 mb-4">
            Here are the details of the following employee.
          </p>

    
          <div className="space-y-0.1 text-gray-800">
            <p>
              Name: {user.first_name} {user.last_name}
            </p>
            <p>
              Location: {user.city}
            </p>
            <p>
              Contact Number: {user.contact_number}
            </p>

          
            <div className="mt-2 ">
              <p className="font-medium mb-3">Profile Image:</p>
              <img
                src={
                  "https://th.bing.com/th/id/OIP.u_gC9pTo6NHU93YnLqKYygHaIh?w=154&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
                }
                alt={`${user.first_name} ${user.last_name}`}
                className="w-55 h-55 "
              />
            </div>
          </div>

        
          <div className="flex justify-end mt-6">
            <Dialog.Close asChild>
              <button className="bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300">
                Close
              </button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

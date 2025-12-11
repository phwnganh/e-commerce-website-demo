import { useAtomValue } from "jotai";
import { userAtom } from "../../atom/store";
import PrimaryCustomButton from "../../components/ui/PrimaryCustomButton";

const AccountSection = () => {
  const user = useAtomValue(userAtom);
  return (
    <form className="flex flex-col gap-4 max-w-[710px] mx-auto rounded-sm py-10 px-5 lg:px-0">
      <h3 className="text-[#DB4444] text-base sm:text-xl font-medium">Edit Your Profile</h3>
      <div className="flex gap-[50px]">
        <div className="w-full">
          <div className="flex flex-col gap-2 ">
            <label htmlFor="firstName" className="text-sm sm:text-base">First Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={user?.firstName}
              className="rounded-sm bg-[#F5F5F5] border-[#F5F5F5] py-1 pl-2 sm:py-3 sm:pl-4 text-sm sm:text-base"
            />
          </div>
        </div>
        <div className="w-full">
          <div className="flex flex-col gap-2">
            <label htmlFor="lastName" className="text-sm sm:text-base">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={user?.lastName}
              className="rounded-sm bg-[#F5F5F5] border-[#F5F5F5] py-1 pl-2 sm:py-3 sm:pl-4 text-sm sm:text-base"
            />
          </div>
        </div>
      </div>

      <div className="flex gap-[50px] mt-2">
        <div className="w-full">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm sm:text-base">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={user?.email}
              className="rounded-sm bg-[#F5F5F5] border-[#F5F5F5] py-1 pl-2 sm:py-3 sm:pl-4 text-sm sm:text-base"
            />
          </div>
        </div>
        <div className="w-full">
          <div className="flex flex-col gap-2">
            <label htmlFor="username" className="text-sm sm:text-base">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              value={user?.username}
              className="rounded-sm bg-[#F5F5F5] border-[#F5F5F5] py-1 pl-2 sm:py-3 sm:pl-4 text-sm sm:text-base"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="text-sm sm:text-base">Password Changes</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Current Passwod"
          className="rounded-sm bg-[#F5F5F5] border-[#F5F5F5] py-1 pl-2 sm:py-3 sm:pl-4 text-sm sm:text-base"
        />
      </div>
      <input
        type="password"
        name="newPassword"
        id="newPassword"
        placeholder="New Passwod"
        className="rounded-sm bg-[#F5F5F5] border-[#F5F5F5] py-1 pl-2 sm:py-3 sm:pl-4 text-sm sm:text-base"
      />
      <input
        type="password"
        name="confirmNewPassword"
        id="confirmNewPassword"
        placeholder="Confirm New Passwod"
        className="rounded-sm bg-[#F5F5F5] border-[#F5F5F5] py-1 pl-2 sm:py-3 sm:pl-4 text-sm sm:text-base"
      />

      <div className="flex justify-end">
        <div className="flex gap-8 items-center">
            <p className="text-sm sm:text-base">Cancel</p>
            <PrimaryCustomButton bgColor="#DB4444" type="submit">Save Changes</PrimaryCustomButton>
        </div>
      </div>
    </form>
  );
};

export default AccountSection;

import { useAtomValue } from "jotai";
import { userAtom } from "../../../atom/store";
import PrimaryCustomButton from "../../ui/PrimaryCustomButton";
import { useState } from "react";

const AccountSection = () => {
  const user = useAtomValue(userAtom);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [newPassword, setNewPassword] = useState("");
  // const [confirmNewPassword, setConfirmNewPassword] = useState("");
  return (
    <form className="flex flex-col gap-4 max-w-[710px] mx-auto rounded-sm py-10 px-5 lg:px-0">
      <h3 className="text-button-2 text-base sm:text-xl font-medium">
        Edit Your Profile
      </h3>
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-[50px]">
        <div className="w-full">
          <div className="flex flex-col gap-2 ">
            <label htmlFor="firstName" className="text-sm sm:text-base">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={firstName || user?.firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="rounded-sm bg-secondary-2 border-secondary-2 py-1 pl-2 sm:py-3 sm:pl-4 text-sm sm:text-base text-black-opacity-80 focus:outline-none"
            />
          </div>
        </div>
        <div className="w-full">
          <div className="flex flex-col gap-2">
            <label htmlFor="lastName" className="text-sm sm:text-base">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={lastName || user?.lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="rounded-sm bg-secondary-2 border-secondary-2 py-1 pl-2 sm:py-3 sm:pl-4 text-sm sm:text-base text-black-opacity-80 focus:outline-none"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-2 sm:gap-[50px] sm:mt-2">
        <div className="w-full">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm sm:text-base">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email || user?.email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-sm bg-secondary-2 border-secondary-2 py-1 pl-2 sm:py-3 sm:pl-4 text-sm sm:text-base text-black-opacity-80 focus:outline-none"
            />
          </div>
        </div>
        <div className="w-full">
          <div className="flex flex-col gap-2">
            <label htmlFor="username" className="text-sm sm:text-base">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              value={username || user?.username}
              onChange={(e) => setUsername(e.target.value)}
              className="rounded-sm bg-secondary-2 border-secondary-2 py-1 pl-2 sm:py-3 sm:pl-4 text-sm sm:text-base text-black-opacity-80 focus:outline-none"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="text-sm sm:text-base">
          Password Changes
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Current Passwod"
          className="rounded-sm bg-secondary-2 border-secondary-2 py-1 pl-2 sm:py-3 sm:pl-4 text-sm sm:text-base text-black-opacity-80 focus:outline-none"
        />
      </div>
      <input
        type="password"
        name="newPassword"
        id="newPassword"
        placeholder="New Passwod"
        className="rounded-sm bg-secondary-2 border-secondary-2 py-1 pl-2 sm:py-3 sm:pl-4 text-sm sm:text-base text-black-opacity-80 focus:outline-none"
      />
      <input
        type="password"
        name="confirmNewPassword"
        id="confirmNewPassword"
        placeholder="Confirm New Passwod"
        className="rounded-sm bg-secondary-2 border-secondary-2 py-1 pl-2 sm:py-3 sm:pl-4 text-sm sm:text-base text-black-opacity-80 focus:outline-none"
      />

      <div className="flex justify-end">
        <div className="flex gap-8 items-center">
          <p className="text-sm sm:text-base">Cancel</p>
          <PrimaryCustomButton type="submit">Save Changes</PrimaryCustomButton>
        </div>
      </div>
    </form>
  );
};

export default AccountSection;

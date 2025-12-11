import React from "react";

const AccountNavigation = () => {
  return (
    <section className="hidden lg:flex lg:flex-col gap-4">
      <p className="font-medium">Manage My Account</p>
      <div className="flex flex-col indent-8.5 gap-2">
        <p className="text-[#00000080]">My Profile</p>
        <p className="text-[#00000080]">Address Book</p>
        <p className="text-[#00000080]">My Payment Options</p>
      </div>
      <p className="font-medium mt-2">My Orders</p>
      <div className="flex flex-col indent-8.5 gap-2">
        <p className="text-[#00000080]">My Returns</p>
        <p className="text-[#00000080]">My Cancellations</p>
      </div>
      <p className="font-medium mt-2">My WishList</p>
    </section>
  );
};

export default AccountNavigation;

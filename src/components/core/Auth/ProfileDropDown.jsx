import React from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import { VscDashboard, VscSignOut } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { logout } from "../../../services/operations/authAPI";

const ProfileDropDown = () => {
  const { user } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="flex items-center gap-1 relative group cursor-pointer py-2">
      <img
        src={user?.image}
        alt={`profile-${user?.firstName}`}
        className="aspect-square w-[30px] rounded-full object-cover"
      />

      <AiOutlineCaretDown className="text-sm text-richblack-100" />

      <div className="hidden group-hover:block absolute top-[90%] right-0 z-[1000] divide-y-[1px] divide-richblack-700 overflow-hidden rounded-md border-[1px] border-richblack-700 bg-richblack-800">
        <Link to="/dashboard/my-profile">
          <div className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25">
            <VscDashboard className="text-lg" />
            Dashboard
          </div>
        </Link>

        <div
          onClick={() => {
            dispatch(logout(navigate));
          }}
        >
          <div className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25">
            <VscSignOut className="text-lg" />
            Logout
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDropDown;

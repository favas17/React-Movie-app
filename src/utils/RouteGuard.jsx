import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const RouteGuard = ({ roles }) => {
  const userDetails = useSelector((state) => state.user.userDetails);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userDetails) {
      navigate("/", { replace: true });
    } else if (roles && !roles.includes(userDetails.role)) {
      navigate("/UserHome", { replace: true });
    }
  }, [userDetails, navigate, roles]);

  return userDetails ? <Outlet /> : null;
};

export default RouteGuard;

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { db, ref, get, set } from "../firebase/firebaseConfig";

const InvitePage = ({ user }) => {
  const { inviteId } = useParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState("Verifying...");

  useEffect(() => {
    const joinBudget = async () => {
      const snap = await get(ref(db, `invites/${inviteId}`));
      if (!snap.exists()) {
        setStatus("Invalid or expired invite.");
        return;
      }

      const { budgetId } = snap.val();
      await set(ref(db, `budgets/${budgetId}/users/${user.uid}`), true);
      setStatus("Joined budget! Redirecting...");
      setTimeout(() => navigate(`/budget/${budgetId}`), 2000);
    };

    if (user) joinBudget();
  }, [inviteId, user]);

  return <p>{status}</p>;
};

export default InvitePage;

import React, { useState } from "react";
import { db, ref, set } from "../firebase/firebaseConfig";

const CreateBudget = ({ user }) => {
  const [budgetName, setBudgetName] = useState("");
  const [inviteLink, setInviteLink] = useState("");

  const handleCreateBudget = async () => {
    const budgetId = Date.now().toString();
    const budgetRef = ref(db, `budgets/${budgetId}`);

    await set(budgetRef, {
      name: budgetName,
      createdBy: user.uid,
      users: {
        [user.uid]: true
      }
    });

    // Create invite
    const inviteId = Math.random().toString(36).substring(2, 10);
    await set(ref(db, `invites/${inviteId}`), { budgetId });

    setInviteLink(`${window.location.origin}/invite/${inviteId}`);
  };

  return (
    <div>
      <input value={budgetName} onChange={e => setBudgetName(e.target.value)} placeholder="Enter Budget Name" />
      <button onClick={handleCreateBudget}>Create & Generate Invite</button>
      {inviteLink && <p>Share this link: <a href={inviteLink}>{inviteLink}</a></p>}
    </div>
  );
};

export default CreateBudget;

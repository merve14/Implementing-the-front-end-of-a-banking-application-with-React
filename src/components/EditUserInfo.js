import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setGetProfile, changeUserName } from "../store/profileSlice";

const EditUserInfo = () => {
  const token = useSelector((state) => state.user.token);
  // we can use useSelector to get the profile data from the store
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchDataUser = async () => {
      try {
        const response = await fetch(
          "http://localhost:3001/api/v1/user/profile",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await response.json();
        console.log(data);
        dispatch(setGetProfile({ data }));
        console.log(profile);
        setEditedUserName(profile.userName);
      } catch (err) {
        console.log(err);
      }
    };
    fetchDataUser();
  }, [token]);

  const [isEditing, setIsEditing] = useState(false);
  const [editedUserName, setEditedUserName] = useState();

  const handleEditName = () => {
    setIsEditing(true);
  };

  const handleSaveChanges = async () => {
    // Here you can handle saving the changes, e.g., send a request to update the user name
    // For demonstration purposes, just update the state
    try {
      await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userName: editedUserName }),
      });
      // we dispatch the action to update the store
      dispatch(changeUserName({ userName: editedUserName }));
    } catch (err) {
      console.log(err);
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className="profile-header">
      <h1>Welcome back {profile.firstName + " " + profile.lastName + "!"}</h1>
      {isEditing ? (
        <form>
          <div className="input-wrapper">
            <label htmlFor="username-input">User name: </label>
            <input
              type="text"
              id="username-input"
              value={editedUserName}
              onChange={(e) => setEditedUserName(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label>First name: </label>
            <input
              className="read-only-input"
              type="text"
              value="Tony"
              readOnly
            />
          </div>
          <div className="input-wrapper">
            <label>Last name: </label>
            <input
              className="read-only-input"
              type="text"
              value="Stark"
              readOnly
            />
          </div>
          <div className="save-changes-buttons">
            <button
              className="save-button"
              type="button"
              onClick={handleSaveChanges}
            >
              Save
            </button>
            <button
              className="cancel-button"
              type="button"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <button className="name-edit-button" onClick={handleEditName}>
          Edit name
        </button>
      )}
    </div>
  );
};

export default EditUserInfo;

const UserProfile = ({ params }) => {
    const { id } = params; // URL se dynamic 'id' milega
  
    return (
      <div>
        <h1>User Profile</h1>
        <p>User ID: {id}</p> {/* Displaying the dynamic ID */}
      </div>
    );
  };
  
  export default UserProfile;
  
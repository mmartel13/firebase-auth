export default function Welcome({ user }) {
    console.log(user) //email, displayName, photoURL (don't need this just testing it's working )
    return (
<>
    <h1>Welcome</h1>
    <h2>{user.displayName || user.email}</h2>
    {user.photoURL && <img src={user.photoURL} alt="Profile pic of logged-in user" />}
</>
    )
}

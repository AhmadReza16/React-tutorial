import profilePic from './assets/levi.gif'

function Card(){
    return(
       <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">Ahmadreza16</h2>
            <p className="card-text">I am just learning a React language. </p>
       </div> 
    );
}
export default Card
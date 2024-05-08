const userData=[
    {
        name:"Deepika.R",
        city:"Coimbatore" ,
        description:"Frontend Developer", 
        skills:["Java","HTML","React","FRontend developmemt","Cloud computing","Python"],
        online:true,
        profile:"images/img1.jpg" ,
  },
  {
    name:"Deepi",
    city:"Vellakovil" ,
    description:"Fullstack Developer",
    skills:["Java","HTML","React","FRontend developmemt","Cloud computing","Python"],
    online:true,
    profile:"images/img2.jpg" ,
},
{
    name:"Pushpalatha",
    city:"Thirumangalam" ,
    description:"English Teacher", 
    skills:["English","Cooking","Writing","Embroidering","Cloud computing","Python"],
    online:true,
    profile:"images/img3.jpg" ,
},



    
]








function User(props) {
  return (
  <div className="card-container">
    <span className={props.online?"online pro":"offline pro"}>{props.online?"ONLINE":"OFFLINE"}</span>
    <div className="img" >
     <img src={props.profile} className="image" alt=" " / >
    </div>
    <h3>{props.name}</h3>
    <h3>{props.city}</h3>
    <p>{props.description}</p>
    <div className="buttons">
    <button className="primary">Message</button>
    <button className="primary outline">Following</button>
    </div>
    <div className="skills">
        <h5>Skills</h5>
        <ul>
            {props.skills.map((skill,index)=><li key={index}>{skill}</li>)}
        </ul>
    </div>
  </div>

  );
};

export const UserCard = () => {
  return (
    <>
       {userData.map((user,index)=>(<User key={index} name={user.name} city={user.city} description={user.description} online={user.online} profile={user.profile} skills={user.skills} />)) }
       </>
  );
};
{/* <User  name="Deepika.R" city="Coimbatore" description="Frontend Developer" skills={["Java","HTML","React","FRontend developmemt","Cloud computing","Python"]}  online={false} profile="images/img2.jpg" /> */}
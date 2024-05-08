

export const Header = () => {
  let randomcss="style";
  const isLoggedin=false;
  const heading= isLoggedin ? <p>Hi  Welcome</p> :<p>Sorry..Please Log in</p>
  const items=["Item1","Item2","Item3","Item4"];
  return (
    <>
    <div>
        <h1 className="bannertext">React learning</h1>
        <h2>
           {heading}
        </h2>
        <p className="slogan" style={{fontSize:"50px"}}>Anything is possible</p>
        <p className={randomcss}>50+50  ={50+50}</p>
        {items.map((item, index) => (<li key={index}>{item}</li>))}
    </div>
    </>
  );
};

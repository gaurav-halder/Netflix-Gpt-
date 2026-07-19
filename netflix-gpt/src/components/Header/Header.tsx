import logo from "../../assets/Netflix_Gpt_logo.svg";

const Header = () => {
    return (
        <div className="w-full absolute z-10 p-8 bg-gradient-to-b from-black">
            <img className="w-40" src={logo} alt="logo"/>
        </div>
    )
}

export default Header;
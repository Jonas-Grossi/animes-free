import "./Logo.css";
import logo from "./../../../assets/logo.gif";
export default function Logo() {
  return (
    <div className="Logo">
      <img src={logo} alt="logo" />
    </div>
  );
}

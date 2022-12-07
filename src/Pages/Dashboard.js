import SocialButtons from "../Components/SocialButtons";
import "../App.css";
import hp1 from "../hp1.JPG";
import hp2 from "../hp2.JPG";
function Dashboard() {
  return (
    <>
      <div class="links">
        <SocialButtons />
      </div>
      <div class="photosdiv">
        <img class="photos" src={hp1} alt="Having fun with girlfriend"></img>
        <img class="photos" src={hp2} alt="Kissing girlfriend"></img>
      </div>
    </>
  );
}

export default Dashboard;

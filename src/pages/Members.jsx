import NavBar from "../components/NavBar"
import MembersCarousel from "../components/MembersCarousel"
import Footer from "../components/Footer"
const Members = () => {
  return (
    <div className="membersContainer">
      <NavBar/>
      <MembersCarousel/>
      <Footer/>
    </div>
  )
}

export default Members
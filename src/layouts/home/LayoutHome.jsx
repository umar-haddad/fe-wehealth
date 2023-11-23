import Footer from "../../component/headers/Footer"
import Navbars from "../../component/headers/Navbars"
import propTypes from 'prop-types'

function LayoutHome(props) {
   return (
      <>
         <Navbars />
         {props.content}
         <Footer />
      </>
   )
}

LayoutHome.propTypes = {
   content: propTypes.element.isRequired
}



export default LayoutHome
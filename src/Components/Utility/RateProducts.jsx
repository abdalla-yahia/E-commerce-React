import ReactStars from "react-rating-stars-component";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfStroke, } from "@fortawesome/free-solid-svg-icons";


function RateProducts() {
    let rateSetting = {
        size: 20,
        count: 5,
        color: "#ddd",
        activeColor: "gold",
        value: 3.5,
        a11y: true,
        isHalf: true,
        emptyIcon: <FontAwesomeIcon icon={faStar} fade/>,
        halfIcon: <FontAwesomeIcon icon={faStarHalfStroke}/>,
        filledIcon: <FontAwesomeIcon icon={faStar} beat/>,
        onChange: newValue => {
          console.log(`Example 2: new value is ${newValue}`);
        }
      };
  return (
    <ReactStars  {...rateSetting}/>
  )
}

export default RateProducts
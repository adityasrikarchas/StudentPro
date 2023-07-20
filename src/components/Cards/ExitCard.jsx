import ButtonGreen from "../Buttons/ButtonGreen";
import { useNavigate } from "react-router-dom";

const ExitCard = ({action}) => {
    const navigate = useNavigate();
    return (
        <div className="exit-card">
            <h3 style={{textAlign: "center"}}>Are you sure want to Exit?</h3>
            <div className="buttons">
                <ButtonGreen text="Yes" onClick={()=>navigate('/')} style={{backgroundColor: "rgba(235, 87, 87, 1)", borderRadius: "50px", padding: "10px 20px"}} showIcon="false"/>
                <ButtonGreen text="No" onClick={action} style={{backgroundColor: "rgba(86, 69, 69, 1)", borderRadius: "50px", padding: "10px 20px"}} showIcon="false"/>
            </div>
        </div>
    );
}

export default ExitCard;
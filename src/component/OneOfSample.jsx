
import PropTypes from "prop-types";
export const OneOfSample = (props) => {
    const {color} = props;
  return (
    <div >
        <p style={{ backgroundColor:color,padding:"20px"}} >Here you can see the {color} </p>

    </div>
  );
};

OneOfSample.props={
    color:PropTypes.oneOf(["pink","orange","blue"]).isRequired

}

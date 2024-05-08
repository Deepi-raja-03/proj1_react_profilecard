
import PropTypes from "prop-types";
export const MultiTypeComponent = (props) => {
  return (
    <div>
        <h1>the value is {props.value}</h1>
    </div>
  )
}
MultiTypeComponent.props={
    value:PropTypes.oneOfType(PropTypes.string,PropTypes.number,PropTypes.bool)
}
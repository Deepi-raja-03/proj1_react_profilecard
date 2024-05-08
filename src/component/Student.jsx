import PropTypes from "prop-types";
export const Student = (props) => {
  return (
    <div className="student">
        <table>
            <tbody>
            <tr>
                <th>Name</th>
                <td>{props.name}</td>
            </tr>
            <tr>
                <th>Age</th>
                <td>{props.age}</td>
            </tr>
            <tr>
                <th>isReactdeveloper</th>
                <td>{props.isReactdeveloper?"Yes":"No"}</td>
            </tr>
            </tbody>
        </table>
    </div>
  )
}
Student.proptypes={
    name:PropTypes.string,
    age:PropTypes.number,
    isReactdeveloper:PropTypes.bool,
}
Student.defaultProps={
    name: "no name",
    age:"no age",
    isReactdeveloper:false, 
}

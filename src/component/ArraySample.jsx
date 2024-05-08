
import PropTypes from "prop-types";
export const ArraySample = (props) => {
    const {items}  = props;
  return (
    <div>
        <h1>Items List</h1>
        <ul>
            {items.map((item)=>(<li key={item.id}>{item.name}</li>))}

        </ul>
    </div>
  )
}
ArraySample.proptypes={
    items:PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number.isRequired,
            name:PropTypes.string.isRequired,
        })
    ).isRequired
}
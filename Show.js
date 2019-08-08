import Proptypes from 'prop-types';



class Show extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        allowDelete: Proptypes.bool,
        selectHandler: Proptypes.func.isRequired,
        deleteHandler: Proptypes.func
    }
  }
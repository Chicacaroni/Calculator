import REACT, {Component} from 'react';

class ButtonComponents extends Component {
    
    render() {
    	return (
    		<div className="calcButton">
    		     <button name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>





             </div>
    	);

    }

}

export default ButtonComponents;
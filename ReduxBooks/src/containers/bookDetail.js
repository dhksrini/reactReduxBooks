import React, {Component} from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component{
    render(){
        if(!this.props.selectBook){
            return <h5>Select book to get detail</h5>
        }
        const {title, pages} = this.props.selectBook;
        return(
            <div>
                <h5>Detail of selected book: </h5>
                <p>Title: {title}</p>
                <p>Pages: {pages}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        selectBook: state.activebook
    }
}

export default connect(mapStateToProps)(BookDetail);
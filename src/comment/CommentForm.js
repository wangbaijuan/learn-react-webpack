import React from "react";

class CommentForm extends React.Component {
    
    handleSubmit(event) {
        event.preventDefault();

        let author = this.refs.author.value,
            text = this.refs.text.value;
        console.log(author, text);
        console.log("提交表单....");
        let date = new Date();
        this.props.onCommentSubmit({id:date.getMilliseconds(), author, text, date: date.toISOString()});
    }

    render () {
        return (
            <form className='ui reply form' onSubmit={this.handleSubmit.bind(this)}>

                <div className='field'>
                    <input type="text" placeholder="姓名" ref="author"/>
                </div>

                <div className='field'>
                    <textarea  placeholder="评论" ref="text"/>
                </div>

                <button type="submit" className='ui blue button'>
                    添加评论
                </button>
            </form>
        )
    }
}

export { CommentForm as default}
import React, { Component } from 'react';

class CreateContent extends Component {
  render() {
    return (
      <article>
        <h2>Create</h2>
        <form action="/crate_process" method="post"
          onSubmit={function(e){
            e.preventDefault();//지갑만들때는 참고 X
            alert('Submit!!!');
          }.bind(this)}
        >
          <p><input type="text" name="title" placeholder="title"></input></p>
          <p>
            <textarea name="desc" placeholder="description"></textarea>
          </p>
          <p>
            <input type="submit"></input>
          </p>
        </form>
      </article>
    );
  }
}

export default CreateContent;
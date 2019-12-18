import React, { Component } from 'react';
import Subject from './component/Subject';
import TOC from './component/TOC';
import ReadContent from './component/ReadContent';
import CreateContent from './component/CreateContent';
import Control from './component/Control';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'create',
      selected_content_id: 2,
      subject: { title: 'WEB', sub: 'world wide web!' },
      welcome: { title: 'Welcome', desc: 'Hello, React!!' },
      contents: [
        { id: 1, title: 'HTML', desc: 'HTML is for information' },
        { id: 2, title: 'CSS', desc: 'CSS is for information' },
        { id: 3, title: 'JavaScript', desc: 'JavaScript is for information' }
      ]
    }
  }
  render() {
    var _title, _desc, _article = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if (this.state.mode === 'read') {
      var i = 0;
      while (i < this.state.contents.length) {
        var data = this.state.contents[i];
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if (this.state.mode === 'create') {
      _article = <CreateContent></CreateContent>
    }
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            this.setState({ mode: 'welcome' });
          }.bind(this)}
        >
        </Subject>
        <TOC
          onChangePage={function (id) {
            this.setState({
              mode: 'read',
              selected_content_id: Number(id)
            });
          }.bind(this)}
          data={this.state.contents}
        >
        </TOC>
        <Control onChangeMode={function (_mode) {
          this.setState({
            mode: _mode
          });
        }.bind(this)}></Control>
        {_article}
      </div>
    );
  }
}

export default App;

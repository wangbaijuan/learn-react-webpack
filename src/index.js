import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';

import CommentBox from './comment/CommentBox';
import MainLayout from './layout/MainLayout';
import BaseExample from './layout/BaseExample';

ReactDOM.render(<MainLayout />, document.getElementById('root'));
// ReactDOM.render(<CommentBox url='/comments.json'/>, document.getElementById('root'));
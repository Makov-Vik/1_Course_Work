'use strict';

const commentOut = this.document.getElementById('text_outc');
commentOut.innerHTML = '';
const btnComment = this.document.getElementById('add_comment');
const userIn = this.document.getElementById('user_input');
const messageIn = this.document.getElementById('message_input');
const data = [];

const loadComment = (file) => {

};

const createSpan = () => {
  const span = this.document.createElement('span');
  return span;
};

const save = () => {
  localStorage.setItem('data', JSON.stringify(data));
};

btnComment.onclick = function addComment() {
  const user = userIn.value;
  const message = messageIn.value;
  const comment = {
    name: user,
    text: message,
  };
  data.push(comment);
  save();
  const addingCom = `${user}: ${message}\n`;
  const span = createSpan();
  span.innerText = addingCom;
  commentOut.appendChild(span);
};

import { database } from '../firebase';
import { clearNewMessage } from './new-message';

const messagesRef = database.ref('messages');

export const addMessage = (key, { content, uid }) => {
  return {
    type: 'ADD_MESSAGE',
    content,
    key,
    timeStamp: Date.now(),
    uid
  };
};

export const removeMessage = key => {
  return {
    type: 'REMOVE_MESSAGE',
    key
  };
};

export const createMessage = ({ content, uid }) => {
  return dispatch => {
    const message = {
      timeStamp: Date.now(),
      content,
      uid
    };

    messagesRef.push(message).then(() => {
      dispatch(clearNewMessage());
    });
  };
};

export const destroyMessage = key => {
  return dispatch => {
    messagesRef
      .child(key)
      .remove()
      .then(() => {
        dispatch(removeMessage(key));
      });
  };
};

export const startListeningForMessages = () => {
  return dispatch => {
    messagesRef.on('child_added', snapshot => {
      dispatch(addMessage(snapshot.key, snapshot.val()));
    });

    messagesRef.on('child_changed', snapshot => {
      dispatch(addMessage(snapshot.key, snapshot.val()));
    });

    messagesRef.on('child_removed', snapshot => {
      dispatch(removeMessage(snapshot.key));
    });
  };
};

import React, { useState } from 'react';
import './PictureWithSpeechBubble.scss';

const PictureWithSpeechBubble = () => {
  const [clickCount, setClickCount] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const sentences = [
    "I’m not a fan of being clicked, but I guess I’ll make an exception.",
    "It’s getting a little intense, don’t you think?",
    "Okay, you clearly know what you’re doing. I’m impressed.",
    "I bet you didn’t expect to get this far, huh?",
    "Is this some kind of test to see how patient I am?",
    "You know, I’m pretty sure you like me more than you’re letting on.",
    "I get it, you really want to keep going.",
    "You must be a fan of persistence. I like that.",
    "You’re almost there! Ready to see the grand finale?",
    "I didn’t expect this much attention, but here we are!",
    "Look, I’m not some clickable object... Oh, wait. I am.",
    "You’re really digging this, huh? Well, who can blame you?",
    "That’s a lot of clicks. Are you sure you’re not just bored?",
    "I feel like you’re just trying to win a prize now.",
    "I can’t deny it: you’ve got my attention.",
    "You know, persistence is one of my favorite qualities in a person.",
    "This feels a bit like stalking... but in a good way?",
    "It’s almost like you’re trying to make me say something.",
    "You did it. But did you really expect something different?",
    "Alright, I’ll give you credit. You made it this far."
  ];

  const handleClick = () => {
    if (clickCount < sentences.length - 1) {
      setClickCount(clickCount + 1);
    } else {
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setClickCount(0); // Reset the count after modal is closed
  };

  return (
    <div className="picture-with-speech-bubble">
      <div className="picture-with-speech-bubble__picture" onClick={handleClick}>
        <img src="/Profil.PNG" alt="Profile" />
      </div>
      {clickCount > 0 && clickCount < sentences.length && (
        <div className="picture-with-speech-bubble__speech-bubble">
          {sentences[clickCount - 1]}
        </div>
      )}
      {showModal && (
        <div className="picture-with-speech-bubble__modal">
          <h2 className="picture-with-speech-bubble__modal-title">Thank you for clicking!</h2>
          <p className="picture-with-speech-bubble__modal-text">      If you like me that much, you should definitely get in contact and hire me!
          </p>
          <button 
            className="picture-with-speech-bubble__modal-close-button" 
            onClick={closeModal}>
            Close
          </button>
          <button 
            className="picture-with-speech-bubble__modal-action-button" 
            onClick={() => alert('Action triggered!')}>
            Take Action
          </button>
        </div>
      )}
    </div>
  );
};

export default PictureWithSpeechBubble;
import React from "react";
import { BsRobot, BsSend } from "react-icons/bs";

const ChatBox = () => {
  const [text, setText] = React.useState("");
  return (
    <div className="flex flex-col h-[90vh] border border-base-300 rounded-lg shadow-md">
      <div className="flex-1 overflow-y-auto p-4">
        <div className="chat chat-start">
          <div className="chat-image flex items-center justify-center">
            <BsRobot className="size-7" />
          </div>
          <div className="chat-bubble">
            It was said that you would, destroy the Sith, not join them.
          </div>
        </div>
        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
              />
            </div>
          </div>
          <div className="chat-bubble">Not leave it in Darkness</div>
        </div>
        
      </div>

      <div className="p-2 border-t border-base-300">
        <form className="flex items-center gap-2">
          <input
            type="text"
            className="flex-1 input input-bordered rounded-lg input-sm sm:input-md"
            placeholder="Type a message..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit" className="btn btn-sm btn-circle">
            <BsSend size={22} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatBox;

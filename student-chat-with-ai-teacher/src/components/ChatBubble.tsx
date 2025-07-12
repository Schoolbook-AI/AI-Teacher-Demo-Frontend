
interface Message {
  id: string;
  text: string;
  images?: string[];
  sender: 'student' | 'teacher';
  timestamp: Date;
}

interface ChatBubbleProps {
  message: Message;
}

const ChatBubble = ({ message }: ChatBubbleProps) => {
  const isStudent = message.sender === 'student';

  return (
    <div className={`flex items-start space-x-3 ${isStudent ? 'flex-row-reverse space-x-reverse justify-start' : ''}`}>
      {/* Avatar */}
      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-lg shadow-md flex-shrink-0 ${
        isStudent 
          ? 'bg-gradient-to-br from-blue-400 to-purple-500' 
          : 'bg-gradient-to-br from-amber-400 to-orange-500'
      }`}>
        {isStudent ? '👱‍♀️' : '👩‍🏫'}
      </div>

      {/* Message Content */}
      <div className={`flex flex-col ${isStudent ? 'items-end max-w-[65%]' : 'items-start flex-1'}`}>
        <div className={`rounded-2xl px-4 py-3 shadow-sm ${
          isStudent 
            ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-br-md' 
            : 'bg-white text-slate-800 border border-slate-100 rounded-bl-md'
        }`}>
          {/* Images */}
          {message.images && message.images.length > 0 && (
            <div className={`grid gap-2 mb-3 ${
              message.images.length === 1 ? 'grid-cols-1' : 
              message.images.length === 2 ? 'grid-cols-2' : 
              'grid-cols-2 md:grid-cols-3'
            }`}>
              {message.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Uploaded image ${index + 1}`}
                  className="rounded-lg max-w-full h-auto shadow-sm"
                  style={{ maxHeight: '200px', objectFit: 'cover' }}
                />
              ))}
            </div>
          )}

          {/* Text */}
          {message.text && (
            <p className={`text-sm leading-relaxed ${
              isStudent ? 'text-white' : 'text-slate-700'
            }`}>
              {message.text}
            </p>
          )}
        </div>

        {/* Subtle spacing for visual separation */}
        <div className="h-1"></div>
      </div>
    </div>
  );
};

export default ChatBubble;

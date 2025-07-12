
const ChatHeader = () => {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-purple-100 shadow-sm">
      <div className="px-6 py-4 flex items-center justify-between">
        {/* AI Teacher Info */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-xl shadow-lg">
            👩‍🏫
          </div>
          <div>
            <h1 className="font-bold text-slate-800 text-lg">Ms Saraswati</h1>
            <p className="text-xs text-slate-500">Your AI Teacher</p>
          </div>
        </div>

        {/* Center Title */}
        <div className="hidden sm:block">
          <h2 className="text-slate-600 font-medium text-sm">Chat with your AI Teacher</h2>
        </div>

        {/* Student Info */}
        <div className="flex items-center space-x-3">
          <div className="text-right hidden sm:block">
            <h3 className="font-bold text-slate-800 text-lg">Arya</h3>
            <p className="text-xs text-slate-500">Student</p>
          </div>
          <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-xl shadow-lg">
            👱‍♀️
          </div>
        </div>
      </div>
    </header>
  );
};

export default ChatHeader;

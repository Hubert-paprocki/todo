interface WelcomeProps {
  username?: string;
}

function Welcome({username}:WelcomeProps) {
  return (
    <div className="text-center p-2 font-work text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-2xl text-white uppercase tracking-wide z-10">
      <h2>Welcome <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">{username}</span> what have you planed for today?</h2>
    </div>
  )
}

export default Welcome
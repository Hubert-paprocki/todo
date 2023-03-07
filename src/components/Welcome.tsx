interface WelcomeProps {
  username?: string;
}

function Welcome({username}:WelcomeProps) {
  return (
    <div className="absolute top-1/3 text-center left-1/2 transform -translate-x-1/2 font-roboto text-5xl max-w-xl text-white uppercase tracking-wide ">
      <h2>Welcome <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-500  tracking-wide ">{username}</span> what have you planed for today?</h2>
    </div>
  )
}

export default Welcome
interface WelcomeProps {
  username?: string;
}

function Welcome({username}:WelcomeProps) {
  return (
    <div className="text-center mx-auto p-2 pb-12 xs:p-10 xs:pb-12 font-roboto text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-xl text-white uppercase tracking-wide z-10">
      <h2>Welcome <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-500  tracking-wide ">{username}</span> what have you planed for today?</h2>
    </div>
  )
}

export default Welcome
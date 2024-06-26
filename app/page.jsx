import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">Welcome to Promptopia
        <br className="max-xs:hidden"/>
        <span className="orange_gradient text-center">
            AI-Powered Prompts
        </span>
        </h1>
        <p className="desc text-center">
           Promptopia is a platform that generates AI prompts for writers, artists, and creators. 
        </p>

         <Feed/>
    </section>
  )
}

export default Home
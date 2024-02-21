//renders home page 
import React from 'react'
import Feed from '@components/Feed'

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        
        {/* underscores means that its coming from "./globals.css" */}
        <h1 className="head_text text-center">
            Discover & Share 
            {/* hidden on large devices but we wanna break the content on smaller devices   */}
            <br className="max-md:hidden" />
            <span className="orange_gradient text-center"> AI-Powerded Prompts</span>
        </h1>
        <p className="desc text-center">
            Promptopia is an open-source AI prompting tool for the modern
            workd to discover, share, and create prompts
        </p>
        <Feed/>
    </section>
  )
}

export default Home
/* eslint-disable react/no-children-prop */
import React from 'react'
import TextLoop from 'react-text-loop'

const Home = () => {
  return (
    <div className="home">
      <h1 id="hello">
        <TextLoop
          interval={2500}
          springConfig={{stiffness: 500, damping: 50}}
          children={[
            'Hello',
            '您好',
            'Bonjour',
            'Namaste',
            '안녕하세요',
            'Kumusta',
            'مرحبا',
            'Hola',
            'ආයුබෝවන්',
            'Sawubona'
          ]}
        />, my name is Elijah Sciammas. I am a Fullstack Software Engineer.
      </h1>
    </div>
  )
}

export default Home

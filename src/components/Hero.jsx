import { motion } from 'framer-motion';

import { styles } from '../styles'
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full h-screen
    mx-auto'>
      <div className={`${styles.paddingX} absolute
      inset-0 top-[120px] max-w-7xl mx-auto flex
      flex-row items-start gap-5`}>
      <div className="flex flex-col
      justify-center items-center mt-5">

<div>
  <h1 className={`${styles.heroHeadText}
  text-white`}>Hi, I'm Tasha</h1>
  <p className={`${styles.heroSubText} mt-2
  text-white-100`}>
  A Full-Stack Developer <br className="sm:block hidden" />
  and Content Creator.
  </p>
</div>
</div>
</div>

    </section>
  )
}

export default Hero
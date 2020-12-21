import React from 'react'
import { motion } from 'framer-motion'

import introText from '../../constants/intro'
import Wrapper from '../Wrapper'
import { StyledIntro } from './style'

const Intro = () => {
    return (
        <Wrapper width="85vw">
            <StyledIntro>
                {introText.map((item) =>
                    <motion.div
                        animate={{
                            transform: ['translateY(200%)', 'translateY(0%)'],
                            opacity: ['0%', '100%']
                        }}
                        transition={{
                            delay: 1,
                            duration: item.id,
                            ease: 'easeInOut',
                            times: [0, 1],
                            loop: false
                        }}
                        style={{ display: 'inline-block', width: 'auto' }}
                        className={item.className}
                        key={item.id}
                    >
                        {item.value}
                    </motion.div>
                )}
            </StyledIntro>
        </Wrapper>
    )
}

export default Intro

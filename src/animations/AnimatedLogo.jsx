import React from 'react';
import { AnimatePresence, motion } from "framer-motion";

export const AnimatedLogo = () => {
    const styles = {
        container: {
            display: 'flex',
            fontSize: '110px',
            '&:hover': {
                fontSize: '150´x'
            }
        },
        font: {
            marginLeft: 10,
            marginRight: 10,
            fontFamily: 'Raccosetta',
            color: 'white',
        }
    }
    return (
        <div style={styles.container}>
            <AnimatePresence>
                <motion.div
                    style={styles.font}
                    key='L'
                    initial={{ x: '120%' }}
                    animate={{ x: '0%', color: ["rgba(0,0,0)", "rgba(255,255,255)"] }}
                    transition={{
                        duration: 1,
                    }}
                >
                    L
                </motion.div>
                <motion.div
                    style={styles.font}
                    key='A1'
                    initial={{ y: '180%' }}
                    animate={{ y: '0%', color: ["rgba(0,0,0)", "rgba(255,255,255)"] }}
                    transition={{
                        duration: 1,
                    }}
                >
                    A
                </motion.div>
            </AnimatePresence>
            <br />
            <AnimatePresence>
                <motion.div
                    style={styles.font}
                    key='C'
                    initial={{ x: '-100%' }}
                    animate={{ x: '0%', color: ["rgba(0,0,0)", "rgba(255,255,255)"] }}
                    transition={{
                        duration: 1.2,
                    }}
                >
                    C
                </motion.div>
                <motion.div
                    style={styles.font}
                    key='A2'
                    initial={{ y: '-180%' }}
                    animate={{ y: '0%', color: ["rgba(0,0,0)", "rgba(255,255,255)"] }}
                    transition={{
                        duration: 1.2,
                    }}
                >
                    A
                </motion.div>
                <motion.div
                    style={styles.font}
                    key='S'
                    initial={{ x: '120%' }}
                    animate={{ x: '0%', color: ["rgba(0,0,0)", "rgba(255,255,255)"] }}
                    transition={{
                        duration: 1.2,
                    }}
                >
                    S
                </motion.div>
                <motion.div
                    style={styles.font}
                    key='A3'
                    initial={{ y: '-180%' }}
                    animate={{ y: '0%', color: ["rgba(0,0,0)", "rgba(255,255,255)"] }}
                    transition={{
                        duration: 1.2,
                    }}
                >
                    A
                </motion.div>
            </AnimatePresence>
            <br />
            <AnimatePresence>
                <motion.div
                    style={styles.font}
                    key='D'
                    initial={{ y: '180%' }}
                    animate={{ y: '0%', color: ["rgba(0,0,0)", "rgba(255,255,255)"] }}
                    transition={{
                        duration: 1.3,
                    }}
                >
                    D
                </motion.div>
                <motion.div
                    style={styles.font}
                    key='E'
                    initial={{ y: '-150%' }}
                    animate={{ y: '0%', color: ["rgba(0,0,0)", "rgba(255,255,255)"] }}
                    transition={{
                        duration: 1.3,
                    }}
                >
                    E
                </motion.div>
                <motion.div
                    style={styles.font}
                    key='A5'
                    initial={{ y: '180%' }}
                    animate={{ y: '0%', color: ["rgba(0,0,0)", "rgba(255,255,255)"] }}
                    transition={{
                        duration: 1.4,
                    }}
                >
                    A
                </motion.div>
                <motion.div
                    style={styles.font}
                    key='L5'
                    initial={{ x: '-180%' }}
                    animate={{ x: '0%', color: ["rgba(0,0,0)", "rgba(255,255,255)"] }}
                    transition={{
                        duration: 1.4,
                    }}
                >
                    L
                </motion.div>
            </AnimatePresence>
            <br />
            <AnimatePresence>
                <motion.div
                    style={styles.font}
                    key='L6'
                    initial={{ y: '180%', color: ["rgba(255,255,255)"] }}
                    animate={{ y: '0%', color: ["rgba(0,0,0)", "rgba(255,255,255)"] }}
                    transition={{
                        duration: 1.5,
                    }}
                >
                    L
                </motion.div>
                <motion.div
                    style={styles.font}
                    key='A6'
                    initial={{ x: '180%', color: ["rgba(255,255,255)"] }}
                    animate={{ x: '0%', color: ["rgba(0,0,0)", "rgba(255,255,255)"] }}
                    transition={{
                        duration: 1.5,
                    }}
                >
                    A
                </motion.div>
                <motion.div
                    style={styles.font}
                    key='D2'
                    initial={{ y: '180%', color: ["rgba(255,255,255)"] }}
                    animate={{ y: '0%', color: ["rgba(0,0,0)", "rgba(255,255,255)"] }}
                    transition={{
                        duration: 1.5,
                    }}
                >
                    D
                </motion.div>
                <motion.div
                    style={styles.font}
                    key='O6'
                    initial={{ x: '-280%', color: ["rgba(255,255,255)"] }}
                    animate={{ x: '0%', color: ["rgba(0,0,0)", "rgba(255,255,255)"] }}
                    transition={{
                        duration: 1.5,
                    }}
                >
                    O
                </motion.div>
            </AnimatePresence>
        </div>
    )
}
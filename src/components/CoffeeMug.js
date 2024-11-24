import React from 'react';
import { motion } from 'framer-motion';


const CoffeeMugPerks = () => {
    return (
        <div>
            <motion.div
                className="perks-container"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className="mug-box">
                    <div className="mug">
                        <img
                            src="https://www.pngall.com/wp-content/uploads/5/Coffee-Mug-PNG-Images.png"
                            alt="Coffee Mug"
                        />
                    </div>
                    <h3>Coffee Mug Perks</h3>
                    <p>
                        We know developers love their coffee mugs. Buy one of our custom "Code
                        Fuel" mugs and get a free refill every time you bring it in. Plus, it
                        doubles as a handy debugging tool – just stare into the empty mug
                        until the solution reveals itself.
                    </p>
                </div>


            </motion.div>
            <div class="container">
                <div class="row beans">
                </div>
                <div class="row grinder">
                </div>
                <div class="row grinder_bottom">
                </div>
                <div class="row v60">
                </div>
                <div class="row drip">
                </div>
                <div class="row cup">
                </div>
            </div>
        </div>
            );
};

            export default CoffeeMugPerks;

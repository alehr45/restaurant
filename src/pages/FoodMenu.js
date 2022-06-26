import React from "react";

const styles = {
  foodMenuTitleStyles: {
    marginTop: 40,
    textAlign: "center",
    fontSize: 50,
    fontFamily: "fascinate"
  },
  foodMenuSubtitleStyles: {
    textAlign: "center",
    fontSize: 30,
    fontFamily: "fascinate",
    paddingTop: 20
  },
  foodMenuIngredientStyles: {
    textAlign: "center",
    fontSize: 20,
    fontFamily: "Roboto"
  },
  hrStyles: {
    width: 500
  }
};

const FoodMenu = () => {
  return (
    <>
      <h1 style={styles.foodMenuTitleStyles}>Food</h1>
      <hr style={styles.hrStyles} />
      <div>
        <h3 style={styles.foodMenuSubtitleStyles}>-The Deli Italian-</h3>
        <h6 style={styles.foodMenuIngredientStyles}>
          Mortadella, soppresata, Greenville Farms prosciutto, provolone, swiss,
          giardinera, vinegar, oil, lettuce, tomato on a Schepps hoagie.
        </h6>
      </div>
      <div>
        <h3 style={styles.foodMenuSubtitleStyles}>-Roast Beef and Cheddar-</h3>
        <h6 style={styles.foodMenuIngredientStyles}>
          House roast beef, cheddar, mayo, lettuce, tomato and onion on a
          Schepps hoagie.
        </h6>
      </div>
      <div>
        <h3 style={styles.foodMenuSubtitleStyles}>-Turkey Avocado-</h3>
        <h6 style={styles.foodMenuIngredientStyles}>
          Braised turkey, Greenville Farms Bacon, swiss, broccoli sprouts,
          avocado, tomato and mayo on Schepps whole wheat.
        </h6>
      </div>
      <div>
        <h3 style={styles.foodMenuSubtitleStyles}>-Bahn Mi-</h3>
        <h6 style={styles.foodMenuIngredientStyles}>
          House roast pork, carrot jicama slaw, cilantro, pickled cucumber and
          lime mayo on a Schepps hoagie.
        </h6>
      </div>
      ;
    </>
  );
};

export default FoodMenu;

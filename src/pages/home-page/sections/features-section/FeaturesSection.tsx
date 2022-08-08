import { Features } from "./Features"
import classes from "./FeaturesSection.module.scss"

import stats from "assets/images/stats.svg"
import cubesSmall from "assets/images/cubes-small.svg"
import rocketSmall from "assets/images/rocket-small.svg"
import chart from "assets/images/chart.svg"
import plus from "assets/images/plus.svg"
import { Card, FeatureCardProps } from "./Card"

export const FeaturesSection = () => {
  const renderCards = () => {
    return features.map((x) => <Card {...x} key={x.title} />)
  }

  return (
    <div className={`container`}>
      <div className={classes["features-list"]}>
        <Features />
      </div>

      {/* Title */}
      <div>
        <div className={classes["upper-title"]}>Community</div>
        <div className={classes["title"]}>Lorem ipsum dolor sit amet</div>
        <div className={classes["subtitle"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      </div>

      {/* Cards */}
      <div className={`flex-row justify-between ${classes.cards}`}>
        {renderCards()}
      </div>
    </div>
  )
}

const features: FeatureCardProps[] = [
  {
    title: "Incubator/Accelerator",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,
    image: stats,
    features: [
      "Lorem ipsum dolor sit 1",
      "Lorem ipsum dolor sit 2",
      "Lorem ipsum dolor sit 3",
    ],
    action: {
      title: "Get Started",
      handler: () => {},
    },
  },
  {
    title: "Coporations",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.  Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    image: cubesSmall,
    features: [
      "Lorem ipsum dolor sit 1",
      "Lorem ipsum dolor sit 2",
      "Lorem ipsum dolor sit 3",
    ],
    action: {
      title: "Get Started",
      handler: () => {},
    },
  },
  {
    title: "Investor",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.  Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    image: chart,
    features: [
      "Lorem ipsum dolor sit 1",
      "Lorem ipsum dolor sit 2",
      "Lorem ipsum dolor sit 3",
    ],
    action: {
      title: "Get Started",
      handler: () => {},
    },
  },
  {
    title: "Startup",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.  Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    image: rocketSmall,
    features: [
      "Lorem ipsum dolor sit 1",
      "Lorem ipsum dolor sit 2",
      "Lorem ipsum dolor sit 3",
    ],
    action: {
      title: "Get Started",
      handler: () => {},
    },
  },
  {
    title: "Open Challenge",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.  Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    image: plus,
    features: [
      "Lorem ipsum dolor sit 1",
      "Lorem ipsum dolor sit 2",
      "Lorem ipsum dolor sit 3",
    ],
    action: {
      title: "Get Started",
      handler: () => {},
    },
  },
]

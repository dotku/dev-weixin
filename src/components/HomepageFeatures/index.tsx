import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "容易理解",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>科技前沿为微信开发入门者设计，浅显易懂的内容为你的开发旅程加速。</>
    ),
  },
  {
    title: "抓住重点",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        科技前沿微信开发文档为你理清微信开发中的疑难，让我们去踩坑，由你来坐享其成。
        请访问 <code>文档</code> 目录.
      </>
    ),
  },
  {
    title: "紧跟时代",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: <>我们将使用最新的技术，为你全面讲解微信开发的一切内容。</>,
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

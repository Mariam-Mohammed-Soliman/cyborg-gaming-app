import "./Container.scss";

const Container = (props) => {
  return (
    <section id="ContainerComponent">
      <div className="container">
        {props.children}
      </div>
    </section>
  );
};

export default Container;
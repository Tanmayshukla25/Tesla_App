function Section(props) {
  return (
    <>
      <div id="Model3Section" style={{backgroundImage: `url(${props.bg})`}}>
        <div id="Heading">
          <h1>{[props.heading]}</h1>
          <p>{props.tagline}</p>
        </div>

        <div id="btnParent">
          <button id="btn1">{props.leftBtn}</button>
          {props.rightBtn && <button id="btn2">{props.rightBtn}</button>}
          {/* {props.image ? (
            <div className="one">
              <img src={props.image} alt="" />
            </div>
          ) : (
            ""
          )} */}

          {props.image && (
            <div className="scrollIcons">
              <img src={props.image} alt="" />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default Section;

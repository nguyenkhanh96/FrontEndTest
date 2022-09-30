import "./index.css";

function Item(props) {
  return (
    <div class="content-item">
      <div class="content-item--title">
        <h3>{props.title}</h3>
        <div class="content-item--second">
          <img src={props.img} />
          <p>{props.content}</p>
        </div>
      </div>
    </div>
  );
}

export default Item;

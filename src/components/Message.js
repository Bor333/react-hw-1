import style from "./Message.module.css"

export const Message = (props) => {

    return <div className={style.message}>
        <p>{props.text}</p>
    </div>
}

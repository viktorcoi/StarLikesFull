import styles from './SocialBlock.module.css'

const SocialBlock = (props) => {

    const Select = e => {
        var language = document.querySelectorAll("div");
        for (var i = 0; i < language.length; i++) {
            language[i].classList.remove(`${styles.select}`);
        }
        e.currentTarget.classList.add(`${styles.select}`);
    };

    return (
        <div className={`${props.addClass} ${styles["for-social"]}`}>
            <div onClick={Select} onMouseUp={props.onClick} className={`d-flex items-center cursor-pointer transition_0_3 ${styles.social} ${styles[props.className] ?? ""}`}>
                <img className={`transition_0_3 ${styles[props.img]}`} alt={props.alt} src={`/assets/img/${props.img}.svg`}></img>
                <p>{props.children}</p>
            </div>
        </div>
    )
}

export default SocialBlock
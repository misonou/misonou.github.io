import { runCSSTransition } from "zeta-dom/cssUtil";
import "./style.css";

export default function Component() {
    return (
        <div className="css-anim">
            <div></div>
            <br />
            <button onClick={(e) => {
                const div = e.currentTarget.parentElement!;
                runCSSTransition(div, 'anim').then(() => {
                    div.querySelector('span')!.innerText = 'Completed';
                }, function () {
                    div.querySelector('span')!.innerText = 'Cancelled';
                });
            }}>
                Run Animation
            </button>
            <button onClick={(e) => {
                const div = e.currentTarget.parentElement!;
                div.classList.remove('anim');
                div.querySelector('span')!.innerText = '';
            }}>
                Reset
            </button>
            <span></span>
        </div>
    );
}

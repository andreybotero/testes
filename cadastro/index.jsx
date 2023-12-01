import react from 'react';
import style from 'style.css';

function Cadastro() {
    return (
        <div className={style.container}>
            <h1>Cadastro</h1>

            <form>
                <div className={style.group}>
                    <input type="text" required />
                    <span className={style.higligh}></span>
                    <span className={style.bar}></span>
                    <label>Name</label>
                </div>
            </form>

        </div>     
    );
}

export default Cadastro;
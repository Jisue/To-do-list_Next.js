import axios from 'axios';
import React, { useState } from 'react';
import style from '../../styles/modal.module.css';

const Modal = (props) => {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { open, close, header } = props;

    //갹채를 업데이트하기위해 useState안에 객체를 사용
    const [inputs, setInputs] = useState({    
        list_name: '',
        list_date: '',
        list_memo: '',
        list_color: '',
    })

    const setopen = () => {
        setInputs(open);
    }
    //값을 가져오기 위해 inputs에 name으로 가져왔다
    const { list_name, list_date, list_memo, list_color } = inputs

    const onChange = (e) => {
        //input에 name을 가진 요소의 value에 이벤트를 걸었다
        const { name, value } = e.target

        // 변수를 만들어 이벤트가 발생했을때의 value를 넣어줬다
        const nextInputs = {
            //스프레드 문법으로 기존의 객체를 복사한다.
            ...inputs,
            [name]: value,
        }
        //만든 변수를 seInput으로 변경해준다.
        setInputs(nextInputs)

    }
    const handleSubmit = (e) => {
        // alert(list_name + '\n' +list_date + '\n' +list_memo + '\n' +list_color);
        // e.preventDefault();

        if (confirm("Edit Todo") === false) {
            return;
        }

        const EditRequest = async () => {
            try {
                const response1 = await axios({
                    method: 'put',
                    url: 'http://localhost:3001/todos/'+open.list_index,
                    params: {
                        status : 'Edit',
                        list_name: list_name,
                        list_date: list_date,
                        list_memo: list_memo,
                        list_color: list_color
                    },
                })
            } catch (err) {
                // Handle Error Here
                console.error(err);
            }
        };
        EditRequest();

    }

    return (
        // 모달이 열릴때 openModal 클래스가 생성된다.
        <div className={open}>
            { open !== undefined ? (
                <div className={style.modal}>
                    <section>
                        <header>
                            {header}
                            <button className="close" onClick={close}> &times; </button>
                        </header>
                        <main>
                            {props.children}
                            <section className="text-center container">
                                <div className="row py-lg-5">
                                    <div className="col-lg-10 col-md-10 mx-auto">
                                        <form id="add_form" action="/posts/list" method="post" onSubmit={handleSubmit}>
                                            <input className="name form-control" type="text" placeholder="제목" name="list_name" onChange={onChange} value={list_name} />
                                            <br />
                                            <input className="form-control" id="add_date" type="date" name="list_date" onChange={onChange} value={list_date} />
                                            <br />
                                            <input className="form-control" type="text" placeholder="메모" name="list_memo" onChange={onChange} value={list_memo} />
                                            <br />
                                            <h2 className="fw-light">Color Picker <input type="color" name="list_color" onChange={onChange} value={list_color} /></h2>
                                            <br />
                                            <button className="btn btn-primary" type="submit">Edit</button>
                                        </form>
                                    </div>
                                </div>
                            </section>
                        </main>
                        <footer>
                            {open.list_name} : {open.list_date} &nbsp;&nbsp;&nbsp;
                            <button className="close" type="button" onClick={setopen}>불러오기</button>
                        </footer>
                    </section>
                </div>
            ) : null}
        </div>
    )
}

export default Modal;
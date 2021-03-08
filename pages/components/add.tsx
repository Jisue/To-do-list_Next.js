//useState를 사용하기 위하여 import
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';

function AddTodo() {
    //갹채를 업데이트하기위해 useState안에 객체를 사용
    const [inputs, setInputs] = useState({
        list_name: '',
        list_date: '',
        list_memo: '',
        list_color: '#FFFFFF',
    })
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

        if (confirm("Add Todo") === false) {
            return;
        }

        const addRequest = async () => {
            try {
                const response1 = await axios({
                    method: 'post',
                    url: 'http://localhost:3001/todos',
                    params: {
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
        addRequest();

    }

    return (
        <>
            <section className="py-5 text-center container">
                <div className="row py-lg-5">
                    <Grid container spacing={0}>
                        <Grid item xs={12} sm={3}>
                            <p></p>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <h1 className="fw-light">My List</h1>
                            <p className="lead text-muted">&#xC544;&#xB798; &#xBC84;&#xD2BC;&#xC744; &#xD074;&#xB9AD;&#xD574;&#xC11C; &#xBAA9;&#xB85D;&#xC744; &#xCD94;&#xAC00;&#xD558;&#xC138;&#xC694;.</p>
                            <form id="add_form" action="/posts/add" method="post" onSubmit={handleSubmit}>
                            <input className="name form-control" type="text" placeholder="제목" name="list_name" onChange={onChange} value={list_name} />
                            <br />
                            <input className="form-control" id="add_date" type="date" placeholder="기한" name="list_date" onChange={onChange} value={list_date} />
                            <br />
                            <input className="form-control" type="text" placeholder="내용" name="list_memo" onChange={onChange} value={list_memo} />
                            <br />
                            <h2 className="fw-light">Color Picker&nbsp;&nbsp;&nbsp;<input type="color" placeholder="#333333" name="list_color" onChange={onChange} value={list_color} /></h2>
                            <br />
                            <button className="btn btn-primary" type="submit">Add</button>
                        </form>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <p></p>
                        </Grid>
                    </Grid>
                </div>
            </section>
        </>
    )
}

export default AddTodo
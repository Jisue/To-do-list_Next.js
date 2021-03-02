// Add
const Add = () => (
    <section className="py-5 text-center container">
        <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
                <h1 className="fw-light">My List</h1>
                <p className="lead text-muted">&#xC544;&#xB798; &#xBC84;&#xD2BC;&#xC744; &#xD074;&#xB9AD;&#xD574;&#xC11C; &#xBAA9;&#xB85D;&#xC744; &#xCD94;&#xAC00;&#xD558;&#xC138;&#xC694;.</p>
            <form id="add_form" action="/posts/add" method="post">
                    <input className="name form-control" type="text" placeholder="제목" name="list_name" />
                    <br />
                    <input className="form-control" id="add_date" type="date" placeholder="기한" name="list_date" />
                    <br />
                    <input className="form-control" type="text" placeholder="내용" name="list_memo" />
                    <br />
                    <h2 className="fw-light">Color Picker<input type="color" name="list_color"/></h2>
                    <br />
                    <button className="btn btn-primary" type="submit">Add</button>
                </form>
            </div>
        </div>
    </section>
);

export default Add;
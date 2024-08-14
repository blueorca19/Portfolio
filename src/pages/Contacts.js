const Contacts = () => {
    return (
        <main className="section">
            <div className="container">
                <h1 className="title-1">Contacts</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>Munich, Bavaria, Germany</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Phone</h2>
                        <p><a href="tel:+4915162679259">+49 1516 2679259</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">WhatsApp</h2>
                        <p>+49 1516 2679259</p>
                        <p><a href="https://wa.me/4915162679259">WhatsApp</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="mailto:avdemydova@gmail.com">avdemydova@gmail.com</a></p>
                    </li>
                </ul>
            </div>
        </main>
    );
}

export default Contacts;

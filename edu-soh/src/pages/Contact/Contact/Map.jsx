
const Map = () => {
    return (
        <>
            <div
              className="col-lg-4 col-md-6 animate__animated animate__fadeInUp"
              data-wow-delay="0.3s"
            >
              <iframe
                className="position-relative rounded w-100 h-100"
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F{{page_name}}&tabs=timeline&width=500&height=150&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                frameBorder="0"
                style={{minHeight: "300px", border:"0"}}
                allowfullscreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
        </>
    );
};

export default Map;
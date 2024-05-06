import NoticeCarousal from "./NoticeCarousal";

export default function Notice() {
  return (
    <div
      className="container-xxl pb-5 animate__animated animate__fadeInUp"
      data-wow-delay="0.1s"
    >
      <div className="">
        <div className="text-center">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Notice
          </h6>
          <h1 className="mb-5">School Notice</h1>
        </div>
        <NoticeCarousal />
      </div>
    </div>
  );
}

import { images } from "../../../assets";
import InstituteSocialLinks from "./InstituteSocialLinks";

const InstituteIntro = () => {
    return (
        <>
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img
                      src={images.logo}
                      alt="Admin"
                      className="rounded-circle"
                      width="150"
                    />
                    <div className="mt-3">
                      <h4>MKS International</h4>
                      <p className="text-secondary mb-1">Kurigram Ulipur</p>
                      <p className="text-muted font-size-sm">
                        Eiin No : 345345
                      </p>
                      <button className="btn btn-primary">Follow</button>
                      <button className="btn btn-outline-primary">
                        Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* social links */}
              <InstituteSocialLinks/>
            </div>
        </>
    );
};

export default InstituteIntro;